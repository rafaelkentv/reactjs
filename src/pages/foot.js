import React from 'react';
import "../foot.css";
import logo1 from "./UPANG.jpg";

const foot = () => {
  return (
    <footer>
        <img className='phinmalogo' src={logo1}/>
        <p className='school'>Phinma-Univerisy of Pangasinan</p>
        <p className='cite'>College of Information Technology</p>
    </footer>
  )
}

export default foot