import { fireEvent, screen } from "@testing-library/react";
import BoardColumn from "../../components/home/BoardColumn";
import renderWithProviders from "../testUtils";

test("should render with title", () => {
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

  renderWithProviders(<BoardColumn id={1} />, intialState);

  screen.getByText("Title");
});

test("should show options when user click in options button", () => {
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

  renderWithProviders(<BoardColumn id={1} />, intialState);

  expect(screen.queryByRole("menuitem", { name: "Remove Column" })).toBeNull();

  const button = screen.getByRole("button", { name: "options-button" });
  fireEvent.click(button);

  screen.getByRole("menuitem", { name: "Remove Column" });
});

test("should remove column when user click in remove column from options button", () => {
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

  renderWithProviders(<BoardColumn id={1} />, intialState);

  const button = screen.getByRole("button", { name: "options-button" });
  fireEvent.click(button);

  const removeButton = screen.getByRole("menuitem", { name: "Remove Column" });

  let errorCatched;
  try {
    fireEvent.click(removeButton);
  } catch (error) {
    errorCatched = error.message;
  }

  expect(errorCatched).toEqual(
    "Cannot read properties of undefined (reading 'title')"
  );
});

test("should add a new card when user click in menu", () => {
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

  renderWithProviders(<BoardColumn id={1} />, intialState);
  const newCardButton = screen.getByText("Add a new Card");
  fireEvent.click(newCardButton);
});
