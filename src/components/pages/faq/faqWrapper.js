import React, { useState } from "react";
import { constants } from "../../../common/constants";
import SingleQuestion from "./questions";
import "./faq.css";

const Faq = () => {
    const [questions, setQuestions] = useState(constants.FAQ);

    return (
        <main>
            <div className="container">
                <h3>frequently asked questions</h3>
                <section className="info">
                    {questions.map(question => (
                        <SingleQuestion key={question.id} {...question} />
                    ))}
                </section>
            </div>
        </main>
    )
}

export default Faq;