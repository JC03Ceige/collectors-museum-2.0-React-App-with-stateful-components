/* To render the svg icon properly we need make use of the react library.
We also import the svg file in order to reference it directly in the JSX. */
import React from 'react'
/* The svg file was compressed and reformatted using https://jakearchibald.github.io/svgomg/ */
import ReactLogo from '../assets/TivanSymbol.svg'

// We create a Logo component to return the svg icon as an image
// No prop is passed to the component function as it will not be required.
const Logo = () => {
    // The img is nested in a React.Fragment
    return (
        <>
            <img id="svg" src={ReactLogo} alt="Collector Logo" />
        </>
    )
}

/* To render the Logo in the App UI, we need to export the Logo component. 
The import component needs to be named exactly the same. */
export default Logo
