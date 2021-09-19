import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "./faq.css";

const Question = ({ title, info }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <article onClick={() => setExpanded(!expanded)} className="question">
            <header>
                <h4 className="question-title">{title}</h4>
                <button onClick={() => setExpanded(!expanded)} className="faq-btn" >
                    {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {expanded && <p>{info}</p>}
        </article>
    )
}

export default Question;