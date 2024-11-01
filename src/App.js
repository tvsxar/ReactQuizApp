import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'React - is ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'Component - is ... ',
    variants: ['application', 'part of app or page', 'i don`t know'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'it`s just a HTML',
      'it`s a function',
      'it`s the same as HTML, but with the ability to execute JS-code',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{correct} correct answers of {questions.length}</h2>
      <a href='/'>
        <button>let`s try again</button>
      </a>
    </div>
  );
}

function Game({ question, onClickChoice, step }) {
  const percentage = Math.round(step / questions.length * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => <li onClick={() => onClickChoice(index)} key={item}>{item}</li>)}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  function onClickChoice(index) {
    setStep(step + 1);

    if(index == question.correct) setCorrect(correct + 1);
  }

  return (
    <div className="App">
      {
        step !== questions.length ? (
        <Game step={step} question={question} onClickChoice={onClickChoice} />
        ) : (
        <Result correct={correct} /> 
        )
      }
    </div>
  );
}

export default App;
