import React from 'react'

// Properties (속성)
// - 부모컴포넌트 (호출부) 에서 자식컴포넌트로 데이터를 전달하기 위한 *객체*
// - 부모 컴포넌트에서 HTML 과 동일한 방식 (속성명 =데이터)로 전달
// - 자식 컴포넌트에서는 JS의 매개변수 방식으로 받음
// - 전달할 수 있는 데이터는 JS로 표현할 수 있는 모든 형태
// - 컴포넌트가 리렌더링되는 기준
// - Properties 부모 요소 에서 자식 요소로 데이터 전송 가능하나 , 자식요소에서 부모 요소로 데이터 전송은 불가능
interface Props {
    title: string;
    content: string;
    nickName?: string; // 선택형으로 바꾸면 꼭 사용하지 않아도 된다를 표현함
}

function Child({title, content ,nickName ="비공개"}: Props) {

    // 위에서 인터페이스로 선언해서 props값을 가지고 있게 됨
    // props = {
    //     title: '제목1'
    //     content: '내용1'
    // }

    // 타이틀과 컨텐츠만 div에 적기 위한 작업
    // const title = props.title;
    // const content = props.content;

    // 가장 좋은 방법 
    // const {title, content} = props; // 디스트럭쳐링 (객체) : props = title, content 다

    return (
        <div>
            <h1>{title}</h1>
            <h4>{nickName}</h4>
            <p>{content}</p>
        </div>
    )
}

export default function Properties() {
    return (
    <>
            <Child title = "제목1" content="내용1" nickName='로제'/>
            <Child title = "국제인구 이동" content="보도자료" />
            <Child title = "오늘 뭘 먹을까" content="글쎄.." />
    </>
    )
}
