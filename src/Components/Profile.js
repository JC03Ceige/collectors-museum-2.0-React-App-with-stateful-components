/* This is a statefull component, the state will be used to change the UI display on output render. */
import * as React from 'react'
/* We import the Button component from react-bootstrap. To use this we need to run 'npm install reactstrap react react-dom'.
You can find the docs here https://reactstrap.github.io/?path=/story/home-installation--page */
import { Button } from 'react-bootstrap'
/* We import the desired icon(s) from the extensive react-icons library. To use react-icons we need to run 'npm install react-icons --save'. 
You can find the docs here https://react-icons.github.io/react-icons/ */
import { FaUserAstronaut } from 'react-icons/fa'
/* We import the UserProfile component. */
import UserProfile from './UserProfile.js'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        /* This state will determine is the selected component is visible or not. */
        this.state = { showToggle: false }

        // This binding is necessary to make `this` work in the callback
        this.showHideToggle = this.showHideToggle.bind(this)
    }

    /* This function toggles the between the two states (true or false) of the showToggle state, determining if the element is visible or not. */
    showHideToggle() {
        this.setState((prevState) => ({
            showToggle: !prevState.showToggle,
        }))
    }

    render() {
        /* We need to declare the state for the current component in the render, setting it with the 'this.' identifier. */
        const { showToggle } = this.state
        /* We use inline styling for the icon to ensure it overrides any other styling that applies to the button */
        const style = {
            color: 'deeppink',
            backgroundColor: 'white',
            fontSize: '1.5em',
        }
        return (
            <div>
                <div className="profile">
                    {/* The onClick event catches the click event from parent component. */}
                    <Button
                        variant="light"
                        size="sm"
                        className="userProfileBtn"
                        onClick={() => this.showHideToggle(showToggle)}
                    >
                        <FaUserAstronaut style={style} />{' '}
                    </Button>{' '}
                </div>{' '}
                {/* Using the && operator is a short method of implementing the ternary operator but without any alternative values/options for a different element or component.
                The following line of code will read as 'if state is false don't show, else show.
                The component below is linked to the state it is being associated with and changes with the onClick event.*/}
                {showToggle && (
                    <div>
                        <UserProfile />
                    </div>
                )}{' '}
            </div>
        )
    }
}

/* In order to use the Menu component in the UI render we need to export it.
The export name must match the same as the import name. */
export default Profile
