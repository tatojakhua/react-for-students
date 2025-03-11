import React from "react";
import { useLocation } from "react-router-dom";
import './UniversityDetailPage.css';

const UniversityDetailPage = () => {
  const location = useLocation();
  const { university } = location.state;

  return (
    <div className="university-detail-page">
      <h2>{university.name}</h2>
      <p><strong>Country:</strong> {university.country}</p>
      <p><strong>Website:</strong> <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">{university.web_pages[0]}</a></p>
    </div>
  );
};

export default UniversityDetailPage;
