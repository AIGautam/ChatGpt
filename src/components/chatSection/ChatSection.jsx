import React, { useContext } from 'react';
import "./ChatSection.css";
import Darkmode from '../Darkmode/Darkmode';
import { FiSend } from "react-icons/fi";
import { dataContext } from '../../context/UserContext';

function ChatSection() {
    let { sent, input, setInput } = useContext(dataContext)
    return (
        <div className="chatsection">
            <div className="topsection">
                <div className="headings">
                    <span>HELLO GAUTAM,</span>
                    <span>I'm Your Own Assistant</span>
                    <span>What can I help you...?</span>
                </div>
            </div>
            <div className="bottomsection">
                <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter a prompt' value={input} />
                <button id='sentbtn' onClick={() => {
                    sent(input)
                }}><FiSend />
                </button>
                <Darkmode />
            </div>
        </div>
    );
}

export default ChatSection;
