import React, { useContext } from 'react';
import "./ChatSection.css";
import Darkmode from '../Darkmode/Darkmode';
import { FiSend } from "react-icons/fi";
import { dataContext } from '../../context/UserContext';
import user from "../../assets/user.png";
import ai from "../../assets/ai.png";


function ChatSection() {
    let { sent, input, setInput, showResult, resultData, recentPrompt, loading } = useContext(dataContext)
    return (
        <div className="chatsection">
            <div className="topsection">
                {!showResult ? <div className="headings">
                    <span>HELLO GAUTAM,</span>
                    <span>I'm Your Own Assistant</span>
                    <span>What can I help you...?</span>
                </div> : <div className='result'>
                    <div className="userbox">
                        <img src={user} alt="" width="60px" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="aibox">
                        <img src={ai} alt="" width="60px" />
                        {loading ? <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div> :
                            <p>{resultData}</p>}
                    </div>
                </div>}

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
