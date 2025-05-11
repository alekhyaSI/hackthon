import React from "react";
import "../styles/AdminDashboard.css";

function Logout({ setPage }) {
  return (
    <div className="admin-dashboard" style={{ textAlign: "center" }}>
        <div className="back-button" onClick={() => setPage("admin")}>
  ← Back
</div>

      <div className="admin-header" style={{ justifyContent: "center" }}>
        <div className="admin-icon">
          
        </div>
      </div>
      <h2>Thank You!</h2>
      <img src="/thankyou.jpg" alt="Thank You" style={{ marginTop: "1rem", width: "150px" }} />
    </div>
  );
}

export default Logout;
