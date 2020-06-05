import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {

  let products = [
    {
      name: 'Adobe',
      price: '$15.55'
    },
    {
      name: 'Foxit Reader',
      price: '$25.99'
    },
    {
      name: 'Jetbrains Intellij Idea',
      price: '$15.99'
    },
    {
      name: 'Asus TUF k7',
      price: '$70.99'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <User></User>
      </header>
      
      <section>
        <div style={{margin: '25px'}}>
          {
            products.map(product => <Product prod={product}></Product>)
          }
        </div>
      </section>
    </div>
  );
}

function Product(props) {
  let product = props.prod;
  const productStyle = {
    margin: '0px 25px',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  };

  const buttonStyle = {
    borderRadius: '10px',
    padding: '10px'
  };

  return (
    <div style={productStyle}>
      <h4 style={{color: 'black'}}>{product.name}</h4>
      <h6>{product.price}</h6>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  );
}

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {
        users.map(user =><li style={{listStyle: 'none'}}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          {console.log(user.name)}
        </li>
        )
      }
    </ul>
  );

}

export default App;