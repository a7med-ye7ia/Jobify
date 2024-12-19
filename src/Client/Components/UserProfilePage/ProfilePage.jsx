import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import EditProfile from "./EditProfile";
import Notifications from "./Notification";
import Security from "./Security";
import ProfileCard from "./ProfileCard";

const menuItems = [
    { id: 1, icon: <IoSettingsSharp size={20} />, text: 'Edit Profile', component: <EditProfile /> },
    { id: 2, icon: <FaBell size={20} />, text: 'Notifications', component: <Notifications /> },
    { id: 3, icon: <CiLock size={30} />, text: 'Password & Security', component: <Security /> },
];

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (id) => {
        setActiveItem(id);
    };

    return <>
        <div className="w-full md:w-72 bg-white rounded-lg p-4 space-y-4">
            <ProfileCard /> 
            <div>
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors m-3
                            ${activeItem === item.id
                                ? 'bg-emerald-100 text-[#309689]'
                                : 'hover:bg-[#309689] hover:text-emerald-50 text-gray-600'
                            }`}
                    >
                        {item.icon}
                        <span className="text-sm font-medium">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-6">
                {menuItems.map((item) =>
                    item.id === activeItem ? item.component : null
                )}
            </div>
        </div>
    </>
};

export default Sidebar;
