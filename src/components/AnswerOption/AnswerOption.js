import * as React from 'react';
import './AnswerOption.less';

export function AnswerOption({answer, answerKey, handleClick, mode}){
    const extraClass = mode ? `AnswerOption__button_${mode}` : '';
    return <button className={`AnswerOption__button ${extraClass}`} onClick={handleClick(answerKey)}>{answer}</button>;
}
