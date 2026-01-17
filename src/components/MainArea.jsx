import { useState } from 'react';
import quizData from '../assets/questions'
import Questions from './Questions'

export default function MainArea() {
    const [QuestNum, SetQuestNum] = useState(1)

    function newNum(){
        SetQuestNum(QuestNum => QuestNum + 1)
    }

    const FullQuestion = quizData.map((item) => {
        return(
            <Questions />
            // key={item.id}
            // {...item}
            // />
        )
    })

    return(
<div className="container">
    <h1>JavaScript Quiz</h1>

    <div className="quiz-container" id="quiz">
      <div className="progress" id="progress">Question {QuestNum} of 5</div>

      <div id="question">Question text will appear here</div>

      <div className="answers" id="answers">
        <Questions />
      </div>

      <button type='submit' id="next-btn">Next Question</button>
    </div>

    <div className="score-container" id="score-container">
      <h2>Quiz Complete! 🎉</h2>
      <p id="final-score">Your score: 0 / 5</p>
      <button id="restart-btn">Restart Quiz</button>
    </div>
  </div>
    )
}

