import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollBox from './ScrollBox';

const Start = () => <App />;
const Scroll = () => <ScrollBox />;

ReactDOM.render(<Start />, document.getElementById("root"));
ReactDOM.render(<Scroll />, document.getElementById("scroll-box"));
