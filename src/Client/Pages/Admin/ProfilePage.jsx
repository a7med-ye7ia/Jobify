import { useState } from "react";
import ProfileCard from "./componnents_Admin/ProfileCard";
import DeleteJob from "./DeleteJob";
import AddJob from "./AddJob";
import UpdateJob from "./UpdateJob";

const menuItems = [
  {
    id: 1,
    text: "Delete Job",
    component: <DeleteJob />,
  },
  {
    id: 2,
    text: "Add Job",
    component: <AddJob />,
  },
  {
    id: 3,
    text: "Update Job",
    component: <UpdateJob />,
  },
];

const ProfilePage = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-72 bg-white rounded-lg p-4 space-y-4">
        <ProfileCard />
        <div>
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`p-3 rounded-lg cursor-pointer transition-colors m-3
              ${
                activeItem === item.id
                  ? "bg-emerald-100 text-[#309689]"
                  : "hover:bg-[#309689] hover:text-emerald-50 text-gray-600"
              }`}
            >
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        {menuItems.find((item) => item.id === activeItem)?.component}
      </div>
    </div>
  );
};

export default ProfilePage;
