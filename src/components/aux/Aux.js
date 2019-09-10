import React from 'react';

const Aux = (props) => {
    return (
        <div className="App">
            <div className="App-header">
                {props.children}
            </div>
        </div>
    )
}

export default Aux