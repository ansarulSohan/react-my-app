import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <PersonInfo></PersonInfo>

        <Contributors name="G. M. Ansarul Kabir" degree="B.Sc in CSE" email="ansarulsohan@gmail.com"></Contributors>
      </header>
    </div>
  );
}

function PersonInfo() {
  return (
    <div>
      <h2 style={{fontFamily:'consolas', color: 'red'}}>Hallo!</h2>
      <p>Welcome to React! This is a cool framework</p>
    </div>
  );
}

function Contributors(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.degree}</p>
      <p>{props.email}</p>
    </div>
  );
}
export default App;
