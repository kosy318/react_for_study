import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
    render() {
        // react에서 css 사용법
        const style = {
            backgroundColor: "black",
            padding: "16px",
            color: "white",
            fontSize: "36px",
        };
        // style ={} 안에 넣어줌
        return (
            <Fragment>
                <div style={style}>안녕하세요 리액트</div>
                {/* class대신에 className사용 */}
                <div className="App">testing className</div>
            </Fragment>
        );
    }
}

export default App;
