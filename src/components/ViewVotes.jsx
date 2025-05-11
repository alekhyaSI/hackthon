import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";

function ViewVotes({ setPage }) {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/votes");
        setVotes(response.data);
      } catch (error) {
        console.error("Error fetching votes:", error);
      }
    };

    fetchVotes();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="back-button" onClick={() => setPage("admin")}>← Back</div>

      <div className="admin-header">
        <div className="admin-icon-title">
          <div className="admin-icon">
            <img src="/admin.jpg" alt="Admin Icon" />
          </div>
          <div className="admin-title">VOTES</div>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Voter Name</th>
            <th>Candidate Name</th>
            <th>Election Name</th>
            <th>Vote Time</th>
          </tr>
        </thead>
        <tbody>
          {votes.length > 0 ? (
            votes.map((vote) => (
              <tr key={vote.id}>
                <td>{vote.voterName}</td>
                <td>{vote.candidateName}</td>
                <td>{vote.electionName}</td>
                <td>{vote.voteTime}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No votes available yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewVotes;
