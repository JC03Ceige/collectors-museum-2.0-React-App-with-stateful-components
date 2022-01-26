import * as React from 'react'
/* We import the Container component from react-bootstrap. To use this we need to run 'npm install reactstrap react react-dom'.
You can find the docs here https://reactstrap.github.io/?path=/story/home-installation--page */
import { Container } from 'react-bootstrap'
/* We import the NavLink component from react-router-dom. To use this we need to run 'npm install react-router-dom@6'.
You can find the docs here https://reactrouter.com/docs/en/v6/api#navlink */
import { NavLink } from 'react-router-dom'
/* We import the desired icon(s) from the extensive react-icons library. To use react-icons we need to run 'npm install react-icons --save'. 
You can find the docs here https://react-icons.github.io/react-icons/ */
import { FaTimes } from 'react-icons/fa'
/* We import the Profile component. */
import Profile from './Profile'

/* The Menu component is what the users will use to navigate the pages of the UI and in order to do this we need to use states*/
class Menu extends React.Component {
    constructor(props) {
        super(props)
        /* This state will determine is the selected component is visible or not. */
        this.state = { toggleMenu: false }

        // This binding is necessary to make `this` work in the callback
        this.closeMenu = this.closeMenu.bind(this)
    }

    /* This function is created to allow the user to close the menu. */
    closeMenu() {
        this.setState((prevState) => ({
            toggleMenu: !prevState.toggleMenu,
        }))
    }

    render() {
        /* We need to declare the state for the current component in the render, setting it with the 'this.' identifier. */
        const { toggleMenu } = this.state

        return (
            /* We use the aside HTML element to indicate that this will be a side component. */
            <aside>
                {' '}
                {/* Using the && operator is a short method of implementing the ternary operator but without any alternative values/options for a different element or component.
                The  code will read as 'if state is false don't show, else show - the components below is linked to the state it is being associated with. */}
                {!toggleMenu && (
                    /* The navigation menu is placed inside a Container in order for us to link the toggle state to the
                    component as a whole. */
                    <Container className="side-menu">
                        {' '}
                        {/* This links the toggleMenu state to the icon which will act as a close button. We use the onClick
                        event to trigger the closeMenu function. */}
                        {!toggleMenu && (
                            <FaTimes
                                className="closeBtn"
                                onClick={() => this.closeMenu(toggleMenu)}
                            />
                        )}{' '}
                        {/* This is the nav element we will use to display the navlinks in the UI. */}
                        <nav className="me-auto">
                            {/* We use the unordered list to nest the navlinks and style in the App.css */}
                            <ul>
                                <li>
                                    <Profile />
                                </li>{' '}
                                {/* The following <li> elements cointain NavLink components. These components link to the relevant Route components in the App.js. The 'to' attribute connects the lin to the 'path' attribute in the App.js
                                
                                We use NavLink specifically for the isActive boolean property which allows us to style the link according to its active state.
                                
                                Styling with isActive is applied using an arrow function and ternary statements.*/}
                                <li>
                                    <NavLink
                                        exact
                                        to="/"
                                        style={({ isActive }) => ({
                                            borderBottom: isActive
                                                ? '#15b0ab solid 2px'
                                                : '',
                                            opacity: isActive ? 0 : 1,
                                            color: isActive ? '#fff' : '#fff',
                                        })}
                                    >
                                        Home{' '}
                                    </NavLink>{' '}
                                </li>{' '}
                                <li>
                                    <NavLink
                                        to="/shop"
                                        style={({ isActive }) => ({
                                            borderBottom: isActive
                                                ? '#15b0ab solid 2px'
                                                : '',
                                            opacity: isActive ? 0 : 1,
                                            color: isActive ? '#fff' : '#fff',
                                        })}
                                    >
                                        Products{' '}
                                    </NavLink>{' '}
                                </li>{' '}
                            </ul>{' '}
                        </nav>{' '}
                    </Container>
                )}{' '}
            </aside>
        )
    }
}

/* In order to use the Menu component in the UI render we need to export it.
The export name must match the same as the import name. */
export default Menu
