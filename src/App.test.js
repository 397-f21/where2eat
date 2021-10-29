import React from "react";
import { act, render, screen } from '@testing-library/react';
import App from './App';
import Banner from './components/Banner';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
})

test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders homepage', () => {
  render(<App/>);
  const app = document.querySelector("[data-testid='App']");
  expect(app).toBeVisible();
  const banner = document.querySelector("[data-testid='banner']");
  expect(banner).toBeVisible();
});
