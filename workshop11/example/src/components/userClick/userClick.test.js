import { screen, render } from "@testing-library/react";
import UserClick from "./UserClick";
import user from "@testing-library/user-event";

describe("User click interactions", () => {
  test("renders increment button", () => {
    render(<UserClick />);
    const incrementBTN = screen.getByRole("button", {
      name: "increment",
    });
    expect(incrementBTN).toBeInTheDocument();
  });
  test("click increment button", async () => {
    user.setup();
    render(<UserClick />);
    const incrementBTN = screen.getByRole("button", {
      name: "increment",
    });
    const headline = screen.getByRole("heading");
    await user.click(incrementBTN);
    expect(headline).toHaveTextContent("Counter: 1");
  });
});
