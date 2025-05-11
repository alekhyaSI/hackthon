import React from 'react';
import "../styles/AdminDashboard.css"; // reuse styles

function VoterDashboard({ setPage }) {
  return (
    <div className="admin-dashboard">
      <div className="back-button" onClick={() => setPage("role-selection")}>
        ← Back
      </div>

      <div className="admin-header">
        <div className="admin-icon-title">
          <div className="admin-icon">
            <img src="/voter.jpg" alt="Voter Icon" />
          </div>
          <div className="admin-title">VOTER DASHBOARD</div>
        </div>
      </div>

      <div className="admin-menu">
        <button className="admin-menu-option" onClick={() => setPage("voter-profile")}>
          Profile
        </button>
        <button className="admin-menu-option" onClick={() => setPage("vote-now")}>
          Vote Now
        </button>
        <button className="admin-menu-option" onClick={() => setPage("my-vote")}>
          My Vote
        </button>
        <button className="admin-menu-option" onClick={() => setPage("logout")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default VoterDashboard;
