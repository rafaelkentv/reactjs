import React from 'react';
import "../style.css";

const personalDetails = [
  {
    name: '(Current School) PHINMA-University Of Pangasinan',
  },
  {
    name: '(Senior High School) Year Graduated 2020-2021',


  },

];

function App() {
  return (
    <div className="App">
      <h1>My Education Background</h1>
      <div className="card-container">
        {personalDetails.map((person, index) => (
          <div className="card" key={index}>
            <h2>{person.name}</h2>




          </div>
        ))}
      </div>
    </div>
  );
}




export default App;