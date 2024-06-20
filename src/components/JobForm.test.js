import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import JobForm from "./JobForm";
import { addJob } from "../redux/reducers/jobReducer";

const mockStore = configureStore([]);

describe("JobForm Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      jobs: {
        jobList: [],
      },
    });
  });

  it("renders form inputs correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <JobForm isEditing={false} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/position/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
  });

  it("handles form submission", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <JobForm isEditing={false} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/position/i), {
      target: { value: "Back End Engineer" },
    });
    fireEvent.change(screen.getByLabelText(/company/i), {
      target: { value: "Amazon" },
    });
    fireEvent.change(screen.getByLabelText(/status/i), {
      target: { value: "Interview" },
    });

    fireEvent.click(screen.getByRole("button", { name: /add job/i }));

    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual(
        addJob({
          id: expect.any(Number),
          position: "Back End Engineer",
          company: "Amazon",
          status: "Interview",
        })
      );
    });
  });
});
