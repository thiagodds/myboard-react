import Menu from "../../components/home/Menu";
import { render, screen } from "@testing-library/react";

test("should render Menu component", () => {
  render(<Menu />);
  screen.getByRole("heading", { name: "My Board" });
});
