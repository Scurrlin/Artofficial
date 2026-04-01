import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import toast from 'react-hot-toast';
import CreatePost from '../CreatePost';

vi.mock('react-hot-toast', () => ({
  default: { success: vi.fn(), error: vi.fn() },
}));

vi.mock('lottie-react', () => ({
  default: () => <div data-testid="lottie-mock" />,
}));

const renderCreatePost = (props = {}) =>
  render(
    <MemoryRouter>
      <CreatePost {...props} />
    </MemoryRouter>,
  );

describe('CreatePost', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the prompt textarea and Generate button', () => {
    renderCreatePost();

    expect(screen.getByPlaceholderText(/enter your prompt/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /generate/i })).toBeInTheDocument();
  });

  it('does not call API when prompt is empty', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();

    renderCreatePost();
    await user.click(screen.getByRole('button', { name: /generate/i }));

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith('Please provide a prompt');
  });

  it('calls API and displays image on success', async () => {
    const mockBase64 = 'iVBORw0KGgoAAAANSUhEUg';

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ photo: mockBase64 }),
    });

    const user = userEvent.setup();
    renderCreatePost();

    await user.type(screen.getByPlaceholderText(/enter your prompt/i), 'A neon phoenix');
    await user.click(screen.getByRole('button', { name: /generate/i }));

    const img = await screen.findByRole('img');
    expect(img).toHaveAttribute('src', `data:image/png;base64,${mockBase64}`);
  });

  it('shows loading state while generating', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() => new Promise(() => {}));

    const user = userEvent.setup();
    renderCreatePost();

    await user.type(screen.getByPlaceholderText(/enter your prompt/i), 'A glowing skyline');
    await user.click(screen.getByRole('button', { name: /generate/i }));

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('shows error toast on API failure', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: () => Promise.resolve({ message: 'Server error' }),
    });

    const user = userEvent.setup();
    renderCreatePost();

    await user.type(screen.getByPlaceholderText(/enter your prompt/i), 'A golden wolf');
    await user.click(screen.getByRole('button', { name: /generate/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Server error');
    });
  });

  it('disables Generate button while loading', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() => new Promise(() => {}));

    const user = userEvent.setup();
    renderCreatePost();

    await user.type(screen.getByPlaceholderText(/enter your prompt/i), 'Test prompt');
    await user.click(screen.getByRole('button', { name: /generate/i }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /generating/i })).toBeDisabled();
    });
  });
});
