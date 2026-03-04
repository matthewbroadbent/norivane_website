import React, { useState, useEffect } from 'react';
import { ARTICLES } from '../data/articles';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getCurrentMonthYear() {
  const now = new Date();
  return `${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
}

function buildSlug(chapterText) {
  // e.g. "Chapter 7" -> "chapter-7"
  return chapterText.toLowerCase().replace(/\s+/g, '-');
}

const emptySection = () => ({ heading: '', body: [''] });

const initialForm = () => {
  const nextNum = ARTICLES.length + 1;
  return {
    chapter: `Chapter ${nextNum}`,
    slug: `chapter-${nextNum}`,
    title: '',
    date: getCurrentMonthYear(),
    lens: '',
    substackUrl: '',
    heroSrc: '',
    heroAlt: '',
    excerpt: '',
    sections: [emptySection()],
  };
};

export default function InsightsAdmin() {
  const [password, setPassword] = useState(() => sessionStorage.getItem('admin_pw') || '');
  const [unlocked, setUnlocked] = useState(() => !!sessionStorage.getItem('admin_pw'));
  const [passwordInput, setPasswordInput] = useState('');
  const [form, setForm] = useState(initialForm);
  const [publishing, setPublishing] = useState(false);
  const [result, setResult] = useState(null); // { success, slug } | { error }

  // Keep slug in sync with chapter
  useEffect(() => {
    setForm(f => ({ ...f, slug: buildSlug(f.chapter) }));
  }, [form.chapter]);

  function handleUnlock(e) {
    e.preventDefault();
    setPassword(passwordInput);
    sessionStorage.setItem('admin_pw', passwordInput);
    setUnlocked(true);
  }

  function handleLock() {
    setPassword('');
    setPasswordInput('');
    sessionStorage.removeItem('admin_pw');
    setUnlocked(false);
  }

  function setField(key, value) {
    setForm(f => ({ ...f, [key]: value }));
  }

  // Sections helpers
  function setSectionHeading(idx, value) {
    setForm(f => {
      const sections = f.sections.map((s, i) => i === idx ? { ...s, heading: value } : s);
      return { ...f, sections };
    });
  }

  function setSectionParagraph(sIdx, pIdx, value) {
    setForm(f => {
      const sections = f.sections.map((s, i) => {
        if (i !== sIdx) return s;
        const body = s.body.map((p, j) => j === pIdx ? value : p);
        return { ...s, body };
      });
      return { ...f, sections };
    });
  }

  function addParagraph(sIdx) {
    setForm(f => {
      const sections = f.sections.map((s, i) => {
        if (i !== sIdx) return s;
        return { ...s, body: [...s.body, ''] };
      });
      return { ...f, sections };
    });
  }

  function removeParagraph(sIdx, pIdx) {
    setForm(f => {
      const sections = f.sections.map((s, i) => {
        if (i !== sIdx) return s;
        return { ...s, body: s.body.filter((_, j) => j !== pIdx) };
      });
      return { ...f, sections };
    });
  }

  function addSection() {
    setForm(f => ({ ...f, sections: [...f.sections, emptySection()] }));
  }

  function removeSection(idx) {
    setForm(f => ({ ...f, sections: f.sections.filter((_, i) => i !== idx) }));
  }

  function buildArticle() {
    return {
      slug: form.slug,
      chapter: form.chapter,
      title: form.title.trim(),
      date: form.date.trim(),
      lens: form.lens.trim() || null,
      substackUrl: form.substackUrl.trim(),
      heroImage: {
        src: form.heroSrc.trim(),
        alt: form.heroAlt.trim(),
      },
      excerpt: form.excerpt.trim(),
      sections: form.sections.map(s => ({
        heading: s.heading.trim() || null,
        body: s.body.map(p => p.trim()).filter(Boolean),
      })).filter(s => s.body.length > 0),
    };
  }

  function validate() {
    const errors = [];
    if (!form.chapter.trim()) errors.push('Chapter is required');
    if (!form.title.trim()) errors.push('Title is required');
    if (!form.date.trim()) errors.push('Date is required');
    if (!form.substackUrl.trim()) errors.push('Substack URL is required');
    if (!form.heroSrc.trim()) errors.push('Hero image URL is required');
    if (!form.heroAlt.trim()) errors.push('Hero image alt is required');
    if (!form.excerpt.trim()) errors.push('Excerpt is required');
    const validSections = form.sections.filter(s => s.body.some(p => p.trim()));
    if (validSections.length === 0) errors.push('At least one section with content is required');
    return errors;
  }

  async function handlePublish(e) {
    e.preventDefault();
    setResult(null);

    const errors = validate();
    if (errors.length > 0) {
      setResult({ error: errors.join(' · ') });
      return;
    }

    setPublishing(true);
    try {
      const res = await fetch('/api/publish-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, article: buildArticle() }),
      });

      const data = await res.json();

      if (res.status === 401) {
        setResult({ error: 'Incorrect password' });
        handleLock();
        return;
      }

      if (!res.ok || !data.success) {
        setResult({ error: data.error || 'Publish failed' });
        return;
      }

      setResult({ success: true, slug: data.slug });
      setForm(initialForm());
    } catch (err) {
      setResult({ error: err.message || 'Network error' });
    } finally {
      setPublishing(false);
    }
  }

  // ── Password gate ─────────────────────────────────────────────
  if (!unlocked) {
    return (
      <div className="min-h-screen bg-dark-blue flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <h1 className="text-white text-2xl font-montserrat font-bold mb-2 text-center">Insights Admin</h1>
          <p className="text-light-grey text-sm text-center mb-8">Enter your password to continue</p>
          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded px-4 py-3 focus:outline-none focus:border-teal"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-teal text-dark-blue font-montserrat font-semibold py-3 rounded hover:bg-teal/90 transition-colors"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Success state ─────────────────────────────────────────────
  if (result?.success) {
    return (
      <div className="min-h-screen bg-dark-blue flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="text-teal text-5xl mb-4">✓</div>
          <h2 className="text-white text-2xl font-montserrat font-bold mb-2">Published</h2>
          <p className="text-light-grey mb-6">Vercel will deploy in approximately 60 seconds.</p>
          <a
            href={`/insights/${result.slug}`}
            className="inline-block bg-teal text-dark-blue font-montserrat font-semibold px-6 py-3 rounded hover:bg-teal/90 transition-colors"
          >
            View article →
          </a>
          <button
            onClick={() => setResult(null)}
            className="block mx-auto mt-4 text-light-grey text-sm underline hover:text-white"
          >
            Add another article
          </button>
        </div>
      </div>
    );
  }

  // ── Main form ─────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-montserrat font-bold">Insights Admin</h1>
            <p className="text-light-grey text-sm mt-1">{ARTICLES.length} articles published · adding {form.chapter}</p>
          </div>
          <button onClick={handleLock} className="text-light-grey text-sm hover:text-white">
            Lock
          </button>
        </div>

        <form onSubmit={handlePublish} className="space-y-6">
          {/* Chapter + Slug */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-light-grey mb-1">Chapter</label>
              <input
                type="text"
                value={form.chapter}
                onChange={e => setField('chapter', e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white rounded px-4 py-2.5 focus:outline-none focus:border-teal"
              />
            </div>
            <div>
              <label className="block text-sm text-light-grey mb-1">Slug (auto)</label>
              <input
                type="text"
                value={form.slug}
                readOnly
                className="w-full bg-white/5 border border-white/10 text-white/50 rounded px-4 py-2.5 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm text-light-grey mb-1">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={e => setField('title', e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded px-4 py-2.5 focus:outline-none focus:border-teal"
              placeholder="Article title"
            />
          </div>

          {/* Date + Lens */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-light-grey mb-1">Date</label>
              <input
                type="text"
                value={form.date}
                onChange={e => setField('date', e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white rounded px-4 py-2.5 focus:outline-none focus:border-teal"
                placeholder="March 2026"
              />
            </div>
            <div>
              <label className="block text-sm text-light-grey mb-1">Lens <span className="text-white/30">(optional)</span></label>
              <input
                type="text"
                value={form.lens}
                onChange={e => setField('lens', e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white rounded px-4 py-2.5 focus:outline-none focus:border-teal"
                placeholder="e.g. Owner Dependence"
              />
            </div>
          </div>

          {/* Substack URL */}
          <div>
            <label className="block text-sm text-light-grey mb-1">Substack URL</label>
            <input
              type="text"
              value={form.substackUrl}
              onChange={e => setField('substackUrl', e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded px-4 py-2.5 focus:outline-none focus:border-teal"
              placeholder="https://theunemployableadvisor.substack.com/p/..."
            />
          </div>

          {/* Hero image */}
          <div>
            <label className="block text-sm text-light-grey mb-1">Hero image URL</label>
            <input
              type="text"
              value={form.heroSrc}
              onChange={e => setField('heroSrc', e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded px-4 py-2.5 focus:outline-none focus:border-teal"
              placeholder="https://substackcdn.com/..."
            />
          </div>
          <div>
            <label className="block text-sm text-light-grey mb-1">Hero image alt text</label>
            <input
              type="text"
              value={form.heroAlt}
              onChange={e => setField('heroAlt', e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded px-4 py-2.5 focus:outline-none focus:border-teal"
              placeholder="Descriptive alt text"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm text-light-grey mb-1">Excerpt</label>
            <textarea
              value={form.excerpt}
              onChange={e => setField('excerpt', e.target.value)}
              rows={3}
              className="w-full bg-white/10 border border-white/20 text-white rounded px-4 py-2.5 focus:outline-none focus:border-teal resize-y"
              placeholder="Short summary shown on the insights index page"
            />
          </div>

          {/* Sections */}
          <div>
            <label className="block text-sm text-light-grey mb-3">Sections</label>
            <div className="space-y-6">
              {form.sections.map((section, sIdx) => (
                <div key={sIdx} className="border border-white/15 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40 uppercase tracking-wide">Section {sIdx + 1}</span>
                    {form.sections.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSection(sIdx)}
                        className="text-xs text-white/40 hover:text-red-400 transition-colors"
                      >
                        Remove section
                      </button>
                    )}
                  </div>

                  {/* Heading */}
                  <input
                    type="text"
                    value={section.heading}
                    onChange={e => setSectionHeading(sIdx, e.target.value)}
                    className="w-full bg-white/10 border border-white/20 text-white rounded px-4 py-2 text-sm focus:outline-none focus:border-teal"
                    placeholder="Section heading (leave blank for no heading)"
                  />

                  {/* Paragraphs */}
                  <div className="space-y-2">
                    {section.body.map((para, pIdx) => (
                      <div key={pIdx} className="flex gap-2">
                        <textarea
                          value={para}
                          onChange={e => setSectionParagraph(sIdx, pIdx, e.target.value)}
                          rows={3}
                          className="flex-1 bg-white/10 border border-white/20 text-white rounded px-4 py-2 text-sm focus:outline-none focus:border-teal resize-y"
                          placeholder="Paragraph text"
                        />
                        {section.body.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeParagraph(sIdx, pIdx)}
                            className="text-white/30 hover:text-red-400 transition-colors self-start mt-2 text-lg leading-none"
                            title="Remove paragraph"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => addParagraph(sIdx)}
                    className="text-sm text-teal hover:text-teal/80 transition-colors"
                  >
                    + Add paragraph
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addSection}
              className="mt-4 text-sm text-teal border border-teal/40 rounded px-4 py-2 hover:bg-teal/10 transition-colors"
            >
              + Add section
            </button>
          </div>

          {/* Error */}
          {result?.error && (
            <div className="bg-red-900/40 border border-red-500/50 text-red-300 rounded px-4 py-3 text-sm">
              {result.error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={publishing}
            className="w-full bg-teal text-dark-blue font-montserrat font-semibold py-3 rounded hover:bg-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {publishing ? 'Publishing…' : 'Publish article'}
          </button>
        </form>
      </div>
    </div>
  );
}
