import { IoCameraReverseOutline } from "react-icons/io5";

const ProfileCard = () => {
    return (
        <div className="bg-white rounded-lg p-5 w-full max-w-sm mx-auto">
            <div className="relative mb-6 flex justify-center items-center">
                <img
                    src="/profile/OIP.jfif"
                    alt="User profile"
                    className="w-24 h-24 rounded-full object-cover outline outline-[4px] outline-emerald-600"
                />
                <div className="absolute bottom-1 right-16 translate-x-1/2 translate-y-1/2">
                    <IoCameraReverseOutline
                        className="bg-white p-1 w-8 h-8 rounded-full text-emerald-600 shadow-lg cursor-pointer hover:text-emerald-800 transition"
                    />
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800">Amr...!</h2>
                <p className="text-sm text-gray-500 mt-1">
                    Your account is ready, you can now apply for advice.
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;