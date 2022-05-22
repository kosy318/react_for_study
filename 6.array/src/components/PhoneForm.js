import React, { Component } from "react";

class PhoneForm extends Component {

    state = {
        name: "",
        phone: "",
    };

    // 페이지가 reloading되는것을 방지
    handleSubmit = (e) => {
        e.preventDefault();
        // props로 받았던 onCreate 함수 호출
        // this.props.onCreate({
        //     name: this.state.name,
        //     phone: this.state.phone,
        // });
        this.props.onCreate(this.state);

        // submit 했을때, input에 적혀있는 값들을 초기화
        this.setState({
            name: "",
            phone: "",
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            // 페이지가 reloading되는거 방지하는거 전달
            <form onSubmit={this.handleSubmit}>
                <input name="name" placeholder="이름" onChange={this.handleChange} value={this.state.name} />
                <input name="phone" placeholder="전화번호" onChange={this.handleChange} value={this.state.phone} />
                <button type="submit">등록</button>
                {/* // form 아래 타이핑 한것 그대로 보여줌
                <div>
                    {this.state.name} {this.state.phone}
                </div> */}
            </form>
        );
    }
}

export default PhoneForm;
