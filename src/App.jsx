import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { trackPageView } from './utils/analytics';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(pathname);
  }, [pathname]);
  return null;
}
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import Diagnostic from './pages/Diagnostic';
import ExitArchitecture from './pages/ExitArchitecture';
import About from './pages/About';
import Insights from './pages/Insights';
import InsightArticle from './pages/InsightArticle';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Sitemap from './pages/Sitemap';
import BusinessOracle from './pages/BusinessOracle';
import NotFound from './pages/NotFound';
import SitemapGenerator from './components/SitemapGenerator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <SitemapGenerator />
        <Routes>
          {/* Sitemap Route */}
          <Route path="/sitemap.xml" element={<Sitemap />} />

          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/exit-architecture" element={<ExitArchitecture />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />

            <Route path="/business-oracle" element={<BusinessOracle />} />

            {/* Redirects for removed pages */}
            <Route path="/exit" element={<Navigate to="/exit-architecture" replace />} />
            <Route path="/ai" element={<Navigate to="/what-we-do" replace />} />
            <Route path="/assessment" element={<Navigate to="/diagnostic" replace />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
