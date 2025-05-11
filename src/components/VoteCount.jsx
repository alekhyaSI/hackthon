import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CandidateDashboard.css";

function VoteCount({ setPage }) {
  const [voteCounts, setVoteCounts] = useState([]);

  useEffect(() => {
    const fetchVoteCounts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/candidate/vote-counts");
        setVoteCounts(response.data);
      } catch (error) {
        console.error("Error fetching vote counts:", error);
      }
    };

    fetchVoteCounts();
  }, []);

  return (
    <div className="candidate-dashboard">
      <div className="back-button" onClick={() => setPage("candidate")}>← Back</div>

      <div className="candidate-header">
        <div className="candidate-icon-title">
          <div className="candidate-icon">
            <img src="/candidate.jpg" alt="Candidate Icon" />
          </div>
          <div className="candidate-title">RESULT</div>
        </div>
      </div>

      <table className="candidate-table">
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Party Name</th>
            <th>Total Votes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {voteCounts.length > 0 ? (
            voteCounts.map((vote) => (
              <tr key={vote.id}>
                <td>{vote.candidateName}</td>
                <td>{vote.partyName}</td>
                <td>{vote.totalVotes}</td>
                <td>{vote.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No vote data available yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default VoteCount;
