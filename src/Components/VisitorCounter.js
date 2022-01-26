/* This is a stateful component and we make it statefull because the {this.state.seconds}
element is dynamic and constantly changing. 

Note that this is a modified version of the Timer component that was included in Task 9. */

import React from 'react'

/* Note that we implement the stateful component with a class. */
class VisitorCounter extends React.Component {
    /*We use a constructor to declare the initial state of the component. To make it more realistic we
  start with a number that is not zero. */
    constructor(props) {
        super(props)
        this.state = {
            visitors: 25401,
        }
    }

    /* We change the state of the component in the method below. We don't modify the state of the component directly 
and always use this.setState(). */
    counter() {
        this.setState((prevState) => ({
            visitors: prevState.visitors + Math.floor(Math.random() * 100),
        }))
    }

    /*componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
See more about componentDidMount here:https://reactjs.org/docs/react-component.html#componentdidmount

Notice that we use the setInterval() method here. the setInterval method repeatedly calls a function (this.tick(), 
with a fixed time delay between each call (1000 milliseconds). 

See more about setInterval here: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval */
    componentDidMount() {
        this.interval = setInterval(() => this.counter(), 1000)
    }
    /*componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. 
Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount(). */
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    /*Below is the method we use to render the component. W use the state info (using this.state) in this render method. */
    render() {
        return (
            <div>
                {' '}
                {this.state.visitors}
                people have visited this page to date.{' '}
            </div>
        )
    }
}
/* The component is exported and we must make sure that we use the exact same name when we
import to another component. */
export default VisitorCounter
