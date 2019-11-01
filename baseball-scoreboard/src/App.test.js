import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('it displays the strike count', () => {
  const { getByText } = render(<App />);
  getByText(/strike count/i)
})

test('it displays the ball count', () => {
  const { getByText } = render(<App />);
  getByText(/ball count/i)
})

test('it displays the strike button', () => {
  const { getByTestId } = render(<App />);
  getByTestId('strike_btn')
})

test('it displays the ball button', () => {
  const { getByTestId } = render(<App />);
  getByTestId('ball_btn')
})

test('it displays the foul button', () => {
  const { getByTestId } = render(<App />);
  getByTestId('foul_btn')
})

test('it displays the hit button', () => {
  const { getByTestId } = render(<App />);
  getByTestId('hit_btn')
})

test('it displays both strike elements', () => {
  const { getAllByText } = render(<App />);
  getAllByText(/strike/i)
})