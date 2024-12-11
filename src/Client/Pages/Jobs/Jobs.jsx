import Header from "../../Components/Header/Header"
import Job from "../../Components/Job/Job";
import {JOB} from "./job.js"
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Companies from "../../Components/Companies/Companies.jsx";
const Jobs = ()=>{
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const JobsList = JOB.map((job, index) => {
        return <Job key={index} job={job} />;
    });

    return<>
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
                                    className="bg-[#3EB489] border-2 text-white rounded-md w-32 h-8 flex justify-between items-center hover:bg-white hover:border-[#3EB489] hover:text-[#3EB489] p-2 text-sm sm:text-base"
                                    onClick={toggleDropdown}
                                >
                                    Sort
                                    <FaChevronDown />
                                </button>
                                {dropdown && (
                                    <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-1">
                                        <ul className="text-[#3EB489]">
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer">Sort By Newest</li>
                                            <hr />
                                            <li className="hover:bg-gray-100 p-2 cursor-pointer">Sort by Oldest</li>
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