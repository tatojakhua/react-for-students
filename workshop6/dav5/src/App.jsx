import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UniversitiesPage from "./pages/UniversitiesPage";
import UniversityDetailPage from "./pages/UniversityDetailPage";
import './App.css';

const App = () => {
  const [country, setCountry] = useState("");
  const [isCountrySelected, setIsCountrySelected] = useState(false);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = () => {
    setIsCountrySelected(true);
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Welcome to the University Finder</h1>
        {!isCountrySelected ? (
          <div className="country-selection">
            <label>Enter country name: </label>
            <input
              type="text"
              value={country}
              onChange={handleChange}
              placeholder="E.g., Georgia"
            />
            <button onClick={handleSubmit}>Search Universities</button>
          </div>
        ) : (
          <UniversitiesPage country={country} />
        )}
      </div>
      <Routes>
        <Route path="/universities" element={<UniversitiesPage />} />
        <Route path="/university/:name" element={<UniversityDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;

