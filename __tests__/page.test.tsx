import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Page from '../src/app/page';

import React from 'react';

describe('Landing Page', () => {
  it('renders heading', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 1, name: /welcome/i })
    ).toBeInTheDocument();
  });
});
