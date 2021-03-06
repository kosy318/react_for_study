import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        // App.js에서 data랑 onRemove, onUpdate를 받아옴
        const {data, onRemove, onUpdate} = this.props;

        // data 안 info라는 것을 PhoneInfo Component한테 전달
        // key: component를 여러개 렌더링 하게 될 때 고유 값을 정해줌으로써 업데이트 성능을 최적화
        const list = data.map(
            info => (
            <PhoneInfo 
                onRemove={onRemove}
                onUpdate={onUpdate}
                info={info}
                key={info.id} 
            />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;