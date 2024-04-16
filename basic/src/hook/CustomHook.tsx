import React, { useEffect, useState } from 'react'

// Custom hook
// - 리액트의 훅 함수는 함수형 컴포넌트의 코드 블럭에서만 호출 가능
// -

export default function CustomHook() {

    // 상태 지정 (4개)  
    // 작성 방법 const DOM객체참조변수 = useRef<DOM요소타입>(초기값);
    // 게시판 페이지 별로 보여주는 작업
    // 페이지네이션 = 콘텐츠를 여러 페이지로 나누어 다음 또는 이전 페이지로 이동하거나 특정 페이지로 이동할 수 있는 요소
    // 매번 똑같은 작업이 아닌 , 여러개 작업할 때 사용

    // 총 페이지수 22개 
    // 한 페이지 게시물 5개씩 보여줌
    // totalPage =pageCount / 5
    // if(pageCount %5 !== 0) totalPageCount ++ ;
    // totalPageCount= Math.floor((pageCount -1) / 5)   // Math.floor 은 반올림 버리는 것
    // 107개 게시물
    // 페이지네이션(페이지) 작업은 한 섹션당 10개
    // 페이지네이션의 총 섹션수 3개 (10개씩 보여주기에)
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

    // 1    1   10  10n -9
    // 2   11   20 
    // 3   21   30 
    // 4   31   40

    // currentSectionStart = 10 * section -9
    // currentSectionEnd = 10 * section

    // viewPageList = []
    // for (index = currentSectionStart; index <= currentSectionEnd; ++)
    // if (totalPage< index) break;
    // viewPageList.push(index)


    const [page, setPage] = useState<number>(1);
    const [section, setSection] = useState<number>(1);
    const [boardList, setBordList] = useState<string[]>([]);
    const [viewList, setViewList] = useState<string[]>([]);
    const [viewPageList, setViewPageList] = useState<number[]>([]);

    const COUNT_PER_PAGE = 5;
    const COUNT_PER_SECTION = 10;

    let totalPageCount = 0;
    let totalSectionCount = 0;

    // 화살표 함수 지정
    const setNextPage = () => {

    }

    const setPreviousPage = () => {

    }

    const setNextSection = () => {

    }

    const setPreviousSection = () => {

    }

    // 마운트 시에만 실행 (마운트 업데이트, 업마운트)
    useEffect(() => {
        // 복사해서 넣어두지 않으면 빈 배열을 받게 됨
        const boardList = BOARD_LIST;
        // setBordList에 BOARD_LIST 받기
        setBordList(BOARD_LIST);
        // 총 페이지수 22개 
        // 의미있는 리터럴 (값) 5 하고 10을 상수로 위에서 지정해야 함
        totalPageCount = Math.floor((boardList.length - 1) / 5) + 1;
        totalSectionCount = Math.floor((boardList.length - 1) / 5 * 10) + 1;

        // 한페이지에 보여줄 것
        const viewList = [];
        // 몇번부터 시작해서
        const currentPageStart = COUNT_PER_PAGE * (page - 1);
        // 몇번까지 보여줄 것
        const currentPageEnd = COUNT_PER_SECTION * page - 1;

        // 반복문을 사용하여 푸시
        for (let index = currentPageStart; index < currentPageEnd; index++) {
            if (index >= boardList.length) break;
            viewList.push(boardList[index]);
        }

        setViewList(viewList);

        const viewPageList = [];
        const currentSectionStart = COUNT_PER_SECTION * section - (COUNT_PER_SECTION - 1);
        const currentSectionEnd = COUNT_PER_SECTION * section;

        for (let page = currentSectionStart; page <= currentSectionEnd; page++) {
            if (page >= totalPageCount) break
            viewPageList.push(page);
        }

        setViewPageList(viewPageList);



        // 마운트 시에만 동작할 것이다라는 빈배열 
    }, []);


    return (
        <div>
            {viewList.map((item, index) => <h3 key={index}>{item}</h3>)}
            <div>
                <span style={{ display: 'inline-block', margin: '4px' }}>이전</span>
                {viewPageList.map((item, index) => <span key={index} style={{ display: 'inline-block', margin: '4px', fontWeight: item === page ? 900 : 400 }}>{item}</span>)}
                <span style={{ display: 'inline-block', margin: '4px' }}>이후</span>
            </div>
        </div>
    );
}

    // 마운트시에만 보드 리스트(위)에 밑에있는 보드리스트(밑) 넣을 것
    const BOARD_LIST = [
        "게시물1",
        "게시물2",
        "게시물3",
        "게시물4",
        "게시물5",
        "게시물6",
        "게시물7",
        "게시물8",
        "게시물9",
        "게시물10",
        "게시물11",
        "게시물12",
        "게시물13",
        "게시물14",
        "게시물15",
        "게시물16",
        "게시물17",
        "게시물18",
        "게시물19",
        "게시물20",
        "게시물21",
        "게시물22",
        "게시물23",
        "게시물24",
        "게시물25",
        "게시물26",
        "게시물27",
        "게시물28",
        "게시물29",
        "게시물30",
        "게시물31",
        "게시물32",
        "게시물33",
        "게시물34"

    ]
