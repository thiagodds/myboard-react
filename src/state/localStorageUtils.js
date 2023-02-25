const storageUtils = {
  saveStateInStorage: (state) => {
    localStorage.setItem("state", JSON.stringify(state));
  },
  getStateFromStorage: () => {
    return localStorage.getItem("state");
  },
};

export default storageUtils;
