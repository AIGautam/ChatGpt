import React from 'react';
import "./ChatSection.css";
import Darkmode from '../Darkmode/Darkmode';
import { FiSend } from "react-icons/fi";

function ChatSection() {
    return (
        <div className="chatsection">
            <div className="topsection">
                <div className="headings">
                    <span>HELLO GAUTAM</span>
                    <span>I'm Your Own Assistant</span>
                    <span>What can I help you...?</span>
                </div>
            </div>
            <div className="bottomsection">
                <input type="text" placeholder='Enter a prompt' />
                <button id='sentbtn'><FiSend />
                </button>
                <Darkmode/>
            </div>
        </div>
    );
}

export default ChatSection;
