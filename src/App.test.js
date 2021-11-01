import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with the banner', async () => {
  render(<App/>);
  expect(await screen.getByTestId("banner")).toBeVisible();
});
