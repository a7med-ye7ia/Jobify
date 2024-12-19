import React from "react";

const Sidebar = ({
  Search,
  setSearch,
  selectedCategories,
  setSelectedCategories,
}) => {
  const categories = [
    { name: "Commerce", count: 10 },
    { name: "Telecommunications", count: 10 },
    { name: "Hotels & Tourism", count: 10 },
    { name: "Education", count: 10 },
    { name: "Financial Services", count: 10 },
  ];

  const checkcategory = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((item) => item !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="col-span-1 bg-gray-100 p-4 rounded-lg shadow-md">
      <p className="font-semibold">Filters</p>
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow">
        // ! search
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Search by Job Title</h2>
          <input
            type="text"
            placeholder="Job title or company"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

// ! category
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Category</h3>
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between mb-2"
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-teal-600 rounded"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => checkcategory(category.name)}
                />
                <span className="ml-2 text-gray-700">{category.name}</span>
              </label>
              <span className="text-gray-500 text-sm">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
