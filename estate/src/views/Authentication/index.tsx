import React, { useState } from "react";
import './style.css';

// 타입으로 지정해서 밑에서 사용해준다.
type AuthPage = 'sign-in' | 'sign-up';

//* 두번째
// * Authentication 에서 선언한 클릭 핸들러를
// * 인터페이스로 받아서 회원가입 클릭을 사용함
// * 반환 값이 없는 타입 void

interface Props {
    onLinkClickHandler: () => void
}

//* 세번째
function SignIn({ onLinkClickHandler }: Props) {

    const onSignInButtonClickHandler = () => { };

    return (
        <div className="authentication-contents">
            <div className="authentication-input-container"></div>
            <div className="authentication-button-container">
                <div className="primary-button full-width" onClick={onSignInButtonClickHandler}>로그인</div>
                <div id="sign-up-link" className="text-link" onClick={onLinkClickHandler}>회원가입</div>
                <div className="short-divider"></div>
                <div className="authentication-sns-container"></div>
            </div>
        </div>
    )
}


function SignUp({ onLinkClickHandler }: Props) {

    const onSignInButtonClickHandler = () => {

    }

    return (
        <div className="authentication-contents">
            <div className="authentication-sns-container"></div>
            <div className="short-divider"></div>
            <div className="authentication-input-container"></div>
            <div className="authentication-button-container">
                <div className="primary-button full-width" onClick={onSignInButtonClickHandler}>회원가입</div>
                <div id="sign-up-link" className="text-link" onClick={onLinkClickHandler}>로그인</div>
            </div>
        </div>
    )

}


export default function Authentication() {

    const [page, setPage] = useState<AuthPage>('sign-in');

    //* 첫번째
    //* 회원가입
    // * 페이지 상태가 sign-in 이면 sign-up 으로 상태 변경

    const onLinkClickHandler = () => {
        if (page === 'sign-in') setPage('sign-up');
        else setPage('sign-up');
    };



    const AuthenticationContents = page === 'sign-in' ? <SignIn onLinkClickHandler={onLinkClickHandler} /> : <SignUp onLinkClickHandler={onLinkClickHandler} />

    return (
        <div id="authentication-wrapper">
            <div className="authentication-image-box"></div>
            <div className="authentication-box">
                <div className="authentication-container">
                    <div className="authentication-title h1">{'임대 주택 가격서비스'}
                    </div>
                    {AuthenticationContents}
                </div>
            </div>
        </div>
    )
}
