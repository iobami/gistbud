export default {
  setErrorMessage: (state, errorMessage) => {
    state.errorMessage = errorMessage;
  },
  setSuccessMessage: (state, successMessage) => {
    state.successMessage = successMessage;
  },
  setHideHeader: (state, newState) => {
    state.hideHeader = newState;
  },
};
