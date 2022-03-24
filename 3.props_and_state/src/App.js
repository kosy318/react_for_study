import React, { Component, Fragment } from "react";
// MyName.js 에서 MyName을 가져옴 -> props practice
import MyName from "./MyName.js";
// Counter.js 에서 Counter을 가져옴 -> state practice
import Counter from "./Counter.js";

class App extends Component {
    render() {
        return (
            <Fragment>
                <MyName />
                <Counter />
            </Fragment>
        );
    }
}

export default App;
