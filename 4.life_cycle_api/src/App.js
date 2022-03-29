import React, { Component, Fragment } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
    state = {
        counter: 1,
        error: false,
    };

    // 에러 잡기
    // NOT WORKING
    // componentDidCatch(error, info){
    //     this.setState({
    //         error: true,
    //     });
    //     // API 를 통해서 서버로 오류 내용 날리기
    // }

    constructor(props) {
        super(props); // Component가 원래 가지고 있던 생성자를 먼저 호출
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        // 특정 DOM의 특징?을 확인 가능
        console.log(this.DivId.getBoundingClientRect().height);
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    render() {
        // if(this.state.error){
        //     return (
        //         <div>에러가 났어요!</div>
        //     )
        // }

        return (
            // constructor: 컴포넌트가 처음 만들어질 때 호출되는 함수
            // 특정 DOM에 어떤 작업을 하고싶을 때 ref를 사용하는데 DOM에 id를 붙여주는것과 비슷
            <Fragment>
                <div ref={(ref) => (this.DivId = ref)}>
                    {/* MyComponent에 값을 넘겨줌 */}
                    {/* this.state.counter <10일 때만 보여라 */}
                    {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
                    <button onClick={this.handleClick}>Click Me</button>
                </div>
                <div id="scroll-box"></div>
            </Fragment>
        );
    }
}

export default App;
