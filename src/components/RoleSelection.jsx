import React from 'react';
import '../styles/AdminDashboard.css';

function RoleSelection({ setPage }) {
  return (
    <div className="role-selection-background">
      <div className="role-selection-panel">
        {/* Left corner - Group illustration */}
        <div className="role-selection-image">
          <img src="/role.jpg" alt="Role Selection" />
        </div>
        
        {/* Center-right - Heading */}
        <div className="role-selection-content">
          <h2 className="role-selection-heading">SELECT YOUR ROLE</h2>
          
          {/* Role selection options */}
          <div className="role-options">
            <div className="role-option" onClick={() => setPage("admin")}>
              <div className="role-icon">
                <img src="/admin.jpg" alt="Admin" />
              </div>
              <div className="role-button">
                ADMIN
              </div>
            </div>
            
            <div className="role-option" onClick={() => setPage("candidate")}>
              <div className="role-icon">
                <img src="/candidate.jpg" alt="Candidate" />
              </div>
              <div className="role-button">
                CANDIDATE
              </div>
            </div>
            
            <div className="role-option" onClick={() => setPage("voter")}>
              <div className="role-icon">
                <img src="/voter.jpg" alt="Voter" />
              </div>
              <div className="role-button">
                VOTER
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;