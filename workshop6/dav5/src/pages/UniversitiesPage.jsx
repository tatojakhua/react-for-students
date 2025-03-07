import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './UniversitiesPage.css';

const UniversitiesPage = ({ country }) => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error("Error fetching universities:", error));
  }, [country]);

  return (
    <div className="universities-page">
      <h2>Universities in {country}</h2>
      <ul className="universities-list">
        {universities.map((university, index) => (
          <li key={index} className="university-item">
            <Link to={`/university/${university.name}`} state={{ university }}>
              {university.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversitiesPage;
