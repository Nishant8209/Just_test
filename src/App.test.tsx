
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders the heading and image', () => {
    render(<App />);

    // Check if heading exists
    expect(screen.getByText(/Welcome to the App/i)).toBeInTheDocument();

    // Check if the image exists and has the mocked src
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe('test-image-stub');
  });
});

