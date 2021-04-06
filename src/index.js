import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.rendor() 를 통해서 App.js 에 있는 <div> 를 index.html 에 넣어줌
// React app 은 처음부터 모든 HTML 을 그려넣진 않음. 일부 HTML 만 그리고 이후 엘리먼트를 추가하거나 제거하는 방식으로 화면을 그림
// React keypoints: 컴포넌트, JSX, props
// <App /> component import
// ReactDOM.rendor(첫번재, 두번째), 첫번째에는 컴포넌트를 임포트, 두번째는 임포트한 컴포넌트가 그려질 위치
// 리액트는 컴포넌트와 함께 동작하고, 리액트 앱은 모두 컴포넌트로 구성됨
// 컴포넌트는 자바스크립트와 HTML 을 조합한 JSX 라는 문법을 사용해서 만듬
ReactDOM.render( <App />,  document.getElementById('root') );


// 리엑트는 최종으로 단 한개의 컴포넌트를 그려야 하는데 두개를 그릴 경우 에러발생, 따라서 최종으로 그릴 컴포넌트 안에 컴포넌트를 추가해줘야함 !!
// ReactDOM.render( <App /><Potato /> ,  document.getElementById('root') );

// props 는 컴포넌트에서 컴포넌트로 전달하는 데이터를 의미 , 컴포넌트를 효율적으로 재사용할 수 있음
// props 에는 불리언값 숫자, 배열 같은 다양한 데이터를 담을수있음. 문자열인 경우를 제외하면 모두 중괄호로 값을 감싸야함
// props 는 매개변수같은 느낌으로 이해해주면 됨