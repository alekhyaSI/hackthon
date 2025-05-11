import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CandidateDashboard.css";

function MyElection({ setPage }) {
  const [elections, setElections] = useState([]);

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/candidate/elections");
        setElections(response.data);
      } catch (error) {
        console.error("Error fetching elections:", error);
      }
    };

    fetchElections();
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
          <div className="candidate-title">MY ELECTION</div>
        </div>
      </div>

      <table className="candidate-table">
        <thead>
          <tr>
            <th>Election Name</th>
            <th>Status</th>
            <th>Total Registered Votes</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {elections.length > 0 ? (
            elections.map((election) => (
              <tr key={election.id}>
                <td>{election.name}</td>
                <td>{election.status}</td>
                <td>{election.totalVotes}</td>
                <td>{election.startDate}</td>
                <td>{election.endDate}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No election details added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MyElection;
