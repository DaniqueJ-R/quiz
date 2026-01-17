import { useState } from "react"
import quizData from '../assets/questions'

    console.log(quizData)

export default function Questions (props) {

    console.log(props)
    const [ansLines, SetAnsLines] = useState([1, 2, 3, 4]) 
    console.log(ansLines)
    
    const EachAns = ansLines.answers;
    const ansList =  ansLines.map((answer) => {
        return(
            // console.log(answer)
            <li key={answer}>
                <button type="submit" className="answer-btn" name="answer" value={answer}>{answer}</button>
                {/* <button type="submit" className="answer-btn" name="answer" value={answer.id}>{answer}</button> */}
            </li>
        )
    })


    return(
        <>
        <p>Working?</p>
            {/* <p>{quizData.question}</p> */}
            <ul>
                {ansList}
                
            </ul>
        </>
    )
}

    // function nextQuest() {

    //   if (!document.querySelector('button').className.includes('disabled')){ //could this be simpler? took 26 min to complete
    //     alert('Please select an answer to move on!')
    //   } else {
    //     for (i; i < lquiz;) {
    //       i++
    //       console.log('question ran', i)
    //     if (i === lquiz){ // about 20 min to get this working 
    //     let scoreNum = document.getElementById('final-score')
    //     let Reset = document.getElementById('restart-btn')
    //     scoreContainer.classList.add('show')
    //     scoreNum.innerHTML = `Your score: ${score} / ${lquiz}`
    //     quizContainer.classList.add('hide')
    //     Reset.addEventListener('click', resetQuiz)
    //   }
      
    //       let quizQues = quizData[i].question;
    //       let quizStr = quizQues.toString();
    //       questionArea.innerHTML = quizStr;

    //       // answers area
    //       let ansNum = quizData[i].answers;
    //       let ansL = ansNum.length;
    //       let list = '<ul>';

    //       for (let j = 0; j < ansL; j++) {
    //         list += `<li><button class="answer-btn" name="answer" value="${j}">${ansNum[j]}</button></li>`;
    //       }
    //       list += '</ul>';


    //       answersArea.innerHTML = list;

    //                 if (i <= lquiz) {
    //         progress.innerHTML = `Question ${[i + 1]} of ${[lquiz]}`
    //       }

    //       let answerBtn = document.getElementsByClassName('answer-btn');
    //       newBtn = Array.from(answerBtn)
    //       newBtn.forEach(correctAns)
        
    //     break;
    //     }
    //   }

    // };

