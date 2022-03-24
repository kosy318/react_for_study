// react module을 불러와서 사용하겠다
import React, { Component, Fragment } from "react";

// Component를 만드는 기본적인 방법, 함수를 이용해서 만들수도 있음
class App extends Component {
    render() {
        // render method
        const name = "react";
        const value = 3;
        return (
            // 꼭 jsx의 형태의 코드를 리턴해줘야한다.
            // jsx는 html이랑 비슷하지만 javascript로 변환된다.

            // jsx 규칙
            // jsx에서는 태그가 반드시 닫혀있어야한다.
            // 두 개 이상의 element는 하나의 element로 감싸져있어야한다.
            // 또는 Fragment 태그로 감싸주면된다.
            <Fragment>
                <div>
                    {/* jsx 안에 자바스크립트 값 사용
               위에서 name 선언해줬음, {}안에 변수명을 적어서 사용 */}
                    <h1>안녕하세요 {name}</h1>
                </div>
                <div>두 개</div>
                {/* 조건부 렌더링 보통 삼항연산자나 AND 연산자 사용 */}
                <div>{1 + 1 === 3 ? "맞다" : "틀리다"}</div>
                {name === "react" && <div>리액트다!</div>}
                {/* 조건이 여러개일 경우 IIFE를 선언하고 바로 실행할 수 있다. */}
                {(() => {
                    if (value === 1) return <div>1이다!</div>;
                    if (value === 2) return <div>2다!</div>;
                    if (value === 3) return <div>3이다!</div>;
                    return <div>없다</div>;
                })()}
            </Fragment>
        );
    }
}

export default App;
