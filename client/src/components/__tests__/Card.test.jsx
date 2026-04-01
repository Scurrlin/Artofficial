import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Card from '../Card';

vi.mock('react-lazy-load-image-component', () => ({
  LazyLoadImage: (props) => <img {...props} />,
}));

vi.mock('react-lazy-load-image-component/src/effects/blur.css', () => ({}));

vi.mock('react-hot-toast', () => ({
  default: { success: vi.fn(), error: vi.fn() },
}));

const defaultProps = {
  _id: 'abc123',
  name: 'Alice',
  prompt: 'A coral phoenix rising from ashes',
  photo: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
  priority: false,
};

describe('Card', () => {
  it('renders image with prompt as alt text', () => {
    render(<Card {...defaultProps} />);

    const img = screen.getByAltText('A coral phoenix rising from ashes');
    expect(img).toBeInTheDocument();
  });

  it('renders the prompt text and creator name', () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByText('A coral phoenix rising from ashes')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('handles missing photo URL gracefully', () => {
    render(<Card {...defaultProps} photo="" />);

    const img = screen.getByAltText('A coral phoenix rising from ashes');
    expect(img).toHaveAttribute('src', '');
  });
});
