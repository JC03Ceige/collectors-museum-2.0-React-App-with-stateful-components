/* We first import react. */
import React from 'react'
import { Routes, Route } from 'react-router-dom'

/* Here we import all the CSS files and libraries. 
Note that bootstrap components need to be loaded individually per component. */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

/* We import the image that it can be easlity referenced throughout the App
without having to use tideous paths for each instance. */
import helmsAsgard from './assets/asgard-helmets.jpg'
import capsUniform from "./assets/Cap's_Uniform.png"
import cocoon from './assets/collector-cocoon.png'
import spaceDogCosmo from './assets/Cosmo-the-Space-Dog.jpg'
import darkElf from './assets/dark-elf.jpg'
import howardDuck from './assets/Howard-the-Duck.jpg'
import nanoGuantlet from './assets/infinity-gauntlet.jpg'
import wundagorePlant from './assets/plant.jpg'
import honchiSlug from './assets/space-slugs.jpg'
import stanLee from './assets/stan-lee.png'
import symbiote from './assets/symbiote.jpg'

/*Below we import all the Components we created in the 'Components' directory.
Keep in mind that the componenets need to be named exactly as it was imported. */
import Header from './Components/Header'
import ProductPage from './Components/DisplayGrid'
import LandingPage from './Components/DisplayTile'
import VisitorCounter from './Components/VisitorCounter'

/* We create a boolean for the LogIn for as loggedIn which we will to the header as a property */
const loggedIn = false

/* Below we create the App component which will be used in the final render of the UI in our index.js */
const App = () => {
    /* We create an array for the all the objects we want to list. The reason for doing it in the App components is to make is available to any other components that might need to make use of it. */
    const collection = [
        {
            id: '1',
            name: 'Dark Elf',
            thumbnail: darkElf,
            description:
                'The Dark Elves (known as Svartálfar by the Ancient Norse, Älfeneel or Harudheeniksel by the Dark Elves themselves) are among the oldest known species in existence, hailing from the realm Svartalfheim. They are one of the mortal enemies of the Asgardians, the other being the Frost Giants.',
        },

        {
            id: '2',
            name: 'Helms of Asgard',
            thumbnail: helmsAsgard,
            description:
                'Loki: The Horned Helmet was the helmet Loki wore during his time as Asgardian royalty and his crusades. Its horns are an Asgardian symbol for the sorcery he wields. Odin: As the King Of Asgard, Odin wears a battle helmet that embrace the symbols of very powerful beasts. Whether they represent wings of Eagles or one of the noble Pegasus - Mounts of the famed Valkyrie and the horns of a Ram or other mythical horned beast. Thor: From his first appearance in Journey into Mystery, Thor always had a winged helmet. This helps him stand out from other heroes, protects him in battle and is a cue that he is able to fly with the help of Mjolnir.',
        },

        {
            id: '3',
            name: 'Wundagore Everbloom',
            thumbnail: wundagorePlant,
            description:
                'According to legends, the Wundagore Everbloom can unlock the doors of time and grant visions of the future when one lays a petal of an everbloom on their tongue. While it is true that it can allow individuals to see the future, it is required for the essence of the petal to be consumed twice, first after hunger and second after murder. That is to say, to kill an individual or creature who previously ate a petal of the Everbloom and then consume their stomach.',
        },

        {
            id: '4',
            name: 'Stan Lee',
            thumbnail: stanLee,
            description:
                'The creator of things marvelous, majestic and unsurpassably epic.',
        },

        {
            id: '5',
            name: 'Symbiote',
            thumbnail: symbiote,
            description:
                "The Symbiotes (originally known as Klyntars) are a race of extraterrestrial parasites. The beings now known on Earth simply as 'Symbiotes' are a conquering, parasitic race which feed off the emotions of their hosts. They tend to force their hosts to perform spectacular and terrifying feats in order to feed off of the resulting rush of adrenaline (and possibly other hormones, such as phenethylamine). Eventually, these host beings would be completely sucked dry, exhausted by the constant stress and exertion, or simply die in a failed stunt.",
        },

        {
            id: '6',
            name: 'Nano Infinity Gauntlet',
            thumbnail: nanoGuantlet,
            description:
                "The Nano Gauntlet was created by Tony Stark, Bruce Banner, and Rocket Raccoon to allow the Avengers to utilize the six Infinity Stones they had gathered during their Time Heist to resurrect the victims of the Snap. Once Stark inserted each of the Stones into the Nano Gauntlet, the Avengers debated over who should use the gauntlet. With Thor deemed unfit to perform the action, it was decided that Hulk would wield it since the stones' energy contained gamma radiation. It was designed to contain and allow the user to channel the powers of the Infinity Stones in a manner similar to the Infinity Gauntlet, although the effects of wielding it were far more damaging to the user than the Infinity Gauntlet was.",
        },

        {
            id: '7',
            name: 'Sovereign Birthing Pod',
            thumbnail: cocoon,
            description:
                'Every citizen is born exactly as designed by the community. Impeccable, both physically and mentally. They control the DNA of their progeny, germinating them in birthing pods.',
        },

        {
            id: '8',
            name: 'Howard the Duck',
            thumbnail: howardDuck,
            description:
                "Howard the Duck was born on Duckworld, a planet in another dimension, where intelligent life evolved from waterfowl. Duckworld is apparently an alternate Earth, and resembles mankind's Earth in an astounding number of ways, including the fact that ducks speak English. Very little is known about Howard's past on Duckworld. Indeed, there are conflicting accounts as to the circumstances surrounding his disappearance. Howard resembles a humanoid duck, having a cognitive and intellectual ability equivalent or superior to the most sensitive species in the galaxy. As such, he is bipedal, can talk and use weapons designed to be wielded by normal-sized humanoids. Howard's anatomy is compatible with the atmospheres of Knowhere, Contraxia and Earth.",
        },

        {
            id: '9',
            name: "Cap's Uniform",
            thumbnail: capsUniform,
            description:
                'The uniform is both water and fire retardant, it is made of Kevlar, Nomex, and light weight titanium. The costume also offers a medium level of resistance to electric shocks and force impacts, such as falls from thirty meters in height. The suit cannot be pierced by normal conventional sharp-edged materials like sharpened wood, glass, iron, copper, or aluminum. The suit also gives some resistance to high temperatures. It includes a voice-operated, wireless communicator for the left ear, which has its frequencies blocked, making it highly difficult to trace. The uniform has an utility belt containing mission-specific equipment, such as a first aid kit containing tweezers, antiseptic gel coated band aids, bone and muscle pain reliever spray cans, and antidotes for some toxins, as well as military cable, lock picks, grenades, and several other materials. This shield is composed of a unique combination of Vibranium, steel alloy and a unknown third catalyst, that has never been duplicated, called Proto-Adamantium. It is virtually indestructible. It is as much an offensive weapon as a defensive one for Captain America.',
        },

        {
            id: '10',
            name: 'Cosmo the Space Dog',
            thumbnail: spaceDogCosmo,
            description:
                "Cosmo was formerly a test animal for the Soviet Space Program. He was launched into Earth's orbit as part of an experiment but his spacecraft drifted out of orbit during the 1960's, eventually sending him to Knowhere. At some point during spacial drift, cosmic rays mutated him, giving him his psionic powers. Thereafter, he became the station's Chief of Security for Knowhere.",
        },

        {
            id: '11',
            name: 'Honchi',
            thumbnail: honchiSlug,
            description:
                'A roughly humanoid-slug species with red-skin, four appendages, and the natural ability to segment and subdivide.',
        },
    ]

    /* This return statement is where compile our UI for the final render. It contains all the components that we have created and we also define properties from here. This will serve as the 'HTML' for our page. */
    return (
        /* Rememer that any component can only have one parent element so we wrap everythin in a div. */
        <div className="App">
            {/* We insert links to external libraies used as we would with a normal HTML. */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                Crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;800;900&display=swap"
                rel="stylesheet"
            />

            {/* This div contains the Header. */}
            <div>
                {/* The Header tag takes in attributes that will be passed down as props in the component. */}
                <Header
                    compName="ThE COllECTOR's MUSEUM"
                    userName="Star Lord"
                    loggedIn={loggedIn}
                />
            </div>
            {/* We place the body of the UI in a singel div. */}
            <div className="App-body">
                {/* Container is a bootstrap-react component */}
                <Container id="body">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <LandingPage
                                    collection={collection}
                                    className="displayTile"
                                />
                            }
                        />

                        <Route
                            path="/shop"
                            element={
                                <ProductPage
                                    collection={collection}
                                    id="displayGrid"
                                />
                            }
                        ></Route>
                    </Routes>
                </Container>
                <footer className="footer">
                    <VisitorCounter />
                </footer>
            </div>
        </div>
    )
}

/* We export the App component that it may be rendered in the index.js. */
export default App
