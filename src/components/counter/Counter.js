import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.onIncButtonclicked = this.onIncButtonclicked.bind(this)
        this.onDecButtonclicked = this.onDecButtonclicked.bind(this)
    }

    onIncButtonclicked() {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    onDecButtonclicked() {
        this.setState(prevState => {
            return { count: prevState.count - 1 }
        })
    }

    render() {
        return <React.Fragment>
            <p>Count: {this.state.count}</p>
            <Button className="increment" color="primary" onClick={this.onIncButtonclicked}>Increment </Button><br />
            <Button className="decrement" color="secondary" onClick={this.onDecButtonclicked}>Decrement </Button>
        </React.Fragment>
    }
}

export default Counter