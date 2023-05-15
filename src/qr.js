import React from "react";
import './qr.css'
import QR from './image-qr-code.png';

const qrCode = () => {
    return (
        <div className="first-back">
            <div className="sec-back">
                <img src={QR} alt="QR_code" className="image"/>
                <p className="para">Improve your front-end skills by building projects</p>
                <p className="para-1">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}

export default qrCode;