import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";

function ManageCandidates({ setPage }) {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/candidates");
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="admin-dashboard">
      {/* Back Arrow */}
      <div className="back-button" onClick={() => setPage("admin")}>← Back</div>

      <div className="admin-header">
        <div className="admin-icon-title">
          <div className="admin-icon">
            <img src="/admin.jpg" alt="Admin Icon" />
          </div>
          <div className="admin-title">ADD CANDIDATE</div>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Election Name</th>
            <th>Party Name</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length > 0 ? (
            candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.electionName}</td>
                <td>{candidate.partyName}</td>
                <td>{candidate.status}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No candidates added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCandidates;
