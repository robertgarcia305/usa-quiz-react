import React, { useState } from "react";

import bomb from "../img/bomb.png";

const Result = (props) => {
    return (
        <div style={{ display: props.slide === 2 ? "block" : "none" }}>
            {props.answers === 6 && (
                <p>Great you got all of the answers right</p>
            )}
            {props.answers === 1 && (
                <p>Please try again you didn't get any answer right</p>
            )}
            {props.answers < 4 && props.answers > 2 && (
                <p>Almost there, go ahead and try again (:</p>
            )}
            <h3>This is your result:</h3>
            <img alt="bomb" src={bomb}></img>
            <div>You got {props.result - 1} answers right</div>
        </div>
    );
};

export default Result;
