import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () =>{
        // info랑 onRemove를 PhoneInfoList로부터 받아옴
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const {info, onUpdate} = this.props;
        // true->false
        if(this.state.editing){
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        }else{ // false->true
            this.setState({
                name: info.name,
                phone: info.phone,
            })
        }
        this.setState({
            editing: !this.state.editing,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // name, phone값을 받아옴
        const{name, phone} = this.props.info;
        const{editing} = this.state;

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input 
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div>
                                <input
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                />
                            </div>
                        </Fragment>
                    ):(
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정'}
                </button>
            </div>
        );
    }
}

export default PhoneInfo;