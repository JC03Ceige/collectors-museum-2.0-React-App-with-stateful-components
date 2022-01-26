/* This will be used as the header for the App UI. We are importing a seperate LogIn, Logo, Menu, BurgerBtn and Submit components for this.
We also need to import the react library. */

/* This is a statefull component, the state will be used to change the UI display on output render. */

/* Note that all components that will be functional in the Header is imported idrectly and not nested in parent/child components.
This allows for direct access to the components and cleaner, more efficient renders. */
import React from 'react'
import LogIn from './LogIn'
import Logo from './Logo'
import Menu from './Menu'
import BurgerBtn from './BurgerBtn'
import Submit from './Submit'
/* We import the Container component from react-bootstrap. To use this we need to run 'npm install reactstrap react react-dom'.
You can find the docs here https://reactstrap.github.io/?path=/story/home-installation--page */
import { Container } from 'react-bootstrap'

/* The Header component we create here contains all the components that will be functional in the UI.
Because the header holds most of the functional components we use states to set off the events for certain elements, 
which is then passed down as props in the components and caught in the component itself. This helps to keep the code neat and easier to
maintain as all of the states and the functions that change them are created under one component. */
class Header extends React.Component {

    constructor(props) {
        super(props)
        /* The two states will be used to set visibility for the LogIn form and the Profile form respectively. */
        this.state = { showToggleLogIn: false }
        this.state = { showToggleProfile: false }

        // This binding is necessary to make `this` work in the callback
        this.showHideToggleLogIn = this.showHideToggleLogIn.bind(this)
        this.showHideToggleProfile = this.showHideToggleProfile.bind(this)
    }

    /* This is a basic function that toggles between the previous and current state, either true or false. */
    showHideToggleLogIn() {
        this.setState((prevState) => ({
            showToggleLogIn: !prevState.showToggleLogIn,
        }))
    }

    /* This is a basic function that toggles between the previous and current state, either true or false. */
    showHideToggleProfile() {
        this.setState((prevState) => ({
            showToggleProfile: !prevState.showToggleProfile,
        }))
    }

    render() {
        /* We need to declare the states AND the props for the current component in the render, setting it with the 'this.' identifier. */
        const { showToggleLogIn, showToggleProfile } = this.state
        const { loggedIn, userName, compName } = this.props

        return (
            <header className="App-header pt-5">
                <div className="stickyHeader">
                    <Container fluid className="profileLogin">
                        {/* We use the on click event to trigger the toggle function. Note that placing it in the curly braces as a function,
                         while binding it to the current state with 'this.' allows us to pass it down as a props. */}
                        <BurgerBtn
                            onClick={() =>
                                this.showHideToggleProfile(showToggleProfile)
                            }
                        />
                        {/* We use the ternary operator to check the state of the loggedIn boolean. Note that it is not yet active in the
                        UI but can be changed with effect in the App.js */}
                        {loggedIn ? (
                            `Welcome back, ${userName}. Enjoy our collection of rare and magnificent items.`
                        ) : (
                            /* We use the on click event to trigger the toggle function. Note that placing it in the curly braces as a
                             function, while binding it to the current state with 'this.' allows us to pass it down as a props. */
                            <LogIn
                                onClick={() =>
                                    this.showHideToggleLogIn(showToggleLogIn)
                                }
                            />
                        )}
                        {/* Using the && operator is a short method of implementing the ternary operator but without any alternative
                        values/options for a different element or component.
                        The two lines of code will read as 'if state is false don't show, else show.
                        Both components below is linked to the state it is being associated with. */}
                        {showToggleLogIn && <Submit />}
                        {showToggleProfile && <Menu />}
                    </Container>
                    <h1 className="mb-4">
                        <Logo />
                        {compName}
                    </h1>
                </div>
            </header>
        )
    }
}

/* In order to use the Header component in the UI render we need to export it.
The export name must match the same as the import name. */
export default Header
