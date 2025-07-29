import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ConvAI tagline', () => {
  render(<App />);
  const tagline = screen.getByText(/Meetings\. Transformed by AI\./i);
  expect(tagline).toBeInTheDocument();
});
