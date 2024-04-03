import React from 'react';
import './App.css';

// JSX / TSX :
// JSX (JavaSrcipt XML) / TSX (TypeScript XML)
// XML의 형태와 유사, DOM 트리를 생성하는 JS, TS 확장

// Component : 
// UI를 독립적인 부분으로 나눔으로 재사용을 가능하도록 함
// 각각의 요소별로 개별 상태와 로직을 가지고 있음
// 사용할 때는 HTML의 요소와 비슷하게 사용됨
// 컴포넌트를 정의할 땐 클래스형과 함수형이 존재
// 클래스형 컴포넌트는 하나의 컴포넌트를 클래스의 인스턴스로 인식
// 함수형 컴포넌트는 컴포넌트를 코드 기준으로 인식
// 최근에는 클래스형 컴포넌트보다 함수형 컴포넌트를 주로 사용

// 컴포넌트를 선언하는 방법
// 1.class component 


class ClassComponent extends React.Component{ // 위쪽에 react 임포트가 되어있기에 . 찍어서 사용
  render(): React.ReactNode {
      return (
        <h1>클래스형 컴포넌트</h1>
      );
  }

}

function App() {
  return (
    <div>
      <ClassComponent />
    </div>
  );
}

export default App;
