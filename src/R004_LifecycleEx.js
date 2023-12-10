import React, { Component }from 'react';

class R004_LifecycleEx extends Component {
    render () {
        console.log('3.render Call');
        return (
            <h2>[THIS IS RENDER FUNCTION from r004]</h2>
        )
    }
}

export default R004_LifecycleEx;