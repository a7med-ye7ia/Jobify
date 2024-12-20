import { useState } from "react";

const EditProfile = ({ user }) => {
    const [formData, setFormData] = useState({
        firstname: user?.firstname || "",
        lastname: user?.lastname || "",
        birthday: user?.birthday || "",
        education: user?.education || "",
        email: user?.email || "",
        phone: user?.phone || "",
        country: user?.country || "",
        city: user?.city || "",
    });

    const [isUpdating, setIsUpdating] = useState(false); 
    const [message, setMessage] = useState(""); 

    // To handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission and update
    const handleSave = async () => {
        if (!user?._id) {
            setMessage("User ID is missing.");
            return;
        }

        setIsUpdating(true);
        setMessage(""); // Clear any previous messages

        try {
            const response = await fetch(`http://localhost:3000/user/userUpdate/${user._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Failed to update user. Status: ${response.status}`);
            }

            const updatedUser = await response.json();
            console.log("User updated successfully:", updatedUser);
            setMessage("Profile updated successfully!"); // Show success message
        } catch (error) {
            console.error("Error updating user:", error.message);
            setMessage("Failed to update profile."); // Show error message
        } finally {
            setIsUpdating(false); // Stop the loading indicator
        }
    };

    return (
        <div className="bg-white rounded-lg p-6 w-full">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Edit Profile</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-4">Personal</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date of birth
                                </label>
                                <input
                                    type="text"
                                    name="birthday"
                                    value={formData.birthday}
                                    onChange={handleChange}
                                    placeholder="Birth Date"
                                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Education level
                                </label>
                                <input
                                    type="text"
                                    name="education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    placeholder="Education Level"
                                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-4">Contact</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter e-mail"
                                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Country"
                                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors"
                    onClick={handleSave}
                    disabled={isUpdating}
                >
                    {isUpdating ? "Saving..." : "Save"}
                </button>
                {message && (
                    <div className={`mt-4 text-center ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditProfile;
