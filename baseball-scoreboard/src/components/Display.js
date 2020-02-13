import React from 'react';

const Display = (props) => {

    return (
        <div>
            <p>Strike Count: {props.strikeCount}</p>
            <p>Ball Count: {props.ballCount}</p>
        </div>
    )
}

export default Display;