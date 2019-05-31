import React, {useState} from 'react';
import {AnswerOption} from '../AnswerOption/AnswerOption';
import './Question.less';

export function Question({question, answers, handleAnswer, rightAnswer}) {
    const answersKeys = Object.keys(answers);
    const [userAnswer, setUserAnswer] = useState(false);
    const [isShowRightAnswer, setIsShowRightAnswer] = useState(false);

    const handleClick = key => () => {
        if(userAnswer){
            return;
        }

        setUserAnswer(key);

        setTimeout(() => {
            setIsShowRightAnswer(true)
        }, 2000);

        setTimeout(() => {
            handleAnswer(key===rightAnswer);
            setIsShowRightAnswer(false);
            setUserAnswer(false);
        }, 4000);
    };

    let mode = null;

    if(userAnswer && !isShowRightAnswer){
        mode = 'chosen';
    } else if (isShowRightAnswer && userAnswer===rightAnswer){
        mode = 'correct'
    } else {
        mode = 'incorrect'
    }

    return (
        <div className="Question">
            <div className="Question__question-text">
                {question}
            </div>
            <div className={`Question__answers Question__answers-${answersKeys.length}`}>
                {answersKeys.map(answerKey =>
                    <AnswerOption
                        answer={answers[answerKey]}
                        answerKey={answerKey}
                        handleClick={handleClick}
                        key={answerKey}
                        mode={answerKey === userAnswer ? mode : null}
                    />)}
            </div>
        </div>
    );
}
