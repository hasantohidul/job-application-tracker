import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter, useNavigate } from "react-router-dom";
import JobCard from "./JobCard";
import { deleteJob } from "../redux/reducers/jobReducer";

const mockStore = configureStore([]);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("JobCard Component", () => {
  let store;
  const mockNavigate = jest.fn();

  beforeEach(() => {
    store = mockStore({
      jobs: {
        jobList: [
          {
            id: 1,
            position: "Full Stack Engineer",
            company: "IBM",
            status: "Offer",
          },
        ],
      },
    });

    useNavigate.mockReturnValue(mockNavigate);
  });

  it("renders job details correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <JobCard
            job={{
              id: 1,
              position: "Full Stack Engineer",
              company: "IBM",
              status: "Offer",
            }}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/full stack engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/ibm/i)).toBeInTheDocument();
    expect(screen.getByText(/offer/i)).toBeInTheDocument();
  });

  it("handles edit button click and navigates to the edit form", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <JobCard
            job={{
              id: 1,
              position: "Full Stack Engineer",
              company: "IBM",
              status: "Offer",
            }}
          />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /edit/i }));

    expect(mockNavigate).toHaveBeenLastCalledWith('/edit-job/1')
  });

  it("handles delete button click", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <JobCard
            job={{
              id: 1,
              position: "Full Stack Engineer",
              company: "IBM",
              status: "Offer",
            }}
          />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));

    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual(deleteJob(1));
    });
  });
});
