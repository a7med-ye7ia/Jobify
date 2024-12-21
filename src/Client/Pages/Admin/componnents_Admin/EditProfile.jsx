import React from "react";
import "./EditProfile.css"; // Import the CSS file

const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <div className="edit-profile-content">
        <div className="header">
          <h2 className="header-title">Edit Profile</h2>
        </div>

        <div className="section">
          <div>
            <h3 className="section-title">Personal</h3>
            <div className="input-group">
              <div>
                <label className="label">First Name</label>
                <input type="text" placeholder="First Name" className="input" />
              </div>
              <div>
                <label className="label">Last Name</label>
                <input type="text" placeholder="Last Name" className="input" />
              </div>
              <div>
                <label className="label">Date of birth</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Birth Date"
                    className="input"
                  />
                </div>
              </div>
              <div>
                <label className="label">Education level</label>
                <div className="relative">
                  <input type="text" placeholder="Master" className="input" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="section-title">Contact</h3>
            <div className="input-group">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Enter e-mail"
                  className="input"
                />
              </div>
              <div>
                <label className="label">Phone Number</label>
                <div className="input-flex">
                  <input
                    type="text"
                    placeholder="+20"
                    className="input-small"
                  />
                  <input
                    type="tel"
                    placeholder="1555193171"
                    className="input"
                  />
                </div>
              </div>
              <div>
                <label className="label">Country</label>
                <div className="relative">
                  <input type="text" placeholder="Country" className="input" />
                </div>
              </div>
              <div>
                <label className="label">City</label>
                <div className="relative">
                  <input type="text" placeholder="City" className="input" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="button-save">Save</button>
      </div>
    </div>
  );
};

export default EditProfile;
