import FAQ from "../../Components/FAQ/FAQ.jsx"
import StepCard from "../../Components/Card/StepCard";
import Header from "../../Components/Header/Header";
import { step } from "./steps";
import { FaAward } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";
import { ImTrophy } from "react-icons/im";
import { CiMedal } from "react-icons/ci";
import Blog from "../../Components/Blogs/Blog.jsx";
const Aboutus = () => {
    const Steps = step.map((step, index) => {
        return <StepCard key={index} step={step} />;
    })
    return (
        <>
            <Header title={"About-Us"} />
            {/* landing section  */}
            <section className="w-full my-10 flex flex-col items-center pt-[75px] pb-[60px] gap-[60px]">
                <div className="flex w-full md:w-3/4 gap-6">
                    <div className="w-1/2">
                        <img src="/public/about-us/blogging-jobs-scaled.avif" alt="About Us" className="rounded-lg shadow-md" />
                    </div>
                    <div className="w-1/2 flex flex-col justify-center">
                        <h2 className="font-semibold text-[40px] mb-1">What is Jobify ?</h2>
                        <p className="text-[18px] leading-relaxed">
                            Jobify is a modern job-matching platform designed to streamline the hiring process for both job seekers and employers. Our goal is to create a user-friendly experience that connects individuals with opportunities tailored to their skills and aspirations. From entry-level positions to specialized roles, Jobify ensures efficient and reliable connections to help everyone achieve their professional goals.
                        </p>
                    </div>
                </div>
            </section>
            {/* steps section  */}
            <section className="bg-[#EBF5F4] w-full pt-[75px] pb-[60px] gap-[60px]">
                <div className="flex items-center justify-center mb-10">
                    <div className="text-center">
                        <h1 className="font-bold text-[50px] text-black">How it Works</h1>
                        <p className="font-normal text-[16px]">Jobify simplifies your job search by connecting you with tailored opportunities. Browse, apply, and land your dream job all in one place.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between w-full gap-6 p-8">
                    {Steps}
                </div>
            </section>
            {/* FAQ section  */}
            <section className="w-full pt-[75px] pb-[60px] gap-[60px]">
                <div className="w-full text-center p-8 cursor-default">
                    <h2 className="font-bold text-[50px] mb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[14px] font-normal p-2">
                        Find answers to common queries and get more information about using our platform effectively.</p>
                </div>
                <FAQ />
            </section>
            {/* working with the best  */}
            <section className="w-full mb-10 flex flex-col items-center pt-[75px] pb-[60px] gap-[60px]">
                <div className="flex gap-6 w-full md:w-3/4">
                    <div className="w-1/2 flex flex-col gap-4">
                        <div className="h-[400px]">
                            <img
                                src="/public/about-us/teamwork-2.jpg"
                                alt="Team collaboration"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="/public/about-us/6a0fa8af-1b1a-4f25-aa51-3ae2579d4e95[1].jpg"
                                alt="Business meeting"
                                className="w-1/2 h-[190px] object-cover rounded-2xl"
                            />
                            <img
                                src="/public/about-us/depositphotos_110757274-stock-photo-buiness-team-brainstorming.jpg"
                                alt="Office workspace"
                                className="w-1/2 h-[190px] object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center">
                        <div className="pb-5">
                            <h2 className="font-semibold text-[40px] mb-4 text-gray-800">We’re Only Working With The Best</h2>
                            <p className="text-[18px] leading-relaxed text-gray-600">
                                We're committed to delivering top-notch quality, working with the best talent and resources to ensure excellence in everything we do.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-6 w-full md:w-3/4">
                            <div className="flex gap-4 w-full items-start justify-between">
                                <div className="p-3  flex items-center justify-center gap-4 pr-10">
                                    <FaAward className="w-8 h-8 text-[#309689]" />
                                    <h3 className="font-semibold text-lg text-black">Quality Job</h3>
                                </div>
                                <div className="p-3 flex items-center justify-center gap-4">
                                    <PiReadCvLogoBold className="w-10 h-10 [#309689] text-[#309689]" />
                                    <h3 className="font-semibold text-lg text-black">Resume builder</h3>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full justify-between">
                                <div className="p-3 flex items-center justify-center gap-4">
                                    <ImTrophy className="w-8 h-8 text-[#309689]" />
                                    <h3 className="font-semibold text-lg text-black">Top Companies</h3>
                                </div>
                                <div className="p-3 flex items-center justify-center gap-4">
                                    <CiMedal className="w-10 h-10 [#309689] text-[#309689]" />
                                    <h3 className="font-semibold text-lg text-black">Top Talents</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog section  */}
            <Blog />
        </>
    );
};

export default Aboutus;
