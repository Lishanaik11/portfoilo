import React from 'react';
import profileImage from './image/portfolio.png';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm Lisha Naik</h1>
          <p className="hero-subtitle">Student at Mumbai University</p>
          <a href="/resume.pdf" download className="cta-button">Download Resume</a>
        </div>
        <div className="profile-image-wrapper">
          <img src={profileImage} alt="Profile" className="profile-photo" />
        </div>
      </header>

      <section className="about-me-section card">
        <div className="section-content">
          <h2>About Me</h2>
          <p className="bio">
            Hi, I’m Lisha Naik, a Bachelor of Computer Applications student at Pillai College of Arts, Commerce & Science. I have a keen interest in web development and enjoy creating responsive, user-friendly applications. With a solid academic background and practical exposure to technologies like React and JavaScript, I strive to combine creativity with functionality in my projects. I am motivated to keep learning, refining my skills, and contributing to meaningful digital solutions that make a real impact.
          </p>
        </div>
      </section>

      <section className="skills-section card">
        <div className="section-content">
          <h2>Skills</h2>
          <div className="skills-grid">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML & CSS</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">JAVA</span>
            <span className="skill-tag">TALLY</span>
            <span className="skill-tag">Data Structures</span>
          </div>
        </div>
      </section>
      
      <section className="education-section card">
        <div className="section-content">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3 className="timeline-title">Bachelor of Computer Application (BCA)</h3>
              <p className="timeline-subtitle">Mumbai University | 2024 - 2027</p>
              <p className="description">
              <p>
  I am currently pursuing a Bachelor of Computer Applications (2024 – Present) <br />
  Pillai College of Arts, Commerce & Science, New Panvel <br /> 
  with a strong academic record, securing 9.73 SGPA - Semester 1 | 9.14 SGPA - Semester 2. <br /><br/>
   Higher Secondary Education in Commerce (2023 – 2024) <br />
  ICLE's Motilal Jhunjhunwala College, Vashi, Navi Mumbai <br />
  HSC Board (77%) <br /><br/>
  Secondary Education (2021 – 2022) <br />
  ASP Convert English High School <br />
  SSC Board (81%).
</p>

              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;