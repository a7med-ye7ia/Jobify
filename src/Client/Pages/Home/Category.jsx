import React from 'react'
import "./Category.css"



const Category = () => {

      const categories = [
        { id: 1, title: "Agriculture", jobs: "1254 jobs", icon: "🌱" },
        { id: 2, title: "Metal Production", jobs: "816 jobs", icon: "🎯" },
        { id: 3, title: "Commerce", jobs: "2082 jobs", icon: "🛍️" },
        { id: 4, title: "Construction", jobs: "1520 jobs", icon: "🏗️" },
        { id: 5, title: "Hotels & Tourism", jobs: "1022 jobs", icon: "🏨" },
        { id: 6, title: "Education", jobs: "1496 jobs", icon: "🎓" },
        { id: 7, title: "Financial Services", jobs: "1529 jobs", icon: "💰" },
        { id: 8, title: "Transport", jobs: "1244 jobs", icon: "🚌" },
      ];
  return (
    <div className="container">
      <h1>Browse by Category</h1>
      <p className="subtitle">
      
      </p>
      <div className="temp">
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
              <span className="jobs-count">{category.jobs}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category