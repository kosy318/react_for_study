import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }
    
    // 페이지가 reloading되는것을 방지
    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form>
                <input 
                    name="name"
                    placeholder="이름"
                    onChange={this.handleChange} 
                    value={this.state.name}
                />
                <input 
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
                <div>
                    {this.state.name} {this.state.phone}
                </div>
            </form>
        );
    }
}

export default PhoneForm;