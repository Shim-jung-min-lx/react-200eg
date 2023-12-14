import React, { Component }from 'react';

class R009_Es6 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        let jsString1 = '자바스크립트'
        let jsString2 = '입니다\n다음 줄 입니다.'
        console.log(jsString1+' string'+jsString2+'~');

        var Es6String1 = 'ES^'
        var Es6String2 = '입니다'
        console.log(`${Es6String1} string${Es6String2}!!
        _____다음줄 입니다`);

        var LongString = 'ES^에 추가된 String 함수들입니다.';
        console.log('startsWith : ' + LongString.startsWith("ES^에 추가"));
        console.log('endsWith : ' + LongString.endsWith("함수들입니다."));
        console.log('includes : ' + LongString.includes("추가된 String"));
    }

    render() {
        return (
            <h2>[ THIS IS ES6 STRING ]</h2>
        )
    }
}

export default R009_Es6;