import Board from "../../components/home/Board";
import renderWithProviders from "../testUtils";
import { screen } from "@testing-library/react";

test("should render empty board", () => {
  renderWithProviders(<Board />);

  screen.getByRole("button", { name: "new-column" });
});

test("should render one column", () => {
  const intialState = {
    board: {
      columns: [
        {
          id: 1,
          title: "Title",
          tasks: [],
        },
      ],
    },
  };

  renderWithProviders(<Board />, intialState);

  screen.getByText("Add a new Card");
});
