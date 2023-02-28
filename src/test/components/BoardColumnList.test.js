import { screen } from "@testing-library/react";
import BoardColumnList from "../../components/home/BoardColumnList";
import renderWithProviders from "../testUtils";

test("should render a list", () => {
  const intialState = {
    board: {
      columns: [
        {
          id: 1,
          title: "Title",
          tasks: [
            {
              id: 1,
              title: "Test",
            },
            {
              id: 2,
              title: "Test",
            },
          ],
        },
      ],
    },
  };

  renderWithProviders(<BoardColumnList columnId={1} />, intialState);

  screen.getAllByRole("separator");
});
