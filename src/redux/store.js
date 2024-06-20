import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./reducers/jobReducer";

/**
 * Configure the redux store with jobReducer.
 *
 * @returns {Object} The configured Redux store.
 */

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store;
