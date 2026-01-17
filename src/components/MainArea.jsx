import Questions from './Questions'

export default function MainArea() {
    return(
<div className="container">
    <h1>JavaScript Quiz</h1>

    <div className="quiz-container" id="quiz">
      <div className="progress" id="progress">Question 1 of 5</div>

      <div id="question">Question text will appear here</div>

      <div className="answers" id="answers">
        <Questions />
      </div>

      <button id="next-btn">Next Question</button>
    </div>

    <div className="score-container" id="score-container">
      <h2>Quiz Complete! 🎉</h2>
      <p id="final-score">Your score: 0 / 5</p>
      <button id="restart-btn">Restart Quiz</button>
    </div>
  </div>
    )
}