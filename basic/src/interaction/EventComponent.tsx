import React, { KeyboardEvent, MouseEvent, useState } from 'react'

// 이벤트 처리:
// -웹 페이지 (컴포넌트)가 사용자와의 상호작용을 받아들여 그것에 대한 처리를 하는 것


// HTML이 아닌 자바 스크립트로 이루어진 XML 
// - React 컴포넌트에서는 addEventListener를 사용하지 않고 인라인 형식의 on 이벤트 속성을 사용
// - on 이벤트 속성은 lowerCamelCase를 따름
// - on 이벤트에 콜백함수를 전달
export default function EventComponent() {


    const onClickHandler = () => {
        alert('클릭!');
    };

    // onClick : 클릭이 발생했을 때
    // onChange : input 요소에서 값이 변경됬을 때 
    // onKeyDown : input 요소에서 키보드 입력이 발생했을 때
    // 빨간줄이 뜨면 컨트롤 스페이스로 임포트 해준다. (리액트로)

    // 각 이벤트의 콜백 함수는 이벤트 객체를 매개변수로 받을 수 있음
    // TypeScript는 이벤트 객체의 타입은 특정 Event <이벤트가 발생한 요소>
    const onKeyDownHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onClickHandler(); // 조건이 만족하지 않으면 온클릭 핸들러를 호출하는 것
    }

    let count= 0;
    // 이렇게만 하면 동작을 안하기에 () 안을 작성해줘야함 
    // const onCountAddHandler = () => {
        const onCountAddHandler = (event:MouseEvent<HTMLButtonElement>) => {
        count++;
        console.log(count);
    }

    return (
        <>
            <input onKeyDown={onKeyDownHandler} />
            <button onClick={onClickHandler}>Click</button>
            <button onClick={onCountAddHandler}>+</button>
            {/* 변수를 적을땐 중괄호 안에 넣어줘야함 */}
            <h1>{count}</h1> 
            
        </>
    )
}

