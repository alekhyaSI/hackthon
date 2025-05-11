import React from "react";
import axios from "axios";

function AdminDashboard({ setPage }) {
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/logout");
      console.log("Logout successful");
      setPage("login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Admin header with icon and title only - no Home button */}
      <div className="admin-header">
        <div className="admin-icon-title">
          <div className="admin-icon">
            <img src="/admin.jpg" alt="Admin Icon" />
          </div>
          <div className="admin-title">ADMIN</div>
        </div>
      </div>

      {/* Admin menu options */}
      <div className="admin-menu">
        <button className="admin-menu-option" onClick={() => setPage("manage-elections")}>
          MANAGE ELECTIONS
        </button>

        <button className="admin-menu-option" onClick={() => setPage("manage-candidates")}>
          MANAGE CANDIDATES
        </button>

        <button className="admin-menu-option" onClick={() => setPage("view-votes")}>
          VIEW VOTES
        </button>

        <button className="admin-menu-option" onClick={() => setPage("announce-result")}>
          ANNOUNCE RESULT
        </button>

        <button className="admin-menu-option" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;