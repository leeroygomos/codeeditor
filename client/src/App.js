import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState([{}]);

  useEffect(()=>{
    fetch("http://localhost:3000").then(response => 
      response.json()).then(data => {
        setValue(data)
      });
  },[]);

  return (
    <div className="App">
      {(typeof value.hi === 'undefined') ? (<p>Loading</p>):
      
      (value.hi.map((val,i) => <p key={i}>{val}</p>))}
    </div>
  );
}

export default App;
