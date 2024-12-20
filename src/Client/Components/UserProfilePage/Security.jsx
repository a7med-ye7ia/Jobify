import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Security = ({ user }) => {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [showPasswords, setShowPasswords] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const [isUpdating, setIsUpdating] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSave = async () => {
        if (!user?._id) {
            setMessage("User ID is missing.");
            return;
        }
    
        if (formData.newPassword !== formData.confirmPassword) {
            setMessage("New password and confirm password do not match.");
            return;
        }
    
        if (!validatePassword(formData.newPassword)) {
            setMessage("Password must be at least 8 characters long and contain uppercase, lowercase, and number.");
            return;
        }
    
        setIsUpdating(true);
        setMessage("");
    
        try {
            const response = await fetch(`http://localhost:3000/user/userUpdate/${user._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword,
                }),
            });
    
            const result = await response.json();
    
            if (!response.ok) {
                throw new Error(result.message || "Failed to update password");
            }
    
            setFormData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
    
            setMessage(result.message || "Password updated successfully!");
        } catch (error) {
            console.error("Error updating password:", error.message);
            setMessage(error.message || "Failed to update password.");
        } finally {
            setIsUpdating(false);
        }
    };
    

    return (
        <div className="w-full mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    Account Security
                </h2>
            </div>
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-700">
                            Change Password
                        </h3>
                        
                        {/* Current Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Current Password
                            </label>
                            <div className="flex items-center">
                                <input
                                    type={showPasswords.currentPassword ? "text" : "password"}
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleChange}
                                    placeholder="Enter current password"
                                    className="w-full pr-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility('currentPassword')}
                                    className="absolute right-2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPasswords.currentPassword ? (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* New Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                New Password
                            </label>
                            <div className="flex items-center">
                                <input
                                    type={showPasswords.newPassword ? "text" : "password"}
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    placeholder="Enter new password"
                                    className="w-full pr-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility('newPassword')}
                                    className="absolute right-2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPasswords.newPassword ? (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm New Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Confirm New Password
                            </label>
                            <div className="flex items-center">
                                <input
                                    type={showPasswords.confirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm new password"
                                    className="w-full pr-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility('confirmPassword')}
                                    className="absolute right-2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPasswords.confirmPassword ? (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Password Requirements */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                            Password Requirements
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <span className={`mr-2 ${formData.newPassword.length >= 8 ? 'text-green-500' : 'text-gray-400'}`}>
                                    ✓
                                </span>
                                At least 8 characters
                            </li>
                            <li className="flex items-center">
                                <span className={`mr-2 ${/[A-Z]/.test(formData.newPassword) ? 'text-green-500' : 'text-gray-400'}`}>
                                    ✓
                                </span>
                                Contains an uppercase letter
                            </li>
                            <li className="flex items-center">
                                <span className={`mr-2 ${/[a-z]/.test(formData.newPassword) ? 'text-green-500' : 'text-gray-400'}`}>
                                    ✓
                                </span>
                                Contains a lowercase letter
                            </li>
                            <li className="flex items-center">
                                <span className={`mr-2 ${/\d/.test(formData.newPassword) ? 'text-green-500' : 'text-gray-400'}`}>
                                    ✓
                                </span>
                                Contains a number
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={handleSave}
                        disabled={isUpdating}
                        className="px-6 py-2.5 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors disabled:opacity-50"
                    >
                        {isUpdating ? "Updating..." : "Update Password"}
                    </button>
                </div>

                {/* Message Display */}
                {message && (
                    <div 
                        className={`
                            mt-4 p-3 rounded-md text-center 
                            ${message.includes("successfully") 
                                ? "bg-green-100 text-green-700" 
                                : "bg-red-100 text-red-700"
                            }
                        `}
                    >
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Security;