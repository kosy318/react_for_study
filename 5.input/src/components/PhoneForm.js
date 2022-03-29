// rsc, rcc 입력으로 쉽게 폼을 만들 수 있음
import React, { Component } from "react";

class PhoneForm extends Component {
    state = {
        nickname: "",
        phone: "",
    };

    // e는 event 객체임
    // input이 event.target이고 얘가 가지고 있는 value값을 setState를 통해 name 값을 설정
    handleChange = (e) => {
        this.setState({
            // input의 name 값이 [ ] 자리에 들어가게됨
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <form>
                {/* input에서 값이 변경될때마다, name값이 바뀔것임 */}
                {/* input이 여러개일 때 어떻게 처리할거임? */}
                <input
                    name="nickname"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.nickname} 
                />
                <input 
                    name="phone" 
                    placeholder="전화번호" 
                    onChange={this.handleChange} 
                    value={this.state.phone} 
                />
                <br/>
                {this.state.nickname}<br/>
                {this.state.phone}
            </form>
        );
    }
}

export default PhoneForm;
