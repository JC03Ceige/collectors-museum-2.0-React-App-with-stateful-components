/* This component will be used as the landing page and we will only use it to iterate throught 
collection aray and then load a product tile for each object in the array. */
import * as React from 'react'
import ProductTile from './ProductTile'

/* The component is declared using an arrow function. 
Note that we pass the deconstructed collection array as an argument in order for us to 
reference it directly within our component. */
const ProductPage = ({ collection }) => {
    return (
        <div>
            <div id="displayGrid">
                {' '}
                {/* We create a table to display our products and will use components that we imported.
                        Note that the structure is the same as with any table we would contruct in HTML. */}{' '}
                <table>
                    <thead>
                        <tr>
                            <th>
                                <h1> The Collection </h1>{' '}
                            </th>{' '}
                        </tr>{' '}
                    </thead>{' '}
                    <tbody>
                        {' '}
                        {/* We use the map method to iterate and return the collection array items. */}{' '}
                        <tr>
                            {' '}
                            {collection &&
                                Object.keys(collection).map((item) => (
                                    <ProductTile
                                        key={collection[item].name}
                                        item={collection[item]}
                                    />
                                ))}{' '}
                        </tr>{' '}
                    </tbody>{' '}
                </table>{' '}
            </div>{' '}
        </div>
    )
}

/* The product page component is exported to be imported in another component.
It is important to use the exact same name for both import and export. */
export default ProductPage
