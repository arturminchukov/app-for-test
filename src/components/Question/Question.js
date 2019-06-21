import React, {useState, useEffect} from 'react';
import {AnswerOption} from '../AnswerOption/AnswerOption';
import './Question.less';


export class Question extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            userAnswer: false,
            time: 60,
            isShowRightAnswer: false
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            if(this.state.time === 0){
                this.props.handleAnswer(false);
            } else {
                this.setState({
                    time: this.state.time - 1
                })
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleClick = (key) => {
        if(this.state.userAnswer){
            return;
        }

        this.setState({
            userAnswer: key
        });

        setTimeout(() => {
            this.setState({
                isShowRightAnswer: true,
            });
        }, 2000);

        setTimeout(() => {
            this.setState({
                isShowRightAnswer:false,
                userAnswer: false
            });
            this.props.handleAnswer(key===this.props.rightAnswer);
        }, 4000);
    };

    render () {
        console.log(this.state);
        const {isShowRightAnswer, userAnswer, time} = this.state;
        const {question, answers, rightAnswer} = this.props;
        let mode = null;
        const answersKeys = Object.keys(this.props.answers);

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
                <h1> {time}</h1>
                <div className={`Question__answers Question__answers-${answersKeys.length}`}>
                    {answersKeys.map(answerKey =>
                        <AnswerOption
                            answer={answers[answerKey]}
                            handleClick={() => this.handleClick(answerKey)}
                            key={answerKey}
                            mode={answerKey === userAnswer ? mode : null}
                        />)}
                </div>
            </div>
        );
    }
}
