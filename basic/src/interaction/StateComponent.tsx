import React, { useState } from 'react'

// 상태 (status) :
// - 각각의 컴포넌트가 가지는 데이터
// - 컴포넌트의 렌더링 결과에 영향을 미침
// - 컴포넌트는 독립적인 상태를 가질 수 있음
// - 상태가 변경되면 컴포넌트가 리렌더링 됨

export default function StateComponent() {

    // status 선언 :
    // - useState 함수로 함수를 선언 할 수 있음
    // - const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값);      <- 디스트럭쳐링 작업

    // let count = 0 ; 타입은 number
    const [count, setCount] = useState<number>(0);
    const[total,setTotal] = useState<number>(0);
    // let [count] = useState<number>(0);
    const onCountAddHandler = () => {
        setCount(count + 1);
        
        // 상태변수는 반드시 상태변경함수로 변경해야 리렌더링 됨
        // count ++;  

        // 상태 변경 함수를 통해서 함수를 변경한다고 바로 작용되지 않음
        // 리렌더링 된 후 상태 변경 함수가 적용됨
        // 마지막 set으로 덮어씌어짐
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // console.log(count);

        // 상태변경 함수에 콜백 함수를 전달하면 해당 콜백 함수는 상태 변경 작업을 누적해서 함
        // 콜백함수 작업으로 여러번을 사용 가능 (누적)
        // setCount(count + 1);
        // setCount(count => count + 1);
        // setCount(count => count + 1);
        // setCount(count => count + 1);

        // 콜백함수 작업으로 여러번을 사용 가능하나 (마지막껄로 덮어씌어짐)
        // setCount(count => count + 1);
        // setCount(count => count + 1);
        // setCount(count => count + 1);
        // setCount(count + 1);

        // 정렬을 생각하면서 보관할 공간을 만든다
        // 변경된 상태를 사용하고 싶을 때 해결 방법, 임시 변수를 사용하여 간접사용
        // * 게시물 , 좋아요 바로 반영되지 않을 때

        // setCount(count + 1);
        // setTotal(total + count);

        // 해결책
        const tmp = count+ 1;
        setCount(tmp);
        setTotal(total + tmp); 



        

    }

    return (
        <>
            <button onClick={onCountAddHandler}>+</button>
            <h1>{count}</h1> 
            <h1>{total}</h1>
        </>
    );
}
