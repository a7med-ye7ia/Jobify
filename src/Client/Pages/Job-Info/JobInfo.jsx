import {
    FiBriefcase,
    FiClock,
    FiMapPin,
    FiDollarSign,
    FiCalendar,
    FiBook,
    FiBookmark,
} from "react-icons/fi";

function App() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//! Header
                    <div className="p-6 sm:p-8">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                                    <img src="/vite.svg" alt="Company Logo" className="h-8 w-8" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">
                                        Corporate Solutions Executive
                                    </h1>
                                    <p className="text-gray-600">Leffler and Sons</p>
                                </div>
                            </div>
                            <button className="bg-primary hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                                Apply Job
                            </button>
                        </div>

                    //! hero
                        <div className="mt-6 flex justify-between items-center">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <FiBriefcase className="h-5 w-5" />
                                    <span>Commerce</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <FiClock className="h-5 w-5" />
                                    <span>Full time</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <FiDollarSign className="h-5 w-5" />
                                    <span>$40000-$42000</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <FiMapPin className="h-5 w-5" />
                                    <span>New-York, USA</span>
                                </div>
                            </div>
                            <button className="bg-primary bg-teal-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                                Apply Job
                            </button>
                        </div>
                    </div>

               //! main hero
                    <div className="p-6 sm:p-8 grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">
                                    Job Description
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Nunc sed a nisl purus. Nibh dis faucibus proin lacus
                                    tristique. Sit congue non vitae odio sit erat in. Felis eu
                                    ultrices a sed massa. Commodo fringilla sed tempor risus
                                    laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis
                                    lectus.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">
                                    Key Responsibilities
                                </h2>
                                <ul className="space-y-3">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <li key={item} className="flex items-start space-x-3">
                                            <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-teal-100 flex items-center justify-center">
                                                <svg
                                                    className="h-3.5 w-3.5 text-primary"
                                                    viewBox="0 0 12 12"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="text-gray-600">
                                                Tortor amet porta proin in. Orci imperdiet nisi
                                                dignissim pellentesque morbi vitae.
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                   //! reveiw
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                Job Overview
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center">
                                        <FiBriefcase className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Job Title</p>
                                        <p className="font-medium text-gray-900">
                                            Corporate Solutions Executive
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center">
                                        <FiCalendar className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Experience</p>
                                        <p className="font-medium text-gray-900">5 Years</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center">
                                        <FiBook className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Degree</p>
                                        <p className="font-medium text-gray-900">Master</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center">
                                        <FiMapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="font-medium text-gray-900">New-York, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
