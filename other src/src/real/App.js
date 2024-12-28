import React from 'react';
import './App.css';
import brymo from './img/brymo.png';
import afroswing from './img/afro swing.jpg';
import alujo from './img/alujoafro.jpg';
import cart from './img/cart.png';


function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-brand">
        <h1><p id='ur'>Ur Beat</p> <p id='hub'>Hub</p></h1>
        </div>
        <nav className="navbar-nav">
          <a href="#">Feed</a>
          <a href="#">Learn</a>
          <a href="#">Tracks</a>
          <a href="#">Sound Kit</a>
          <a href="#">Musicians</a>
          <a href="#">AI Model</a>
        </nav>

        <button className="start-selling-btn">Start Selling</button>
        <img src="#" alt="cart" />
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2 id='hit'>Your First Hit Starts Here</h2>
          <div className="search-bar">
            <input type="text" placeholder="Try searching afro or pop" />
            <button>Search</button>
          </div>
          <p id='trendingHit'>What's trending right now: Afro, Pop, Hip Hop, Amapiano</p>
        </div>
        <div className="hero-image">
          <img src={brymo} alt="Hero Image" />
          <p id='billion'><h3>Billion Naira Dream by Brymo Out Now</h3></p>
        </div>
      </section>

      {/* Trending Tracks */}
      <section className="trending">
        <h3>Trending Tracks</h3>
        <div className="tracks">
          <div className="track-card">
            <img src={afroswing} alt="Afro Swing" />
            <p>Afro Swing</p>
            <p>$10.00</p>
          </div>
          <div className="track-card">
            <img src={alujo} alt="Aija Afro" />
            <p>Aija Afro</p>
            <p>$15.00</p>
          </div>
          <div className="track-card">
            <img src="#" alt="Jam Beat" />
            <p>Jam Beat</p>
            <p>$20.00</p>
          </div>
          <div className="track-card">
            <img src="#" alt="Goosebumps" />
            <p>Goosebumps</p>
            <p>$25.00</p>
          </div>
          <div className="track-card">
            <img src="#" alt="Amapiano" />
            <p>Amapiano</p>
            <p>$30.00</p>
          </div>
          <div className="track-card">
            <img src="#" alt="Silent London" />
            <p>Silent London</p>
            <p>$18.00</p>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore">
        <div className="explore-text">
          <h3>Explore Our Collection of High-Quality Instrumentals for Every Genre and Mood</h3>
          <ul>
            <li>Dive into a world of exceptional instrumentals, carefully crafted to elevate your music.</li>
            <li>Dive into a world of exceptional instrumentals, carefully crafted to elevate your music.</li>
            <li>Dive into a world of exceptional instrumentals, carefully crafted to elevate your music.</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="explore-image">
          <img src="#" alt="Studio Image" />
        </div>
      </section>

      {/* Genre Section */}
      <section className="genre">
        <h3>Genre</h3>
        <div className="genre-grid">
          <button>Afro</button>
          <button>POP</button>
          <button>HIP HOP</button>
          <button>Type Beat</button>
          <button>Afro-fusion</button>
          <button>HIGH-LIFE</button>
        </div>
      </section>

      {/* Footer with Mobile App Promo */}
      <section className="footer-promo">
        <h3>Beat on the Go</h3>
        <p>Never miss a beat. Access our marketplace, connect with other creators, and write songs, all from the convenience of your phone.</p>
        <button>Coming Soon on Google Play</button>
      </section>
    </div>
  );
}

export default App;
