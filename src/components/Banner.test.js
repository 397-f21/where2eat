import React from "react";
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

test('renders Banner with logo and topic', async () => {
    render(<Banner />);
    expect(await screen.getByTestId("logo")).toBeVisible();
    expect(await screen.getByTestId("topic")).toBeVisible();
});