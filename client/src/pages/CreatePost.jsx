import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/image`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        if (!response.ok) {
          const errorData = await response.text();
          throw new Error(errorData || `Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setForm({ ...form, photo: `data:image/png;base64,${data.photo}` });
        toast.success('Image generated successfully!');
      } catch (err) {
        console.error('Error generating image:', err);
        toast.error(err.message || 'Failed to generate image. Please try again.');
      } finally {
        setGeneratingImg(false);
      }
    } else {
      toast.error('Please provide a prompt');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
        }

        await response.json();
        toast.success('Image shared successfully!');
        navigate('/');
      } catch (err) {
        console.error('Error sharing post:', err);
        toast.error(err.message || 'Failed to share image. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      toast.error('Please generate an image with proper details');
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create Image</h1>
        <p className="mt-2 text-[#666e75] text-[16px]">Can't think of a prompt? Click the "Surprise me" button for one of 50 curated options!</p>
      </div>

      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-5 lg:w-1/2">
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              handleChange={handleChange}
            />

            <FormField
              labelName="Prompt"
              name="prompt"
              placeholder="Enter your prompt here"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
              isTextarea
            />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={generateImage}
                className="text-white bg-[#10131f] font-medium rounded-md text-base px-5 py-2.5 text-center cursor-pointer"
              >
                {generatingImg ? 'Generating...' : 'Generate'}
              </button>
              <button
                type="submit"
                disabled={!form.photo}
                className="text-white bg-[#10131f] font-medium rounded-md text-base px-5 py-2.5 text-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? 'Sharing...' : 'Add to Feed'}
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative aspect-square w-full max-w-md rounded-xl bg-gray-50 border border-gray-300 flex justify-center items-center overflow-hidden">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="w-9/12 h-9/12 object-contain opacity-40"
                />
              )}

              {generatingImg && (
                <div className="absolute inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;