import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getRandomPrompt } from '../utils';
import { FormField, Loader, ModelSelector } from '../components';
import { IMAGE_MODELS } from '../constants';

const CreatePost = ({ onBusyChange, selectedModel, onModelChange }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const currentModel = IMAGE_MODELS.find((m) => m.id === selectedModel) || IMAGE_MODELS[0];

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    onBusyChange?.(generatingImg || loading);
    return () => onBusyChange?.(false);
  }, [generatingImg, loading, onBusyChange]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setForm((prev) => ({ ...prev, photo: '' }));
        setGeneratingImg(true);

        const controller = new AbortController();
        abortControllerRef.current = controller;

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/image`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
            model: selectedModel,
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          let errorMessage;
          try {
            const errorData = await response.json();
            errorMessage = errorData.message;
          } catch {
            errorMessage = await response.text();
          }
          throw new Error(errorMessage || `Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setForm((prev) => ({ ...prev, photo: `data:image/png;base64,${data.photo}` }));
        toast.success('Image generated successfully!');
      } catch (err) {
        if (err.name === 'AbortError') {
          toast.success('Image generation cancelled');
          return;
        }
        console.error('Error generating image:', err);
        toast.error(err.message || 'Failed to generate image. Please try again.');
      } finally {
        abortControllerRef.current = null;
        setGeneratingImg(false);
      }
    } else {
      toast.error('Please provide a prompt');
    }
  };

  const cancelGeneration = () => {
    abortControllerRef.current?.abort();
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
          body: JSON.stringify({ ...form, model: selectedModel }),
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
        <h1 className="font-extrabold text-[#10131f] text-[32px]">Create Image</h1>
        <p className="mt-2 mb-6 text-[#10131f] text-[16px]">Can't think of a prompt? Click the "Surprise me" button for one of 50 curated options!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="flex flex-col gap-5 lg:w-1/2 max-w-[600px]">
            <ModelSelector
              selectedModel={selectedModel}
              onChange={onModelChange}
              disabled={generatingImg || loading}
            />
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
              disabled={generatingImg || loading}
            />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={generateImage}
                disabled={generatingImg || loading}
                className="text-white bg-[#10131f] font-medium rounded-md text-base px-5 py-2.5 text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {generatingImg ? 'Generating...' : 'Generate'}
              </button>
              <button
                type={generatingImg ? 'button' : 'submit'}
                onClick={generatingImg ? cancelGeneration : undefined}
                disabled={!generatingImg && (!form.photo || loading)}
                className="text-white bg-[#10131f] font-medium rounded-md text-base px-5 py-2.5 text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sharing...' : generatingImg ? 'Cancel' : 'Add to Feed'}
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className={`relative aspect-square w-full max-w-md short:max-w-sm rounded-xl border border-[#10131f]/30 flex justify-center items-center overflow-hidden ${form.photo || generatingImg ? 'bg-[#10131f]' : ''}`}>
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-cover"
                />
              ) : generatingImg ? (
                <Loader variant="light" />
              ) : (
                <div
                  className="absolute inset-0 bg-[#10131f]"
                  style={{
                    transform: 'translateZ(0)',
                    maskImage: `url('${currentModel.iconLogo}'), linear-gradient(#fff, #fff)`,
                    maskSize: '75% 75%, 100% 100%',
                    maskPosition: 'center, center',
                    maskRepeat: 'no-repeat, no-repeat',
                    maskComposite: 'exclude',
                    WebkitMaskImage: `url('${currentModel.iconLogo}'), linear-gradient(#fff, #fff)`,
                    WebkitMaskSize: '75% 75%, 100% 100%',
                    WebkitMaskPosition: 'center, center',
                    WebkitMaskRepeat: 'no-repeat, no-repeat',
                    WebkitMaskComposite: 'xor',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
