import { describe, expect, it } from "vitest";
import Login from "./Login";

import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import Employee from "./Employee";

describe("Login Btn - Login Page Rendering", () => {
  it("the title is visible", () => {
    const { getAllByTestId } = render(<Login />);
    expect(getAllByTestId("login-test")).toBeDefined();
  });
});

describe("Sales Card - Sales Page Rendering", () => {
  it("the title is visible", () => {
    const { getAllByTestId } = render(<Dashboard />);
    expect(getAllByTestId("sales-num")).toBeDefined("Sales");
  });
});

describe("Present Card - Employee Page Rendering", () => {
  it("the title is visible", () => {
    const { getAllByTestId } = render(<Employee />);
    expect(getAllByTestId("present-card")).toBeDefined("Present");
  });
});

