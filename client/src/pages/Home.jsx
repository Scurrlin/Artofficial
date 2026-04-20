import React, { Suspense, useState, useEffect } from 'react';
import { Card, FormField, StatCard } from '../components';
import { IMAGE_MODELS } from '../constants';

const Loader = React.lazy(() => import('../components/Loader'));

const PRIORITY_COUNT = 1;

const FALLBACK_PREVIEW_TRIGGER = 'image not found';
const FALLBACK_PREVIEW_POST = {
  _id: 'fallback-preview',
  name: 'Art/official',
  prompt: "Fallback image shown when an asset fails to load",
  photo: '',
};

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post, index) => (
      <Card key={post._id} {...post} priority={index < PRIORITY_COUNT} />
    ));
  }

  return (
    <h2 className="mt-5 font-bold text-[#10131f] text-xl uppercase whitespace-nowrap">{title}</h2>
  );
};

const Home = ({ stats, selectedModel }) => {
  const currentModel = IMAGE_MODELS.find((m) => m.id === selectedModel) || IMAGE_MODELS[0];
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState(null);

  const [showLoader, setShowLoader] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setShowLoader(true), 3000);
      return () => clearTimeout(timer);
    }
    setShowLoader(false);
  }, [loading]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const prefetched = window.__PREFETCH_POSTS__;
        let result;

        if (prefetched) {
          window.__PREFETCH_POSTS__ = null;
          result = await prefetched;
        }

        if (!result) {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/post`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });

          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }

          result = await response.json();
        }

        await new Promise((resolve) => setTimeout(resolve, 0));
        setAllPosts(result.data);
      } catch (err) {
        console.error('Error fetching posts:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    // Cleanup timeout on unmount
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    const trimmedQuery = query.trim();
    setSearchText(query);

    clearTimeout(searchTimeout);

    setSearchTimeout(
      setTimeout(() => {
        if (trimmedQuery === '') {
          setSearchedResults(null);
          return;
        }

        if (trimmedQuery === FALLBACK_PREVIEW_TRIGGER) {
          setSearchedResults([FALLBACK_PREVIEW_POST]);
          return;
        }

        const searchResult = (allPosts || []).filter((item) => {
          const modelEntry = IMAGE_MODELS.find((m) => m.id === item.modelId);
          const modelLabel = modelEntry?.label?.toLowerCase() || '';
          return (
            item.name.toLowerCase().includes(trimmedQuery) ||
            item.prompt.toLowerCase().includes(trimmedQuery) ||
            (item.modelId || '').toLowerCase().includes(trimmedQuery) ||
            modelLabel.includes(trimmedQuery)
          );
        });

        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const renderData = searchText ? searchedResults : allPosts;
  const renderTitle = searchText ? "No Search Results Found" : "No posts found";

  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-6">
        <div>
          <h1 className="font-extrabold text-[#10131f] text-[32px]">Art/official</h1>
          <p className="mt-2 text-[#10131f] text-[16px]">
            Explore a collection of imaginative AI-generated images!
          </p>
        </div>

        {stats && (
          <div className="flex justify-center md:justify-end">
            <StatCard
              imageCount={stats.imageCount}
              userCount={stats.userCount}
              iconLogo={currentModel.iconLogo}
            />
          </div>
        )}
      </div>

      <div className="mt-10 max-w-[700px] mx-auto">
        <FormField
          type="text"
          name="text"
          labelName="Search posts"
          srOnly
          placeholder="🔍 Search posts by name, prompt, or model"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          showLoader && (
            <Suspense fallback={null}>
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            </Suspense>
          )
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#10131f] text-xl mb-3">
                Showing results for "{searchText}":
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              <RenderCards data={renderData} title={renderTitle} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;