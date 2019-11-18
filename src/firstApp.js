import React from 'react';
import './App.css';
import jsImage from './img/js.png';

function App() {
  return (
    <React.Fragment>           
      <h1 className = "title">Welcome to our first React App</h1> 
      
      <p>It's goint to be fantastic!!</p>

      <ul>
        <li>First</li>
        <li>Second</li>  
        <li>Third</li>
      </ul>

      <input type="text"/>

      <img src={jsImage} />
      <img src= "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
    </React.Fragment> 
  );
}

export default App;
