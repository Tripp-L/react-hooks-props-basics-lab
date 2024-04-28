// Start with App.js to pass down the props to the child components.
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links"; //This imports the Links component

// Import the user data
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
