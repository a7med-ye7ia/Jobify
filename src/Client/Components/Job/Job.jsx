import { BsBookmarkPlus } from "react-icons/bs";
import { IoBagCheck } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { LuWalletMinimal } from "react-icons/lu";
import { TbClockHour4 } from "react-icons/tb";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Job = ({ job, photo }) => {
    const [bookmark, setBookmark] = useState(false);
    const navigate = useNavigate();
    const handleJobDetails = () => {
        navigate(`/job-info/${job._id}`);
    };

    const toggleBookmark = () => {
        setBookmark(!bookmark);
    };

    return (
        <div className="w-full p-1 bg-white rounded-md">
            <div className="w-full p-4 rounded-lg border-2">
                {/* Top Row: Time and Bookmark Button */}
                <div className="w-full flex justify-between items-center mb-4">
                    <div className="w-auto bg-[#3096891A] rounded-md">
                        <p className="p-1 cursor-default text-[#309689] font-normal text-sm">{job.timeadded} Ago</p>
                    </div>
                    <button onClick={toggleBookmark}>
                        {bookmark ? (
                            <BsBookmarkPlusFill className="text-[25px] text-[#FFD700]" />
                        ) : (
                            <BsBookmarkPlus className="text-[25px] text-[#6C757D]" />
                        )}
                    </button>
                </div>

                {/* Middle Row: Job Logo and Information */}
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full">
                        <img
                            src={photo?.photo || job.photo}
                            alt="company logo"
                        />
                    </div>
                    <div>
                        <p className="font-semibold text-sm sm:text-base">{job.title}</p>
                        <p className="font-normal text-sm text-gray-600">{job.company}</p>
                    </div>
                </div>

                {/* Bottom Row: Job Details */}
                <div className="w-full flex flex-wrap gap-6 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                        <IoBagCheck className="text-[#309689]" />
                        <p className="text-sm">{job.category}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <TbClockHour4 className="text-[#309689]" />
                        <p className="text-sm">{job.type}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <LuWalletMinimal className="text-[#309689]" />
                        <p className="text-sm">{job.salary}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaLocationDot className="text-[#309689]" />
                        <p className="text-sm">{job.location}</p>
                    </div>
                </div>

                {/* Job Details Button */}
                <div className="w-full text-right">
                    <button
                        onClick={handleJobDetails}
                        className="w-32 h-10 rounded-lg font-semibold text-sm sm:text-base bg-[#309689] text-white border-[2px] hover:bg-white hover:border-[#3EB489] hover:text-[#3EB489]"
                    >
                        Job Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Job;