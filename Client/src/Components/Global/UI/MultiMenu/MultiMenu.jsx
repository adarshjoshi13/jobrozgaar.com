import React, { useState } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import "./MultiMenu.css"; // Assuming you have your CSS file imported here

const MultiMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = (language) => {
    const isSelected = selectedLanguages.includes(language);
    if (isSelected) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <div className="multi-bar">
      <div className={`select-btn ${isOpen ? "open" : ""}`} onClick={toggleDropdown}>
        <span className="btn-text">{selectedLanguages.length > 0 ? `${selectedLanguages.length} Selected` : "Select Language"}</span>
        <span className="arrow-dwn">
          <FaChevronDown />
        </span>
      </div>

      <ul className={`list-items ${isOpen ? "open" : ""}`}>
        <li className="item" onClick={() => toggleLanguage("HTML & CSS")}>
          <span className={`checkbox ${selectedLanguages.includes("HTML & CSS") ? "checked" : ""}`}>
            <FaCheck className="check-icon" />
          </span>
          <span className="item-text">HTML & CSS</span>
        </li>
        {/* Repeat the same structure for other languages */}
      </ul>
    </div>
  );
};

export default MultiMenu;
