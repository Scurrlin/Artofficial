import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { IMAGE_MODELS, DEFAULT_MODEL_ID } from './constants';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [stats, setStats] = useState(null);
  const [busy, setBusy] = useState(false);
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL_ID);

  const currentModel = IMAGE_MODELS.find((m) => m.id === selectedModel) || IMAGE_MODELS[0];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const prefetched = window.__PREFETCH_STATS__;
        let result;

        if (prefetched) {
          window.__PREFETCH_STATS__ = null;
          result = await prefetched;
        }

        if (!result) {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/post/stats`);
          if (!response.ok) return;
          result = await response.json();
        }

        await new Promise((resolve) => setTimeout(resolve, 0));
        setStats(result.data);
      } catch (err) {
        console.error('Error fetching stats:', err.message);
      }
    };
    fetchStats();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: '#6dadeb',
              color: '#fff',
            },
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
          },
          error: {
            style: {
              background: '#e06b6b',
              color: '#fff',
              maxWidth: '90vw',
              wordBreak: 'break-word',
            },
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-[#10131f] focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-50 shadow-md w-full flex justify-between items-center bg-white/70 backdrop-blur-md sm:px-8 px-4 py-4 border-b border-white/30">
          {busy && (
            <div className="absolute inset-0 z-10 cursor-not-allowed" />
          )}

          <Link to="/" aria-label="Go to home">
            <img
              src={currentModel.textLogo}
              alt={`${currentModel.label} logo`}
              className="w-28 object-contain cursor-pointer"
            />
          </Link>

          <div className="flex space-x-4">
            <button
              onClick={scrollToTop}
              className="font-inter font-medium bg-[#10131f] text-white px-4 py-2 rounded-md cursor-pointer"
              aria-label="Scroll to top"
            >
              Back to Top
            </button>

            <Link
              to="/create-post"
              className="font-inter font-medium bg-[#10131f] text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Create
            </Link>
          </div>
        </header>

        <main id="main-content" className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home stats={stats} selectedModel={selectedModel} />} />
            <Route path="/create-post" element={<CreatePost onBusyChange={setBusy} selectedModel={selectedModel} onModelChange={setSelectedModel} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
