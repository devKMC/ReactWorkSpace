import React, { ChangeEvent, useState } from 'react'

// 상태 (status) :
// - 각각의 컴포넌트가 가지는 데이터
// - 컴포넌트의 렌더링 결과에 영향을 미침
// - 컴포넌트는 독립적인 상태를 가질 수 있음
// - 상태가 변경되면 컴포넌트가 리렌더링 됨

export default function StateComponent() {

    // status 선언 :
    // - useState 함수로 상태를 선언 할 수 있음
    // - const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값);      <- 디스트럭쳐링 작업
    // * 상태 변수 타입은 타입스크립트만 가지고 있음.

    // let count = 0 ; 타입은 number
    const [count, setCount] = useState<number>(0);

    // let total : number = 0;
    const [total, setTotal] = useState<number>(0);

    // let favorites: string[] = [];
    const [favorites, setfavorites] = useState<string[]>(['사과', '우유']);

    // input 관련 지정
    const [favorite, setFavorite] = useState<string>('');

    // let [count] = useState<number>(0);
    const onCountAddHandler = () => {
        setCount(count + 1);

        // 상태변수는 반드시 상태변경함수로 변경해야 리렌더링 됨
        // count ++;  (X)

        // 상태 변경 함수를 통해서 함수를 변경한다고 바로 작용되지 않음
        // 리렌더링 된 후 상태 변경 함수가 적용됨
        // 마지막 set으로 덮어씌어짐
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1); (39번 행의 결과로 덮어씌어짐)
        // console.log(count);

        // 상태변경 함수에 콜백 함수를 전달하면 해당 콜백 함수는 상태 변경 작업을 누적해서 함
        // 콜백함수 작업으로 여러번을 사용 가능 (누적)
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

        // 문제점
        // setCount(count + 1);
        // setTotal(total + count);

        // 해결책
        const tmp = count + 1;
        setCount(tmp);
        setTotal(total + tmp);


    };


    // input 값을 받아 오려고 할때 (event를 받아와서 바뀌는 이벤트 적용 ) <HTML 부분의 INPUT에 있는 작업이기에 >
    // Input 요소의 값을 가져오고자 할땐 onChange 이벤트의 .target.value로 가져옴
    const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // 가져온 .target.value 값을 상태에 지정
        setFavorite(event.target.value);
    };

    // 인풋 클릭 이벤트에 적용 (배열 리스트에 추가하는 작업)
    const onAddListHandler = () => {
        // 상태가 배열의 객체이면 각각에 대해 요소를 추가 , 변경이 일어나도 상태가 변경된 것으로 인식하지 않음 (실제 주소 변경 X)
        // 상태가 변경된 것으로 인식하고 싶으면 새로운 배열 혹은 객체를 생성하여 상태를 변경해야 함 (일반적으로 복사해서 변경)

        // * 첫번째 방법
        //     favorites.push(favorite);
        //     const newFavorites = favorites.map(item => item) // * 배열에 추가하는 방법 (주소를 바꿔주는 방법) 중요함 
        //     setfavorites(newFavorites);
        // * 두번째 방법
        // 스프레드 작업
        setfavorites([...favorites, favorite]);
        setFavorite('');
    }


    return (
        <>
            <button onClick={onCountAddHandler}>+</button>
            <h1>{count}</h1>
            <h1>{total}</h1>

            {/* 구분선 */}
            <hr></hr>

            {/* INPUT이 만약 상태를 변경한다면 value 로 그 상태를 지정해야 불일치가 발생하지 않음 */}
            <input onChange={onInputHandler} value={favorite} />
            <button onClick={onAddListHandler}>추가</button>
            <h4>{favorite}</h4>

            <ul>
                {/* 맵을 사용하여 반복 작업 */}
                {favorites.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    );

}
