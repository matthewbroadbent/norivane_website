import https from 'https';

function githubRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { body = {}; }
    }
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const { password, article } = body;

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    if (!article) {
      return res.status(400).json({ error: 'Missing article data' });
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      return res.status(500).json({ error: 'Server misconfiguration: missing GITHUB_TOKEN' });
    }

    const owner = 'matthewbroadbent';
    const repo = 'norivane_website';
    const filePath = 'src/data/articles.json';
    const authHeader = `Bearer ${token}`;

    const getOptions = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repo}/contents/${filePath}`,
      method: 'GET',
      headers: {
        'Authorization': authHeader,
        'User-Agent': 'norivane-admin',
        'Accept': 'application/vnd.github+json',
      },
    };

    const getResult = await githubRequest(getOptions, null);

    if (getResult.status !== 200) {
      return res.status(500).json({ error: 'GitHub GET failed', status: getResult.status, detail: getResult.body });
    }

    const sha = getResult.body.sha;
    const currentContent = Buffer.from(getResult.body.content, 'base64').toString('utf8');

    let articles;
    try {
      articles = JSON.parse(currentContent);
    } catch (err) {
      return res.status(500).json({ error: 'Failed to parse existing articles JSON', detail: err.message });
    }

    articles.push(article);

    const newContent = JSON.stringify(articles, null, 2);
    const encodedContent = Buffer.from(newContent).toString('base64');

    const chapterNum = articles.length;
    const commitMessage = `Add Chapter ${chapterNum}: ${article.title}`;

    const putOptions = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repo}/contents/${filePath}`,
      method: 'PUT',
      headers: {
        'Authorization': authHeader,
        'User-Agent': 'norivane-admin',
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
    };

    const putResult = await githubRequest(putOptions, { message: commitMessage, content: encodedContent, sha });

    if (putResult.status !== 200 && putResult.status !== 201) {
      return res.status(500).json({ error: 'GitHub PUT failed', status: putResult.status, detail: putResult.body });
    }

    return res.status(200).json({ success: true, slug: article.slug });

  } catch (err) {
    return res.status(500).json({ error: 'Unexpected server error', detail: err.message });
  }
}
