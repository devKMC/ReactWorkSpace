import React from 'react'




interface Props {
    label : String;
    buttontitle: String;
    type : 'text' | 'password';
    placeholder : string;
}


export default function InputBox({label,buttontitle,type,placeholder}:Props) {

    return (
        <div className="input-box">
        <div className="input-label label">{label}</div>
        <div className="input-content-box">
            <input id="email" className="input" type={type} placeholder={placeholder} />
            <div id="check-email-button" className="input-disable-button">{buttontitle}</div>
        </div>
        <div id="email-message" className="input-message"></div>
        </div>
    )
}
