import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";

function VoterProfile({ setPage }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/voter/profile");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching voter profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="back-button" onClick={() => setPage("voter")}>← Back</div>

      <div className="admin-header">
        <div className="admin-icon-title">
          <div className="admin-icon">
            <img src="/voter.jpg" alt="Voter Icon" />
          </div>
          <div className="admin-title">CREATE PROFILE</div>
        </div>
      </div>

      <table className="admin-table">
        <tbody>
          <tr><th>Voter Name</th><td>{profile.name || "Enter Name"}</td></tr>
          <tr><th>Photo</th><td>{profile.photo || "Upload Photo"}</td></tr>
          <tr><th>Phone Number</th><td>{profile.phone || "Enter Phone"}</td></tr>
          <tr><th>Age</th><td>{profile.age || "Enter Age"}</td></tr>
          <tr><th>Occupation</th><td>{profile.occupation || "Enter Occupation"}</td></tr>
          <tr><th>Contact Details</th><td>{profile.contactDetails || "Enter Address"}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default VoterProfile;
