import React, { Component }from 'react';

class R013_ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: 'React200',
            num: 3
        };
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1,1);
        this.Function3();
        this.Function4();
        this.Function5(0,2,3);

        function Function1(num1) {
            return console.log(num1+ '. Es5 Function');
        }
    }

    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3+'. Arrow Function : '+this.state.arrowFuc);
        // 여기서 this는 R013_ArrowFunction의 컴포넌트
    }

    Function3 () {
        var this_bind = this; // 콜백함수 내에서 this로 접근 불가하기 때문에 접근할 수 있는 변수에 this를 백업
        setTimeout(function () {
            console.log(this_bind.state.num + '.Es5 Callback Function noBind : '); // R013_ArrowFunction 컴포넌트
            console.log(this.state.arrowFuc); // window 객체 (그래서 여기서 에러뜸)
        }, 100);
    }

    Function4 () {
        setTimeout(function () {
            console.log('4. Es5 Callback Function Bind : ' + this.state.arrowFuc);
        }.bind(this), 100); // 콜백 함수 밖의 this를 바인드 해주므로서 콜백 내에서 this 사용가능
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4+'. Arrow Callback Function : '+this.state.arrowFuc);
        }, 100); // es6에서는 .bind(this) 사용해서 바인드 안해줘도 알아서 this 사용가능
    }

    render() {
        return (
            <h2>[THIS IS ArrowFunction]</h2>
        )
    }
}

export default R013_ArrowFunction;