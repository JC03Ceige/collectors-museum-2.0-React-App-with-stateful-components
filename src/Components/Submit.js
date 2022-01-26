/* This component is created to serve as a form on the react app header.
In order to have it function as a form, the react-bootstrap Form and Button
components are imported from react-bootstrap */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// We create a LogIn component which must be named using the CamelCase
// *Note that there is no prop in this compnent as we will not passing properties.
const Submit = () => {
    // We need give the components function a return statement.
    return (
        /* The Component can only return one parent element,
    while parent elements can have many children */
        <div className="logInForm">
            {' '}
            {/* Bootstrap Form is used for the form
      Bootstrap Button is used for the submit button */}{' '}
            <Form>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label> US3RNAME </Form.Label>{' '}
                    <Form.Control
                        as="input"
                        type="text"
                        placeholder="Enter Username"
                    />
                    <Form.Text className="text-muted m-1">
                        Please provide a form of authentication or experience
                        our services first hand.{' '}
                    </Form.Text>{' '}
                </Form.Group>{' '}
                <Button
                    variant="light"
                    type="submit"
                    size="sm"
                    className="p-2 m-1 headerBtn"
                >
                    Submit{' '}
                </Button>{' '}
            </Form>{' '}
        </div>
    )
}

/* In order to use the LogIn component in the UI render we need to export it.
The export name must match the same as the import name. */
export default Submit
