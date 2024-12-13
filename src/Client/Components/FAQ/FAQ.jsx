import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { faqData } from "./FAQ";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <section className="w-full px-4 rounded-xl mt-1">
            <div>
                {faqData.map((item, index) => (
                    <div key={index} className={`${openIndex === index ? "bg-[#EBF5F4]" : "bg-white"} p-4 rounded-lg shadow-md my-2`}>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{item.question}</h2>
                                {openIndex === index ? <IoCloseCircleSharp className="w-10 h-10 text-[#309689]" /> : <CiCirclePlus className="w-10 h-10 text-[#309689]" />}
                        </div>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-600">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
export default FAQ;
