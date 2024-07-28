import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import JobForm from "./components/JobForm";
import { useTheme } from "./contexts/ThemeContext";

/**
 * App component to set up routing for the application
 * 
 * @returns {JSX.Element} The App component.
 */
function App() {
  const {theme} = useTheme();
  return (
    <div data-theme={theme}>
         <Router>
      <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-job" element={<JobForm isEditing={false} />} />
        <Route path="/edit-job/:id" element={<JobForm isEditing={true} />} />
      </Routes>
      </div>
    </Router>
    </div>
 
  );
}

export default App;