import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";

function VoteNow({ setPage }) {
  const [elections, setElections] = useState([]);
  const [selectedVote, setSelectedVote] = useState({});

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/voter/elections");
        setElections(response.data);
      } catch (error) {
        console.error("Error fetching elections:", error);
      }
    };

    fetchElections();
  }, []);

  const handleVote = async (electionId, candidateId) => {
    try {
      const response = await axios.post("http://localhost:8080/api/voter/vote", {
        electionId,
        candidateId,
      });
      console.log("Vote successful:", response.data);
      setSelectedVote({ electionId, candidateId });
    } catch (error) {
      console.error("Error during voting:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="back-button" onClick={() => setPage("voter")}>← Back</div>

      <div className="admin-header">
        <div className="admin-icon-title">
          <div className="admin-icon">
            <img src="/voter.jpg" alt="Voter Icon" />
          </div>
          <div className="admin-title">VOTE NOW</div>
        </div>
      </div>

      <div className="admin-content">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Election Name</th>
              <th>Select Candidate</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            {elections.length > 0 ? (
              elections.map((election) => (
                <tr key={election.id}>
                  <td>{election.name}</td>
                  <td>
                    <select
                      onChange={(e) =>
                        setSelectedVote({
                          ...selectedVote,
                          [election.id]: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Candidate</option>
                      {election.candidates.map((candidate) => (
                        <option key={candidate.id} value={candidate.id}>
                          {candidate.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="admin-menu-option"
                      onClick={() =>
                        handleVote(election.id, selectedVote[election.id])
                      }
                    >
                      Vote
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No elections available for voting.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VoteNow;
