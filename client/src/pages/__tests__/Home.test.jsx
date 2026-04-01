import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home from '../Home';

vi.mock('../../components', () => ({
  Card: ({ name, prompt, photo }) => (
    <div data-testid="card">
      <img src={photo} alt={prompt} />
      <p>{name}</p>
    </div>
  ),
  FormField: ({ name, placeholder, value, handleChange, labelName }) => (
    <div>
      <label htmlFor={name}>{labelName}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  ),
  StatCard: () => null,
}));

vi.mock('../../components/Loader', () => ({
  default: () => <div role="status">Loading...</div>,
}));

const mockPosts = [
  { _id: '1', name: 'Alice', prompt: 'A sunset over mountains', photo: 'https://example.com/one.jpg' },
  { _id: '2', name: 'Bob', prompt: 'A neon cityscape', photo: 'https://example.com/two.jpg' },
];

describe('Home', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    window.__PREFETCH_POSTS__ = null;
  });

  it('renders cards from fetched post data', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ data: mockPosts }),
    });

    render(<Home stats={null} />);

    expect(await screen.findByAltText('A sunset over mountains')).toBeInTheDocument();
    expect(screen.getByAltText('A neon cityscape')).toBeInTheDocument();
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });

  it('shows empty state when there are no posts', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ data: [] }),
    });

    render(<Home stats={null} />);

    expect(await screen.findByText(/no posts found/i)).toBeInTheDocument();
  });

  it('does not crash on malformed post data', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          data: [
            { _id: '1', name: 'Good', prompt: 'A valid prompt', photo: 'https://example.com/good.jpg' },
            { _id: '2' },
          ],
        }),
    });

    render(<Home stats={null} />);

    await waitFor(() => {
      expect(screen.getAllByTestId('card')).toHaveLength(2);
    });

    expect(screen.getByAltText('A valid prompt')).toBeInTheDocument();
  });
});
