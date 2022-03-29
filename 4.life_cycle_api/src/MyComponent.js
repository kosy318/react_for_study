import React, { Component } from "react";

class MyComponent extends Component {
    state = {
        value: 0,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        // prevState와 nextProps 값이 다를 때 prevState를 nextProps 값으로 바꿔줌
        if (prevState.value !== nextProps.value) {
            return { value: nextProps.value };
        }

        return null; // 변경할 사항이 없다
    }

    shouldComponentUpdate(nextProps, nextState){
        // nextProps의 값이 10일때만 rendering을 하지 않음
        if(nextProps.value === 10) return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.value !== prevProps.value){
            console.log('value 값이 바뀌었다!! ' + prevProps.value + ' to ' + this.props.value);
        }
    }

    componentWillUnmount(){
        console.log('Good bye');
    }

    render() {
        return (
            <div>
                {/* 에러 만들기, 에러를 잡으려면 부모 component한테 가자 */}
                {/* {this.props.missing.something} */}
                <p>props: {this.props.value}</p>
                <p>state: {this.state.value}</p>
            </div>
        );
    }
}

export default MyComponent;
