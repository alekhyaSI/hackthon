import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";

function AnnounceResult({ setPage }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/results");
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="back-button" onClick={() => setPage("admin")}>← Back</div>

      <div className="admin-header">
        <div className="admin-icon-title">
          <div className="admin-icon">
            <img src="/admin.jpg" alt="Admin Icon" />
          </div>
          <div className="admin-title">RESULTS</div>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Party Name</th>
            <th>Total Votes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((result) => (
              <tr key={result.id}>
                <td>{result.candidateName}</td>
                <td>{result.partyName}</td>
                <td>{result.totalVotes}</td>
                <td>{result.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Results will be announced soon.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AnnounceResult;
