import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <video className="finger-img" src="/voting.mp4" autoPlay loop muted />
      </div>
      <div className="about-right">
        <h2>About Online Voting System:</h2>
        <p>
          An Online Voting System is a secure and efficient platform that enables users to cast their votes electronically from anywhere.
          <br /> It eliminates the need for physical polling stations, reducing time and costs while ensuring accuracy and transparency.
          The system uses encryption and authentication methods to prevent fraud and maintain voter anonymity. With real-time vote counting
          and instant results, online voting enhances accessibility and participation in elections.
        </p>
      </div>
    </div>
  );
}

export default About;
