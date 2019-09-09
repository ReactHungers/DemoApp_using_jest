import React from 'react';

class InputField extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: this.props.val ? this.props.val : ''
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({ username: event.target.value })
    }

    render() {
        return (
            <input 
                type={this.props.type} 
                name={this.props.name}
                onChange={this.onInputChange} 
                value={this.state.username}
                placeholder={this.props.placeholder} 
            />
        )
    }
}

export default InputField