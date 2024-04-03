import React from 'react'

// * 여기서만 쓰이는 용도라면 이쪽에 작성해도 됨 
// export function Sample () {
//     return(
//         <h2>Sample Component</h2>
//     );
// }

export default function Component() {
    // 함수형 컴포넌트의 return
    // - 해당 컴포넌트가 렌더링할 요소를 지정
    // - html 처럼 보이지만 html이 아님
    // *- 여러가지 자바스크립트 * 연산자 * 를 사용할 수 있음
    // *- 반드시 하나의 요소만 반환이 가능 (0개 x , 2개 이상 x)
    // *- 두개를 반환하고자 할때는 div로 묶어주면 가능하다.
    // *- 하나의 컴포넌트가 다수의 요소를 반환하고자 하면 최상단에 해당 요소를 묶어주는 부모 요소를 포함해야 함
    // *- 부모 요소로 묶을 때 <> </> 빈태그를 이용하여 의미없는 태그를 생성할 수 있음

    // *- 반드시 return 바로 뒤에 반환 요소가 있어야함 . ()를 없앨시 <> 부분이 들어와도 됨
    return (
        <>
            <div>Component</div>
            <div>Component</div>
        </>
    )

    
}

function JsxComponent(){

    //JSX (TSX)의 규칙
    // 1. 반드시 하나의 요소를 반환(<div>요소 혹은 <> 요소)
    // 2. 모든 태그는 닫기
    // 3. 속성들을 jsx로 지정되어 있는 이름으로 사용해야함 (lowerCamelCase)
    return(
        <>
            <h1> 첫번째 페이지입니다.</h1>
            <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/280px-Golde33443.JPG' className='image-box' />
        </div>
        </>
    )
}
