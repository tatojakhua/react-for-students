import { render, screen } from "@testing-library/react";
import App from "./App";

describe("APP component", () => {
  test("NOT Renders headline in App component", () => {
    render(<App />);
    const headline = screen.queryByText(/App/i);
    expect(headline).not.toBeInTheDocument();
  });
});
