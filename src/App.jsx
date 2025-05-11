import React, { useState } from "react";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Login.css";
import "./styles/Signup.css";
import "./styles/RoleSelection.css";
import "./styles/AdminDashboard.css";
import "./styles/CandidateDashboard.css"; // Candidate Dashboard styles

// Pages
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import RoleSelection from './components/RoleSelection';
import AdminDashboard from './components/AdminDashboard';

import ManageElections from './components/ManageElections';
import ManageCandidates from './components/ManageCandidates';
import ViewVotes from './components/ViewVotes';
import AnnounceResult from './components/AnnounceResult';
import Logout from './components/Logout';

// Candidate Components
import CandidateDashboard from './components/CandidateDashboard';
import Profile from './components/Profile';
import MyElection from './components/MyElection';
import VoteCount from './components/VoteCount';

// Voter Components
import VoterDashboard from './components/VoterDashboard';
import VoterProfile from './components/VoterProfile';
import VoteNow from './components/VoteNow';
import MyVote from './components/MyVote';

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="main-container">
      {/* Header */}
      <header className="header">
        <h1 className="title">ONLINE VOTING SYSTEM</h1>
        <nav className="nav-links">
          <div className="nav-item" onClick={() => setPage("home")}>
            <img src="/home.png" alt="Home" />
            <span>HOME</span>
          </div>
          <div className="nav-item" onClick={() => setPage("about")}>
            <img src="/about.jpg" alt="About" />
            <span>ABOUT</span>
          </div>
          <div className="nav-item" onClick={() => setPage("login")}>
            <img src="/login.png" alt="Login" />
            <span>LOGIN</span>
          </div>
          <div className="nav-item" onClick={() => setPage("signup")}>
            <img src="/singup.png" alt="Signup" />
            <span>SIGNUP</span>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="content">
        {page === "home" ? (
          <div className="right-section">
            <img src="/vote1.jpg" alt="Vote Finger" className="finger-img" />
            <p className="tagline">"Your vote, your voice, your power."</p>
          </div>
        ) : page === "about" ? (
          <About />
        ) : page === "login" ? (
          <Login setPage={setPage} />
        ) : page === "signup" ? (
          <Signup setPage={setPage} />
        ) : page === "role-selection" ? (
          <RoleSelection setPage={setPage} />
        ) : page === "admin" ? (
          <AdminDashboard setPage={setPage} />
        ) : page === "manage-elections" ? (
          <ManageElections setPage={setPage} />
        ) : page === "manage-candidates" ? (
          <ManageCandidates setPage={setPage} />
        ) : page === "view-votes" ? (
          <ViewVotes setPage={setPage} />
        ) : page === "announce-result" ? (
          <AnnounceResult setPage={setPage} />
        ) : page === "candidate" ? (
          <CandidateDashboard setPage={setPage} />
        ) : page === "profile" ? (
          <Profile setPage={setPage} />
        ) : page === "my-election" ? (
          <MyElection setPage={setPage} />
        ) : page === "vote-count" ? (
          <VoteCount setPage={setPage} />
        ) : page === "voter" ? (         // ⭐ added Voter Dashboard
          <VoterDashboard setPage={setPage} />
        ) : page === "voter-profile" ? ( // ⭐ added Voter Profile
          <VoterProfile setPage={setPage} />
        ) : page === "vote-now" ? (      // ⭐ added Vote Now
          <VoteNow setPage={setPage} />
        ) : page === "my-vote" ? (       // ⭐ added My Vote
          <MyVote setPage={setPage} />
        ) : page === "logout" ? (
          <Logout setPage={setPage} />
        ) : (
          <div>
            <h2>Selected Page: {page}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
