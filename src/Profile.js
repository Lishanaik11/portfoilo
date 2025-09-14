import React from 'react';
import profileImage from './image/portfolio.png';
 // Correct import path

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-photo-wrapper">
        <img src={profileImage} alt="Profile" className="profile-photo" />
      </div>
      <div className="profile-content">
        <h1>Hi, I'm {`{Your Name}`}</h1>
        <p>
          {`{A short paragraph describing yourself, your interests, and your professional goals.}`}
        </p>
        <h3>Skills:</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;