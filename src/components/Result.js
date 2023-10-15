import React from "react";

import image from "../img/image1.png";

const Start = (props) => {
    return (
        <div
            className="start-wrap"
            style={{ display: props.slide === 0 ? "flex" : "none" }}
        >
            <h3>USA Trivia Challenge</h3>
            <img src={image}></img>
            <p>
                Welcome to the "USA Trivia Challenge"! Test your knowledge about
                the United States of America with this fun and informative quiz
            </p>
            <button onClick={props.changeDisplay}>Let's Go</button>
        </div>
    );
};

export default Start;
