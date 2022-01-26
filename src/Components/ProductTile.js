/* We import the react library as well as bootstrap and the bootstrap component we wil need. */
import React from 'react'
/* We import the Button component from react-bootstrap. To use this we need to run 'npm install reactstrap react react-dom'.
You can find the docs here https://reactstrap.github.io/?path=/story/home-installation--page */
import { Button } from 'react-bootstrap'

/* We create the product tile component which will be a td element.
We pass in a deconstructed props for easy, cleaner reference. */
const ProductTile = ({ item }) => {
    /* This component returns the layour of the td element with data from the collection objects. */
    return (
        /* We use react fragments as the parent element to ensure the layout renders correctly.
        Note that we can also use the shorthand which is <></> empty tags. */
        <React.Fragment>
            <td id="productTile">
                {' '}
                {/* To make the product image functional, we place it inside of a button. */}{' '}
                <Button className="btnImg" variant="outline-light">
                    {' '}
                    {/* Here we make use of the item prop. Note that we can pass props as the argument and
                    then our code will look like {props.item.thumbnail} */}{' '}
                    <img
                        src={item.thumbnail}
                        className="thumbnail"
                        alt={item.name}
                    />{' '}
                </Button>{' '}
                {/* Both the heading and the paragraph reference the colloction object directly. */}{' '}
                <h3> {item.name} </h3> <p> {item.description} </p>{' '}
            </td>{' '}
        </React.Fragment>
    )
}

/* The component is exported and we must make sure that we use the exact same name when we
import to another component. */
export default ProductTile
