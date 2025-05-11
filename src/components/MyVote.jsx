import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css"; 

function MyVote({ setPage }) {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/voter/my-votes");
        setVotes(response.data);
      } catch (error) {
        console.error("Error fetching voting history:", error);
      }
    };

    fetchVotes();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="back-button" onClick={() => setPage("voter")}>← Back</div>

      <div className="admin-header">
        <div className="admin-icon-title">
          <div className="admin-icon">
            <img src="/voter.jpg" alt="Voter Icon" />
          </div>
          <div className="admin-title">MY VOTE</div>
        </div>
      </div>

      <div className="admin-content">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Election Name</th>
              <th>Candidate Name</th>
              <th>Candidate Symbol</th>
            </tr>
          </thead>
          <tbody>
            {votes.length > 0 ? (
              votes.map((vote) => (
                <tr key={vote.id}>
                  <td>{vote.electionName}</td>
                  <td>{vote.candidateName}</td>
                  <td>{vote.candidateSymbol}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No voting history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyVote;
