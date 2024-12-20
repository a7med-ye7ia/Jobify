import { useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Job from "../../Components/Job/Job.jsx";
import Companies from "../../Components/Companies/Companies.jsx";
import { sortByTime } from "../../Utilities/SortByTime.js";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import { FaChevronDown } from "react-icons/fa";

const Jobs = ({ jobs }) => {
  const [dropdown, setDropdown] = useState(false);
  const [sortByNewest, setSortByNewest] = useState(false);
  const [sortByOldest, setSortByOldest] = useState(false);
  const [Search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleSortNewest = () => {
    setSortByNewest(true);
    setSortByOldest(false);
    setDropdown(false);
  };

  const toggleSortOldest = () => {
    setSortByOldest(true);
    setSortByNewest(false);
    setDropdown(false);
  };

  const toogelSortDef = () => {
    setSortByNewest(false);
    setSortByOldest(false);
    setDropdown(false);
  };

  // Sorting job list // 
  let sortedJobList = [...jobs];
  if (sortByNewest) {
    sortedJobList = sortByTime([...jobs]);
  } else if (sortByOldest) {
    sortedJobList = sortByTime([...jobs]).reverse();
  }

  // Filter jobs based on search term and selected categories
  const filteredJobs = sortedJobList.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(Search.toLowerCase());
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(job.category);

    return titleMatch && categoryMatch;
  });

  const JobsList = filteredJobs.map((job, index) => (
    <Job id={job.id} job={job} />
  ));

  return (
    <>
      <Header title={"Jobs"} />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 my-5 gap-4">
        <Sidebar
          Search={Search}
          setSearch={setSearch}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className="col-span-2 p-1">
          <div className="p-1">
            <div className="flex justify-between py-5 items-center mb-4 px-3 bg-white rounded-md">
              <p className="text-sm sm:text-base">
                Showing {JobsList.length} of {jobs.length} results{" "}
             {/* //! Props  */}
              </p>
              <div className="relative">
                <button
                  className="border-2 border-[#6C757D] text-[#6C757D] rounded-md w-40 h-8 flex justify-between items-center p-2 text-sm sm:text-base"
                  onClick={toggleDropdown}
                >
                  {sortByNewest
                    ? "Sort By Newest"
                    : sortByOldest
                    ? "Sort By Oldest"
                    : "Sort"}
                  <FaChevronDown />
                </button>
                {dropdown && (
                  <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg">
                    <ul className="text-[#6C757D]">
                      <button
                        className="w-full text-left"
                        onClick={toogelSortDef}
                      >
                        <li className="hover:bg-gray-100 p-2 cursor-pointer">
                          Sort
                        </li>
                      </button>
                      <hr />
                      <button
                        className="w-full text-left"
                        onClick={toggleSortNewest}
                      >
                        <li className="hover:bg-gray-100 p-2 cursor-pointer">
                          Sort By Newest
                        </li>
                      </button>
                      <hr />
                      <button
                        className="w-full text-left"
                        onClick={toggleSortOldest}
                      >
                        <li className="hover:bg-gray-100 p-2 cursor-pointer">
                          Sort By Oldest
                        </li>
                      </button>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {JobsList}
          </div>
        </div>
      </div>
      <Companies />
    </>
  );
};

export default Jobs;
