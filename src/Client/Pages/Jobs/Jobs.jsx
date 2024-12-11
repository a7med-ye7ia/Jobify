import Header from "../../Components/Header/Header"
import Job from "../../Components/Job/Job";
import { JOB } from "./job.js"
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Companies from "../../Components/Companies/Companies.jsx";
import { sortByTime } from "../../Utilities/SortByTime.js"
const Jobs = () => {
    const [dropdown, setDropdown] = useState(false);
    const [sortByNewest, setSortByNewest] = useState(false);
    const [sortByOldest, setSortByOldest] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const toggleSortNewest = () => {
        setSortByNewest(!sortByNewest);
        setSortByOldest(false);
        setDropdown(false);
    }

    const toggleSortOldest = () => {
        setSortByOldest(!sortByOldest);
        setSortByNewest(false);
        setDropdown(false);
    }

    const toogelSortDef = () => {
        setSortByNewest(false);
        setSortByOldest(false);
        setDropdown(false);
    }

    var sortedJobList = [...JOB];
    if (sortByNewest) {
        sortedJobList = sortByTime([...JOB]);
    } else if (sortByOldest) {
        sortedJobList = sortByTime([...JOB]).reverse();
    }

    const JobsList = sortedJobList.map((job, index) => {
        return <Job key={index} job={job} />;
    });

    return <>
        <>
            <Header title={"Jobs"} />
            <div className="w-full grid grid-cols-1 md:grid-cols-3 my-5 gap-4">
                <div className="col-span-1 bg-gray-100 p-4 rounded-lg shadow-md">
                    <p className="font-semibold">Filters</p>
                </div>
                <div className="col-span-2 p-1">
                    <div className="p-1" >
                        <div className="flex justify-between py-5 items-center mb-4 px-3 bg-white rounded-md">
                            <p className="text-sm sm:text-base">Showing {JobsList.length} of {JOB.length} results</p>
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
                                            <button className="w-full text-left" onClick={toogelSortDef}>
                                                <li className="hover:bg-gray-100 p-2 cursor-pointer">Sort</li>
                                            </button>
                                            <hr />
                                            <button className="w-full text-left" onClick={toggleSortNewest}>
                                                <li className="hover:bg-gray-100 p-2 cursor-pointer">Sort By Newest</li>
                                            </button>
                                            <hr />
                                            <button className="w-full text-left" onClick={toggleSortOldest}>
                                                <li className="hover:bg-gray-100 p-2 cursor-pointer">Sort by Oldest</li>
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
    </>
}
export default Jobs 