import React from 'react';
import myimg from './pogi.jpg';
import "../style.css";
import background from "./home.jpg";


const MyComponent = () => {
  return (

    <div style={{ backgroundImage: `url(${background})` }}>
      <img src={myimg} alt="Thicker Glowing Background img" />
      <h1>Rafael Kent V. Estrada</h1>
      <p>Web Developer</p>
      <p>https://github.com/rafaelkentv</p>
    </div>


  );
};





export default MyComponent;



