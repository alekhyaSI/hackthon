import React from "react";

function Header({ setPage }) {
  return (
    <header className="header">
      <h1 className="title">ONLINE VOTING SYSTEM</h1>
      <nav className="nav-links">
        <div className="nav-item" onClick={() => setPage("home")}>
          <img src="/images/home.png" alt="Home" />
          <span>HOME</span>
        </div>
        <div className="nav-item" onClick={() => setPage("about")}>
          <img src="/images/about.jpg" alt="About" />
          <span>ABOUT</span>
        </div>
        <div className="nav-item" onClick={() => setPage("login")}>
          <img src="/images/login.png" alt="Login" />
          <span>LOGIN</span>
        </div>
        <div className="nav-item" onClick={() => setPage("signup")}>
          <img src="/images/signup-icon.png" alt="Signup" />
          <span>SIGNUP</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
