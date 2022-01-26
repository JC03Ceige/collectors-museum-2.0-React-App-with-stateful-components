/* We import the react library and the image that we want to use in this component. */
import * as React from 'react'
import gotg from '../assets/GotG-collector.jpg'

/* This is the landing page and will be the first thing the user sees after the header.
We pass in the props even though it not used at the moment, but in case we want to make use of it at
a later stage. */
const LandingPage = () => {
    return (
        /* The image and paragraph are passed directly into the component and does not
        make use of other components. */
        <div id="displayTile">
            <img src={gotg} alt="GotG in Collector's Museum." />

            <p>
                The Collector's Museum is an intergalactic vault and holding
                area located at the Knowhere mining colony under the control of
                Taneleer Tivan, used to store the various objects and specimens
                in Tivan's collection.
                <br />
                <hr />A collection that can be prove to be{' '}
                <strong>
                    <i>exceptionally lucrative</i>
                </strong>{' '}
                to any scavengers, ravagers or simply your run-of-the-mill
                layman who wants to get rid of some old valuables.
                <br />
                <hr />
                The collector offers the most competitive prices for rare and
                unique items (organic or inorganic), all <i>you</i> need to do
                is to find them.
                <br />
                <hr />
                <sub>
                    <b>
                        <i>
                            * For those who are simply of a more curious nature,
                            the museum is open to viewers for a small,
                            negotiable, fee.
                        </i>
                    </b>
                </sub>
            </p>
        </div>
    )
}

/* The landing page component is exported to be imported in another component.
It is important to use the exact same name for both import and export. */
export default LandingPage
