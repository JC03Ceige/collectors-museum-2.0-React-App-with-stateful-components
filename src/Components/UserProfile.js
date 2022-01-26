/* This component is created to serve as a form on the react app header.
In order to have it function as a form, the react-bootstrap Form and Button
components are imported from react-bootstrap */

/* This is a statefull component, the state will be used to change the UI display on output render. */
import React from 'react'
/* We import the Button and Form components from react-bootstrap. To use this we need to run 'npm install reactstrap react react-dom'.
You can find the docs here https://reactstrap.github.io/?path=/story/home-installation--page */
import { Button, Form } from 'react-bootstrap'
/* We import the desired icon(s) from the extensive react-icons library. To use react-icons we need to run 'npm install react-icons --save'. 
You can find the docs here https://react-icons.github.io/react-icons/ */
import { FaTimes } from 'react-icons/fa'

// We create a LogIn component which must be named using the CamelCase
// *Note that there is no prop in this compnent as we will not passing properties.
class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        /* We want to be able to change the content of a form and at the same time change if it is editable or disabled.
        To do this we need to create a state for each input of the form. */
        this.state = {
            editToggle: false,
            toggleEditProfile: false,
            userName: 'Star Lord',
            accTier: 'Premium',
            credit: '95 855 651',
            vehicle: 'The Milano',
            contact: 'Echoe Golf Oscar 12.465',
        }

        // This binding is necessary to make `this` work in the callback
        this.editInputToggle = this.editInputToggle.bind(this)
        this.toggleEditPrForm = this.toggleEditPrForm.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
    }

    /* This function will switch states (true or false) which hides the form when clicking a 'close' button.*/
    toggleEditPrForm() {
        this.setState((prevState) => ({
            toggleEditProfile: !prevState.toggleEditProfile,
        }))
    }

    /* This function will switch states (true or false) for determining if the form is editable or disabled.*/
    editInputToggle() {
        this.setState((prevState) => ({
            editToggle: !prevState.editToggle,
        }))
    }

    /* This function will change the value of the states that we created in the constructor. We pass in the event (e) and then set
    each value according to the event, this is to link the changes value to the specifc current target event. */
    onValueChange = (e) => {
        this.setState({
            userName: e.target.value,
            accTier: e.target.value,
            credit: e.target.value,
            vehicle: e.target.value,
            contact: e.target.value,
        })
    }

    render() {
        /* We need to declare the state for the current component in the render, setting it with the 'this.' identifier. */
        const { editToggle, toggleEditProfile } = this.state

        // We need give the components function a return statement.
        return (
            /* The Component can only return one parent element,
        while parent elements can have many children */
            <>
                {' '}
                {/* Using the && operator is a short method of implementing the ternary operator but without any alternative
                 values/options for a different element or component.
                The  code will read as 'if state is false don't show, else show - the components below is linked to the state 
                it is being associated with. */}
                {!toggleEditProfile && (
                    <div className="profileDetails">
                        <FaTimes
                            className="closeBtn"
                            onClick={() =>
                                this.toggleEditPrForm(toggleEditProfile)
                            }
                        />{' '}
                        {/* Bootstrap Form is used for the form
                          Bootstrap Button is used for the submit button */}{' '}
                        <Form id="formProfile">
                            <Form.Group
                                className="mb-3"
                                controlId="formProfileDetails"
                            >
                                {/* The disbale attribute is linked to the editToggle state and the onClick event in the 
                                'Edit/Done' button below will change the state and determine the value of the disabled boolean attribute.

                                In order to display the current value in the input(FormControl) when it is diabled,
                                we use the defaultValue attribute which changes when the onChange event is triggered.
                                
                                The onChange event is used to trigger the onValueChange function which in turn changes
                                the value of the state */}
                                <Form.Label> US3RNAME: </Form.Label>{' '}
                                <Form.Control
                                    disabled={!this.state.editToggle}
                                    type="text"
                                    defaultValue={this.state.userName}
                                    onChange={this.onValueChange}
                                    className="user-info"
                                />
                                <Form.Label> ACC0uNT TI3R: </Form.Label>{' '}
                                <Form.Control
                                    disabled={!this.state.editToggle}
                                    type="text"
                                    defaultValue={this.state.accTier}
                                    onChange={this.onValueChange}
                                    className="user-info"
                                />
                                <Form.Label> CR3DiT: </Form.Label>{' '}
                                <Form.Control
                                    disabled={!this.state.editToggle}
                                    type="text"
                                    defaultValue={this.state.credit}
                                    onChange={this.onValueChange}
                                    className="user-info"
                                />
                                <Form.Label> R3GiSTERED VEHiCL3: </Form.Label>{' '}
                                <Form.Control
                                    disabled={!this.state.editToggle}
                                    type="text"
                                    defaultValue={this.state.vehicle}
                                    onChange={this.onValueChange}
                                    className="user-info"
                                />
                                <Form.Label> C0NTACT D3TAiLS: </Form.Label>{' '}
                                <Form.Control
                                    disabled={!this.state.editToggle}
                                    type="text"
                                    defaultValue={this.state.contact}
                                    onChange={this.onValueChange}
                                    className="user-info"
                                />
                            </Form.Group>
                            {/* This button triggers the editInputToggle function with the onClick event. */}
                            <Button
                                variant="light"
                                size="sm"
                                className="p-2 m-4 headerBtn"
                                onClick={() => this.editInputToggle(editToggle)}
                            >
                                {' '}
                                {/* We link the text value of the button directly to the state and change it according to
                                the current function of the button. */}
                                {!editToggle ? 'Edit' : 'Done'}{' '}
                            </Button>{' '}
                        </Form>{' '}
                    </div>
                )}{' '}
            </>
        )
    }
}

/* In order to use the LogIn component in the UI render we need to export it.
    The export name must match the same as the import name. */
export default UserProfile
