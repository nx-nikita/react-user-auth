import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";  


const Profile = () => {
  return (
    <div className="profile-page">
      <Navbar title="Account Settings" />

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-img-wrapper">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="profile-img"
            />
            <span className="camera-icon">📷</span>
          </div>

          <div>
            <h3>Marry Doe</h3>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        <p className="profile-about">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
