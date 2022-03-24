import React, { Component } from 'react';

// class MyName extends Component{
//     // default값 설정, static defaultProps를 class 내부에 설정
//     static defaultProps = {
//         name: '기본이름'
//     }

//     render(){
//         return(
//             <div>
//                 {/* props 사용 */}
//                 안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
//             </div>
//         )
//     }
// }

// 함수형 컴포넌트 작성
// 코드의 상단에서 Component를 불러오지 않아도 됨
// name 값을 props로 받아와서 사용
const MyName = ({ name }) => {
    return (
        <div>
            안녕하세요! 제 이름은 <b>{name}</b> 입니다.
        </div>
    );
};

MyName.defaultProps = {
    name: "기본이름",
};

export default MyName;
