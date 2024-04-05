import React from 'react'

// 조건부 렌더링 :
// -상황(조건)에 따라서 결과를 다르게 렌더링 할때 사용하는 방법
// -if, &&, ? : 를 사용하는 방법이 존재함


// *이 함수의 매개변수는 객체 형태이며, 이 객체는 number라는 속성을 가지고 있고 ,속성 이름과 변수 이름이 동일하므로 {number}와 같이 작성
function IfComponent({ number }: { number: number }) {
    // if 문을 이용한 조건부 렌더링
    // -함수 (컴포넌트 함수) 네부에서 return을 다르게 주는 방법

    // ex number가 양수면 nuber 값을 h1 이면서 빨간색으로 표시 해주려고 함
    if (number > 0) return (
        <h1 style={{ color: 'red' }}>{number}</h1>
    )
    // 음수이면 number 값을 h3 이면서 파란색으로 표시
    else if (number < 0) return (
        <h3 style={{ color: 'blue' }}>{number}</h3>
    )

    // 0이면 number 값을 h2 이면서 초록색으로 표시
    else return (
        <h2 style={{ color: 'green' }}>{number}</h2>
    )
}

function AndComponent({ number }: { number: number }) {
    // && 연산자를 이용한 조건부 렌더링
    // -JSX 내부(return 안)에서 상황(조건)에 따라 다른 렌더링여부를 결정 하고 싶을 때 사용

    // ex) 만약 number가 양수면 '양수'를 렌더링
    // if (number > 0) return '양수';
    // 양수가 아니면 '양수가 아님'을 렌더링
    // if (number < 0 ) '양수가 아님';     
    // if (!(number >0)) '양수가 아님';

    return (
        <h1>
            {number > 0 && '양수'}
            {number <= 0 && '양수가 아님'}
            {/* {number >0 || '양수가 아님'}   */}
        </h1>
    )
}

function ThreeTermComponent({ number }: { number: number }) {
    // 삼항 연산자 (? :)를 이용한 조건부 렌더링
    // JSX 내부(return 안)에서 상황(조건)에 따라서 서로 다른 렌더링을 하고 싶을 때 사용

    // ex) number가 양수면 '양수', 음수면 '음수', 0이면 '영'
    return (
        <h1>{number > 0 ? '양수' : number < 0 ? '음수' : '영'}</h1>
    )

}

export default function ConditionalRendering() {
    return (
        <>
            <IfComponent number={1} />
            <IfComponent number={-1} />
            <IfComponent number={0} />
            <AndComponent number={1} />
            <AndComponent number={0} />
            <ThreeTermComponent number={1} />
            <ThreeTermComponent number={0} />
            <ThreeTermComponent number={-1} />
        </>
    )
}
