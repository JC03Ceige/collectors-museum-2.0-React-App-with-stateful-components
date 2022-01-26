/* This is the components for the Log In button. */
import * as React from "react";
/* We import the Button component from react-bootstrap. To use this we need to run 'npm install reactstrap react react-dom'.
You can find the docs here https://reactstrap.github.io/?path=/story/home-installation--page */
import { Button } from 'react-bootstrap'

/* We create the component using an arrow function and then pass the onClick event as a props. This allows the button to catch the 
event which is triggered in the parent component. */
const LogIn = ({ onClick }) => {
  return (
    <div>
      <div className="logIn">
        <Button
          variant="light"
          size="md"
          className="headerBtn"
          onClick={onClick}
        >
          Log In
        </Button>
      </div>
    </div>
  );
};

/* The log in button component is exported to be imported in another component.
It is important to use the exact same name for both import and export. */
export default LogIn;
