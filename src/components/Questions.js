import React, { useState } from "react";

const Selection = (props) => {
    const checkTrue = () => {
        const radioButtons = document.querySelectorAll(
            `input[name="${props.item.name}"]`
        );
        let selectedButton;
        radioButtons.forEach((button) => {
            if (button.checked) {
                selectedButton = button;
            }
        });

        // Check if the selected answer is correct
        if (selectedButton && selectedButton.value === "true") {
            console.log("You picked the right one");
            props.finalResults();
        } else {
            console.log("You picked the wrong one");
        }
    };

    return (
        <div className="selection-wrap">
            <div className="top-question-wrap">
                <h3>{props.item.question}</h3>
                <p>{props.item.id}/5</p>
            </div>
            <div className="answers-wrap">
                <div className="answer-block">
                    <label htmlFor={props.item.name}>
                        {props.item.answer[0].value}
                    </label>
                    <input
                        type="radio"
                        name={props.item.name}
                        id={props.item.name}
                        value={props.item.answer[0].correct}
                        onChange={checkTrue}
                    ></input>
                </div>
                <div className="answer-block">
                    <label htmlFor={props.item.name}>
                        {props.item.answer[1].value}
                    </label>
                    <input
                        type="radio"
                        name={props.item.name}
                        id={props.item.name}
                        value={props.item.answer[1].correct}
                        onChange={checkTrue}
                    ></input>
                </div>
                <div className="answer-block">
                    <label htmlFor={props.item.name}>
                        {props.item.answer[2].value}
                    </label>
                    <input
                        type="radio"
                        name={props.item.name}
                        id={props.item.name}
                        value={props.item.answer[2].correct}
                        onChange={checkTrue}
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default Selection;
