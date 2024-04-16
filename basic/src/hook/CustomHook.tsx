import React, { useState } from 'react'

// Custom hook
// - 리액트의 훅 함수는 함수형 컴포넌트의 코드 블럭에서만 호출 가능
// -

export default function CustomHook() {

    // 상태 지정 (4개)  
    // 작성 방법 const DOM객체참조변수 = useRef<DOM요소타입>(초기값);
    // 게시판 페이지 별로 보여주는 작업
    // 페이지네이션 = 콘텐츠를 여러 페이지로 나누어 다음 또는 이전 페이지로 이동하거나 특정 페이지로 이동할 수 있는 요소
    // 매번 똑같은 작업이 아닌 , 여러개 작업할 때 사용

    // 총 페이지수 22개 =
    // totalPage =pageCount / 5
    // if(pageCount %5 !== 0) totalPageCount ++ ;
    // totalPageCount= Math.floor((pageCount -1) / 5)   // Math.floor 은 반올림 버리는 것
    // 107개 게시물
    // 한 페이지 게시물 5개씩 보여줌
    // 페이지네이션 작업은 한 섹션당 10개
    // 총 섹션수 3개
    // totalPageCount = Math.floor((bordCount -1 / 5)) + 1   // 한페이지당 보여주려는 게시물의 수
    // totleSectionCount =  Math.floor((bordCount -1) / 5* 10) + 1 // 한 세션에 보여주고 싶은 게시물의 수

    // [a0,a1,a2,a3,a4,a5,a6,...a107] 107개
    // 1= [a0 ~ a4]
    // 2= [a5 ~ a9]
    // 3= [a10 ~ a14]
    // 21 = [a100 ~ a104]
    // 22 = [a105, a106]

    // currentPageStart = 5* (page - 1)
    // currentPageEnd = 5* page-1

    //viewList= [];
    // for (currentPageStart ; index <= currentPageEnd ; ++ )
    // if (index >= bordList.length)  break;
    //  boardList.push(boadList[index])



    const [page, setPage] = useState<number>(1);
    const [section, setSection] = useState<number>(1);
    const [bordList, setBordList] = useState<any[]>([]);
    const [viewList, setViewList] = useState<any[]>([]);

    // 화살표 함수 지정
    const setNextPage = () => {

    }

    const setPreviousPage = () => {

    }

    const setNextSection = () => {

    }

    const setPreviousSection = () => {

    }


    return <div>CustomHook</div>
}
