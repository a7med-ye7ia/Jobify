import { useState } from "react";
import ProfileCard from "./componnents_Admin/ProfileCard";
import DeleteJob from "./DeleteJob";
import AddJob from "./AddJob";
import UpdateJob from "./UpdateJob";
import "./css/ProfilePage.css"; 

const menuItems = [
  {
    id: 3,
    text: "Update Job",
    component: <UpdateJob />,
  },
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
];

const ProfilePage = () => {
  const [activeItem, setActiveItem] = useState(3); // Set default active item to "Update Job"

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <ProfileCard />
        <div>
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`menu-item ${activeItem === item.id ? "active" : ""}`}
            >
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        {menuItems.find((item) => item.id === activeItem)?.component}
      </div>
    </div>
  );
};

export default ProfilePage;
