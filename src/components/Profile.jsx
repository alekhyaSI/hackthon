import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CandidateDashboard.css"; // 👈 Make sure you create/update this CSS file too

function Profile({ setPage }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/candidate/profile");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="candidate-dashboard">
      {/* Back Arrow */}
      <div className="back-button" onClick={() => setPage("candidate")}>
        ← Back
      </div>

      <div className="candidate-header">
        <div className="candidate-icon-title">
          <div className="candidate-icon">
            <img src="/candidate.jpg" alt="Candidate Icon" />
          </div>
          <div className="candidate-title">CREATE PROFILE</div>
        </div>
      </div>

      <table className="candidate-table">
        <tbody>
          <tr>
            <th>Candidate Name</th>
            <td>{profile.name || "[Your Name]"}</td>
          </tr>
          <tr>
            <th>Photo</th>
            <td>{profile.photo || "[Upload/Display Photo]"}</td>
          </tr>
          <tr>
            <th>Party Name</th>
            <td>{profile.partyName || "[Party Name]"}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{profile.age || "[Age]"}</td>
          </tr>
          <tr>
            <th>Occupation</th>
            <td>{profile.occupation || "[Occupation]"}</td>
          </tr>
          <tr>
            <th>Contact Details</th>
            <td>{profile.contactDetails || "[Phone, Email]"}</td>
          </tr>
          <tr>
            <th>Election Details</th>
            <td>{profile.electionDetails || "[Election Info]"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
