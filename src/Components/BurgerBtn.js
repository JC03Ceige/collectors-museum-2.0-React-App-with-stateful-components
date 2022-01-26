/* This component is used as the button for the 'burger' menu in the UI */
import React from 'react'
/* We import the Button component from react-bootstrap. To use this we need to run 'npm install reactstrap react react-dom'.
You can find the docs here https://reactstrap.github.io/?path=/story/home-installation--page */
import { Button } from 'react-bootstrap'
/* We import the desired icon(s) from the extensive react-icons library. To use react-icons we need to run 'npm install react-icons --save'. 
You can find the docs here https://react-icons.github.io/react-icons/ */
import { TiThLarge } from 'react-icons/ti'

/* The BurgerBtn component is created using an arrow function and the onClick props is passed in to handle the event higher up in the
 DOM tree. */
const BurgerBtn = ({ onClick }) => {
    /* We use inline styling for the icon to ensure it overrides any other styling that applies to the button */
    const style = {
        color: 'deeppink',
        backgroundColor: 'white',
        fontSize: '1.5em',
        boxShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff',
    }

    /* Two classes are used in the render of the component, menuBtn and headerBtn.
    Head over to the App.css to see what each class brings to the table. */
    return (
        <div className="menuBtn">
            {/* The onClick event catches the click event from parent component. */}
            <Button
                variant="light"
                size="md"
                className="headerBtn"
                onClick={onClick}
            >
                {/* Here we implement the inline styling for the icon. */}
                <TiThLarge style={style} />
            </Button>
        </div>
    )
}

/* The burger button component is exported to be imported in another component.
It is important to use the exact same name for both import and export. */
export default BurgerBtn
