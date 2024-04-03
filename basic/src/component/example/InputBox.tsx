// IdInputBox, PasswordInputbox 함수형 컴포넌트 생성
// 각각의 컴포넌트는 모두 export 가능하도록 내보내기

import React from 'react'

export  function IdInputBox() {
    return (
        <div className="input-box">
                            <div className="input-label label">아이디</div>
                            <div className="input-content-box">
                                <input className="input" type="text" placeholder="아이디를 입력해주세요."/>
                            </div>
                            <div className="input-message"></div>
                        </div>
    )
}


export  function PasswordInputbox() {
    return (
        <div className="input-box">
                            <div className="input-label label">비밀번호</div>
                            <div className="input-content-box">
                                <input className="input" type="password" placeholder="비밀번호를 입력해주세요."/>
                            </div>
                            <div id = "sign-in-message" className="input-message error"></div>
                        </div>
    )
}
