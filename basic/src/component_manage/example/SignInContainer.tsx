


import React from 'react'
import './style.css';
import InputBox from './InputBox'

export default function SignInContainer() {
    return (
        <>
            <InputBox label='아이디' buttontitle='중복 확인' type='text' placeholder= '아이디를 입력하세요.' />

            <InputBox label='비밀번호' type ='password' placeholder='비밀번호를 입력하세요.'/>

            <InputBox label='비밀번호 확인' type ='password' placeholder='비밀번호를 입력하세요.'/>

            <InputBox label='이메일' type ='text' placeholder='이메일을 입력하세요.' buttontitle='이메일 인증'/>

            <InputBox label='비밀번호' type ='text' placeholder='인증번호 4자리를 입력하세요.' buttontitle='인증 확인'/>
        </>

    )
}

