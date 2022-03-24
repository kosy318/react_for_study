import React, { Component } from "react";

class Counter extends Component {
    // 객체여야함
    state = {
        number: 0,
    };

    handleIncrease = () => {
        // component에서 state 값이 update 됐는지 안됐는지 모르기 때문에 아래와 같이 쓰면 안된다.
        // this.state.number = this.state.number + 1

        // update 할 때는 this.setState함수를 사용해서 한다
        this.setState({
            number: this.state.number + 1,
        });
    };

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1,
        });
    };

    render() {
        return (
            <div>
                <h1>Counter</h1>
                {/* state에 있는 값 사용방법 */}
                <div>값: {this.state.number}</div>
                {/* onClick으로 함수를 불러옴 */}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;
