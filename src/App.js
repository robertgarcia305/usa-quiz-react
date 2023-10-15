// import "./styles.css";
import "./index.css";

import Start from "./components/Start";
import Result from "./components/Result";
import Questions from "./components/Questions";
import React, { useState } from "react";

import data from "./data.js";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);

  console.log(rightAnswers);

  const changeDisplay = () => {
    if (currentSlide <= 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const resetRadioButtons = () => {
    const radioButtons = document.querySelectorAll("input[type=radio]");
    radioButtons.forEach((button) => {
      button.checked = false;
    });
  };

  const startOver = () => {
    setRightAnswers(0);
    resetRadioButtons();
    console.log(rightAnswers);
    console.log(`started over ${rightAnswers}`);
  };

  const finalResults = () => {
    // here's the issue
    setRightAnswers(rightAnswers + 1);
    console.log(rightAnswers);
  };

  const questions = data.map((item) => {
    return <Questions key={item.id} item={item} finalResults={finalResults} />;
  });

  return (
    <div className="App">
      <Start slide={currentSlide} changeDisplay={changeDisplay} />
      {/* <Questions
        slide={currentSlide}
        changeDisplay={changeDisplay}
        setRightAnswers={setRightAnswers}
      /> */}
      {/* questions */}
      <div
        className="questions-wrap"
        style={{ display: currentSlide === 1 ? "block" : "none" }}
      >
        <div>{questions}</div>
        <div className="q-button-wrap">
          <button
            style={{
              display: currentSlide === 1 ? "block" : "none"
            }}
            onClick={() => {
              changeDisplay();
              finalResults();
            }}
          >
            Let's see your results
          </button>
        </div>
      </div>
      {/* result */}
      <div
        className="result-wrap"
        style={{ display: currentSlide === 2 ? "flex" : "none" }}
      >
        <Result
          slide={currentSlide}
          changeDisplay={changeDisplay}
          result={rightAnswers}
          setRightAnswers={setRightAnswers}
          answers={rightAnswers}
        />
        <button
          style={{ display: currentSlide === 2 ? "block" : "none" }}
          onClick={() => {
            changeDisplay();
            startOver();
          }}
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default App;
