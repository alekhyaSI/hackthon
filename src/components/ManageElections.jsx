import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";

function ManageElections({ setPage }) {
  const [elections, setElections] = useState([]);

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/elections");
        setElections(response.data);
      } catch (error) {
        console.error("Error fetching elections:", error);
      }
    };

    fetchElections();
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
          <div className="admin-title">CREATE ELECTION</div>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Election Name</th>
            <th>Start & End Date</th>
            <th>Status</th>
            <th>Total Candidates</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {elections.length > 0 ? (
            elections.map((election) => (
              <tr key={election.id}>
                <td>{election.name}</td>
                <td>{election.startDate} - {election.endDate}</td>
                <td>{election.status}</td>
                <td>{election.totalCandidates}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No elections created yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ManageElections;
