import * as React from 'react';
import './AnswerOption.less';

export function AnswerOption({answer, handleClick, mode, answerLabel}) {
    const extraClass = mode ? `AnswerOption__button_${mode}` : '';
    return (
        <div className="AnswerOption">
            <span className="AnswerOption__label">{answerLabel}</span>
            <button
                className={`AnswerOption__button ${extraClass}`}
                onClick={handleClick}
            >
                {answer}
            </button>
        </div>
    );
}
