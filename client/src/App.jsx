import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50 shadow-md w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">

        <Link to="/" aria-label="Go to home">
          <img src={logo} alt="logo" className="w-28 object-contain cursor-pointer" />
        </Link>

        <button
          onClick={scrollToTop}
          className="hidden md:flex font-inter font-medium bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          aria-label="Scroll to top"
        >
          Back to Top
        </button>

        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-[#5358c9] transition-colors">
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;