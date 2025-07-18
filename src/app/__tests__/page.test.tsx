import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Landing Page", () => {
  it("renders heading", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { level: 1, name: /welcome/i })
    ).toBeInTheDocument();
  });
});
