import React, { Component }from 'react';

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {tmp_state:props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log("1. constructor call");
    }

    componentDidMount () {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+ this.state.tmp_state);
        this.setState({tmp_state2: true});
    }

    shouldComponentUpdate(props, state) {
        console.log('6. shouldComponentUpdate Call / temp_state2 =' + state.tmp_state2) ;
        return state.tmp_state2;
    }

    render() {
        console.log('3. render call');
        return (
            <h2>[ THIS IS COMPONENTDIDMOUNT FUNCTION from r008 ]</h2>
        )
    }

    /* 
    componentDidMount 호출 후 setState()를 통해 state 변경이 이루어졌기 때문에 
    getDerivedStateFromProps()를 한번 더 호출 하고, "변경"할 때만 작동하는 shouldComponentUpdate()가 실행된다.
    shouldComponentUpdate()는 boolean을 반환하는데 반환값이 참 이면 render()함수를 한번 더 호출한다
    */
}

export default R008_LifecycleEx;