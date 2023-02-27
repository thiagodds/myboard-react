const storageUtils = {
  saveStateInStorage: (state) => {
    localStorage.setItem("state", JSON.stringify(state));
  },
  getStateFromStorage: () => {
    const data = localStorage.getItem("state");
    if (data !== null) {
      return JSON.parse(data);
    }

    return null;
  },
};

export default storageUtils;
