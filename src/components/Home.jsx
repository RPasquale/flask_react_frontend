import React from 'react';
import './Home.css';
import mepic from './mepic.jpg';


const Home = () => {
  return (
    <div>
      <h1 className="home-title">Welcome to the Home Page</h1>
      <img src={mepic} alt="My Picture" className="home-image" />
      <p className="home-text">
        I'm not really sure what the purpose of this home page is right now...
      </p>
      {/* Add any other content you want to display */}
    </div>
  );
};


export default Home;
