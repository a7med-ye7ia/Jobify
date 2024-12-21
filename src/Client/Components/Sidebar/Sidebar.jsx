import React from "react";
import "./Sidebar.css"; 

const Sidebar = ({
  Search,
  setSearch,
  selectedCategories,
  setSelectedCategories,
}) => {
  const categories = [
    { name: "Commerce" },
    { name: "Telecommunications" },
    { name: "Hotels & Tourism" },
    { name: "Education" },
    { name: "Financial Services" },
  ];

  const checkcategory = (categoryName) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryName)) {
        return prev.filter((item) => item !== categoryName);
      } else {
        // إذا لم تكن الفئة موجودة، أضفها
        return [...prev, categoryName];
      }
    });
  };


  return (
    <div className="sidebar-container">
      <p className="filters-title">Filters</p>
      <div className="filters-box">
        {/* // ! search */}
        <div className="search-section">
          <h2 className="search-title">Search by Job Title</h2>
          <input
            type="text"
            placeholder="Job title or company"
            className="search-input"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* // ! category */}
        <div className="category-section">
          <h3 className="category-title">Category</h3>
          {categories.map((category) => (
            <div key={category.name} className="category-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => checkcategory(category.name)}
                />
                <span className="checkbox-text">{category.name}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
