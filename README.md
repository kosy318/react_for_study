# react_for_study
studied by myself with inflearn
## 1.basic
jsx의 형태의 코드를 리턴해줘야한다.  
jsx는 html이랑 비슷하지만 javascript로 변환된다.  

<b>jsx 규칙</b>  
jsx에서는 태그가 반드시 닫혀있어야한다.  
- 두 개 이상의 element는 하나의 element로 감싸져있어야한다.  
- 또는 Fragment 태그로 감싸주면된다. 
  
jsx 안에 자바스크립트 값 사용: {}안에 변수명을 적어서 사용  
  
조건부 렌더링: 보통 삼항연산자나 AND 연산자 사용  
조건이 여러개일 경우 IIFE를 선언하고 바로 실행할 수 있다.

## 2.grammer
react에서 css 간단하게 사용 방법?  
- const style_var ={}; 로 선언  
- \<div style={style_var}>\</div> 로 적용  

class 대신에 className을 써서 class 이름 부여  
css 파일에서 사용 가능 

## 3.props_and_state
props와 state: react에서 데이터를 다룰때 사용되는 개념  

props: 부모 component가 자식 component한테 값을 전달할 때 사용  
함수형 컴포넌트: props만 받아서 보여주는 경우, 딱히 기능 없이 보여주기만 하는 경우 사용  
초기 마운트 속도가 미세하게 좀 더 빠름, 불필요한 기능이 없기 때문에 메모리를 덜 사용함  

state: state는 컴포넌트 내부에 있고, 내부에서 바뀔 수 있는 값이고, 이 값이 바뀔때마다 컴포넌트는 rerendering이 된다.  
값을 바꿀때는 setState로 변경함. setState를 사용하지 않고 직접 값을 바꾸게 된다면, rerendering이 되지 않음   

props는 읽기 전용, state는 변경도 가능  

사용법은 code 참고
