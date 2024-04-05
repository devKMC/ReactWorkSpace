import React from 'react'




interface Props {
    label: String;
    buttontitle?: String;
    type: 'text' | 'password';
    placeholder: string;

}

export default function InputBox({ label, type, placeholder, buttontitle }: Props) {
    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input
                    className="input"
                    type={type}
                    placeholder={placeholder}
                />
                <div className="input-disable-button">
                    {buttontitle}
                </div>
            </div>
            <div className="input-message"></div>
        </div>
    );
}