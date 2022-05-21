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

## 4.life_cycle_api
 생명주기

컴포넌트가 브라우저상에서 나타날 때, 없데이트 될 때, 사라질 때 중간 과정에서 작업을 하고싶다 할 때 LifeCycle API를 사용하면된다.

 

<br>
<b>Mounting: 컴포넌트가 브라우저 상에 나타난다는것</b>

- constructor: 컴포넌트가 처음 브라우저 상에 나타날 때 만들어지는 과정에서 가장 먼저 실행되는 함수, 주로 컴폰넌트가 가지고 있을 state를 초기 설정을 한다던지 컴포넌트가 만들어지는 과정에서 해야되는 작업이 있을 때 constructor에서 처리

- getDerivedStateFromProps: props에서 받은 값을 state에 동결시키고 싶을때 사용, Mounting 과정 뿐만아니라 Updating 과정에서도 props가 바뀌게되면 이 함수가 실행됨

- render: 어떤 DOM을 만들게될지 내부에 있는 태그들에는 어떤 값을 전달해주게 될 지 정해줌

- React updates DOM and refs: 실제로 브라우저 상에 나타나게 됨

- componentDidMount: 주로 외부 라이브러리를 사용하게 될 때 "특정 DOM에 차트를그려주세요"같은 코드를 작성할 수도 있고 네트워크 요청, API, AJAX 요청을 해야한다할 때 componentDidMount에서 처리, component가 나타나고 몇 초 뒤에 뭔가를 하고싶다, 즉 component가 브라우저에 나타난 시점에 어떤 작업을 하겠다라는 것을 명시해줌, eventListener 설정

 

<br>
<b>Updating: 컴포넌트의 props가 바뀌거나 state가 바뀌었을 때</b>

- getDerivedStateFromProps

- shouldComponentUpdate: 중요, 컴포넌트가 업데이트가 되는 성능을 최적화하고싶을때 사용, 부모컴포넌트가 rerendering이되면 자식 컴포넌트도 다 rendering되는데 이게 불필요할 때가 있는데 그럴 때 사용(render함수가 호출이 되긴하는데 실제 브라우저 DOM 상에는 반영되지 않음, virtual DOM상에는 그려짐, 이것조차 성능을 아끼고싶다 할 때 사용), true: redering 프로세스 진행, false: redering 진행 x, 화면에 반영이안됨// 즉 virtual DOM에도 redering을 할 지 말지를 결정하는 함수

- render

- getSnapshotBeforeUpdate: redering 다음 결과물이 브라우저상에 반영되기 바로 직전에 호출되는 함수, scroll의 위치, DOM의 크기를 가져오고싶다 그런 작업을 할 때 사용

- React updates DOM and refs

- componentDidUpdate: 작업을 마치고 component가 update 되었을때 호출되는 함수

 

<br>
<b>Unmounting: 컴포넌트가 브라우저 상에서 사라질 때</b>

- compnentWillUnmount: Mounting에서 설정한 Listener 없애줌

<br>
<br>

<b>컴포넌트 초기 생성</b>

- constructor: 컴포넌트가 처음 만들어질 때 호출되는 함수

~~componentWillMount는 사라졌음~~

- componentDidMount: Mount 끝, 이 API 는 컴포넌트가 화면에 나타나게 됐을 때 호출, 외부 라이브러리 연동, 컴포넌트에서 필요한 데이터 요청(Ajax, GraphQL, etc), DOM에 관련된 작업(스크롤 설정, 크기 읽어오기 등)

특정 DOM에 어떤 작업을 하고싶을 때 ref를 사용하는데 DOM에 id를 붙여주는것과 비슷

 

<br>
<b>컴포넌트 업데이트</b>

~~compnentWillReceiveProps는 사라짐, props를 새로 불러올 때 어떤 작업을 하겠다~~

- static getDerivedStateFromProps(): props값을 state와 동기화시키고 싶을 때 사용, 객체를 리턴해주면 이 객체가 state값으로 들어가게됨, 업데이트 과정 뿐만아니라 컴포넌트가 만들어지는 과정에도 사용 => MyComponent.js

- shouldComponentUpdate: 컴포넌트 업데이트 성능 최적화, return false 하면 업데이트를 안하게 되고, return true를 하면 업데이트를 함, 즉 업데이트(rendering)를 막아줄 수 있는함수! => MyComponent.js

~~componentWillUpdate는 사라짐~~

- getSnapshotBeforeUpdate: 브라우저에 반영되기 직전의 값을 확인할 수 있음, 컴포넌트가 업데이트돼서 브라우저의 DOM에 반영되기 바로 직전에 호출되는 함수, 업데이트 되기 직전의 DOM 상태를 return 시켜서 나중에 componentDidUpdate에서 받아올 수 있음 => ScrollBox.js

- componentDidUpdate: Update 끝, component가 실제 업데이트 되고 난 다음에 호출되는 부분, 업데이트 전의 값을 알 수 있는데 이를 사용해서 특정 Props가 바뀌면 어떤 작업을 하게끔 할 수 있음 => ScrollBox.js + MyComponent.js

 

<br>
<b>컴포넌트 제거</b>

- componentWillUnmount: 컴포넌트가 불필요해지면 컴포넌트가 사라지는데 그때 나타나는 함수 => MyComponent.js+App.js(counter가 < 10일때만 component가 보이게 해라)

 

<br>
<b>컴포넌트에 에러 발생</b>

- componentDidCatch: 에러 처리, 에러가 발생할 수 있는 component의 부모 component에서 처리를 해줘야함 => MyComponent.js(에러 만들어놓음)+App.js(에러처리)


## 5.input
input을 사용하여 state 값을 바꾸는 법

## 6. array
자식 컴포넌트가 부모한테 값 전달하기<br>
<App /> component 내부에서 handleCreate라는 메소드를 만들어 자식컴포넌트한테 Props로 전달<br>
Props로 전달한 함수를 호출시켜서 data가 <App />에 들어가게끔 작성<br><br>



