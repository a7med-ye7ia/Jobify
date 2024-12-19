const StepCard = ({ step }) => {
    return (
        <div className="m-auto w-full max-w-sm bg-white shadow-lg h-60 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex text-center items-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#d5f1ff] rounded-t-lg ">
                <img
                    src={step.logo}
                    alt="Step Logo"
                    className="object-contain"
                    />
            </div>
            <div className="px-3 text-center">
                <p className="font-semibold text-xl text-gray-800">
                    {step.title}
                </p>
            </div>
        </div>
            <div className="mt-5 px-6 pb-6 text-center">
                <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                </p>
            </div>
        </div>
    );
};

export default StepCard;
