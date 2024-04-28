// Update to handle the display of bio and include the `<Links />` component.
import React from "react";
import Links from "./Links"; // Import Links component

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Display the bio if it's not empty */}
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* pass down the links as props to the <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
