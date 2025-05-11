import React from 'react';

function CandidateDashboard({ setPage }) {
  return (
    <div className="candidate-dashboard">
      {/* Candidate header */}
      <div className="candidate-header">
        <div className="candidate-icon-title">
          <div className="candidate-icon">
            <img src="/candidate.jpg" alt="Candidate Icon" />
          </div>
          <div className="candidate-title">
            CANDIDATE
          </div>
        </div>
      </div>

      {/* Candidate menu options */}
      <div className="candidate-menu">
        <button className="candidate-menu-option" onClick={() => setPage("profile")}>
          PROFILE
        </button>

        <button className="candidate-menu-option" onClick={() => setPage("my-election")}>
          MY ELECTION
        </button>

        <button className="candidate-menu-option" onClick={() => setPage("vote-count")}>
          VOTE COUNT
        </button>

        <button className="candidate-menu-option" onClick={() => setPage("login")}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default CandidateDashboard;
