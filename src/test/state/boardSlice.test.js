import reducer, {
  addNewColumn,
  removeColumn,
  addNewCard,
  removeEmptyCard,
  updateCardTitle,
} from "../../state/boardSlice";

test("should return the initial state", () => {
  const initialState = [];
  localStorage.setItem("state", initialState);

  const result = reducer(undefined, { type: undefined });
  expect(result).toEqual({ columns: initialState });
});

test("should add a column", () => {
  const initialState = [];
  localStorage.setItem("state", initialState);

  const newColumnData = { id: "guid", title: "Test Title", tasks: [] };
  const result = reducer(undefined, addNewColumn(newColumnData));

  expect(result).toEqual({
    columns: [newColumnData],
  });
});

test("should remove a column by id", () => {
  const initialState = {
    columns: [
      {
        id: "guid",
        title: "Test Title",
        tasks: [],
      },
    ],
  };

  const result = reducer(initialState, removeColumn({ columnId: "guid" }));

  expect(result).toEqual({
    columns: [],
  });
});

test("should add a new card", () => {
  const initialState = {
    columns: [
      {
        id: "guid",
        title: "Test Title",
        tasks: [],
      },
      { id: "guid2", title: "Test Title2", tasks: [] },
    ],
  };

  const result = reducer(
    initialState,
    addNewCard({ columnId: "guid", id: "guid2", title: "task" })
  );

  expect(result).toEqual({
    columns: [
      {
        id: "guid",
        title: "Test Title",
        tasks: [
          {
            id: "guid2",
            title: "task",
          },
        ],
      },
      {
        id: "guid2",
        title: "Test Title2",
        tasks: [],
      },
    ],
  });
});

test("should remove a card with empty", () => {
  const initialState = {
    columns: [
      {
        id: "guid",
        title: "Test Title",
        tasks: [
          {
            id: "guid2",
            title: "",
          },
        ],
      },
      { id: "guid2", title: "Test Title2", tasks: [] },
    ],
  };

  const result = reducer(initialState, removeEmptyCard("guid"));

  expect(result).toEqual({
    columns: [
      {
        id: "guid",
        title: "Test Title",
        tasks: [],
      },
      {
        id: "guid2",
        title: "Test Title2",
        tasks: [],
      },
    ],
  });
});

test("should update a card title", () => {
  const initialState = {
    columns: [
      {
        id: "guid",
        title: "Test Title",
        tasks: [
          {
            id: "guid2",
            title: "Title",
          },
          {
            id: "guid3",
            title: "Title",
          },
        ],
      },
      {
        id: "guid2",
        title: "Test Title2",
        tasks: [],
      },
    ],
  };

  const result = reducer(
    initialState,
    updateCardTitle({
      columnId: "guid",
      task: { id: "guid2", title: "newTitle" },
    })
  );

  expect(result).toEqual({
    columns: [
      {
        id: "guid",
        title: "Test Title",
        tasks: [
          {
            id: "guid2",
            title: "newTitle",
          },
          {
            id: "guid3",
            title: "Title",
          },
        ],
      },
      {
        id: "guid2",
        title: "Test Title2",
        tasks: [],
      },
    ],
  });
});
