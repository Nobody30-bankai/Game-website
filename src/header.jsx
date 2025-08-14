import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          Welcome🦧🌍
        </Link>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main>
        <h1>Welcome 😊🤯</h1>
      </main>
    </div>
  );
}

export default Header;
