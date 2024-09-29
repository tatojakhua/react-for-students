/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen, logRoles } from "@testing-library/react";
import Card from "./Card";
import { listItems } from "../../constants/data";

describe("Card component", () => {
  test("Renders headline", () => {
    render(<Card />);
    const headline = screen.getByRole("heading", {
      name: "Card Component",
    });
    expect(headline).toBeInTheDocument();
  });
  test("Renders P tag", () => {
    render(<Card />);
    const paragraph = screen.getByText("random text");
    expect(paragraph).toBeInTheDocument();
  });
  test("Renders input element", () => {
    render(<Card />);
    const input = screen.getByLabelText("Name");
    expect(input).toBeInTheDocument();
  });
  test("Renders password input", () => {
    render(<Card />);
    const input = screen.getByPlaceholderText("password");
    expect(input).toBeInTheDocument();
  });
  test("Renders specific DIV", () => {
    render(<Card />);
    const div = screen.getByTestId("custom-div");
    expect(div).toBeInTheDocument();
  });
  test("Renders list element", () => {
    render(<Card />);
    const list = screen.getByRole("list");
    const listItemsElements = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItemsElements).toHaveLength(listItems.length);
  });

  test("Don't renders loading element", () => {
    render(<Card />);
    const loadingDIV = screen.queryByRole("generic", {
      name: "loading...",
    });
    expect(loadingDIV).not.toBeInTheDocument();
  });

  test("Shows loading element eventually displayed", async () => {
    render(<Card />);
    const loadingDIV = await screen.findByRole(
      "button",
      {
        name: "test",
      },
      {
        timeout: 2000,
      }
    );
    expect(loadingDIV).toBeInTheDocument();
  });
  test("Manual queries", () => {
    const { container } = render(<Card />);

    const headline = container.querySelector("#headline");
    expect(headline).toBeInTheDocument();
  });

  // test("debugging", () => {
  //   const view = render(<Card />);
  //   view.debug();
  //   logRoles(view.container);
  // });
});
