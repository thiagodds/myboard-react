import storageUtils from "../../state/localStorageUtils";

test("should save data in browser local storage", () => {
  const data = { columns: [] };
  storageUtils.saveStateInStorage(data);

  const dataSaved = JSON.parse(localStorage.getItem("state"));
  expect(dataSaved).toEqual(data);
});

test("should return null if there isn't data in browser local storage", () => {
  const dataSaved = localStorage.getItem("temp");
  expect(dataSaved).toBeNull();
});

test("should return saved data in browser storage", () => {
  const data = { columns: [] };
  localStorage.setItem("state", JSON.stringify(data));

  const dataSaved = storageUtils.getStateFromStorage();
  expect(dataSaved).toEqual(data);
});
