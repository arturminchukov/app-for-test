import * as React from 'react';
import test from '../../tests/father-birthday-test';
import {Question} from '../../components/Question/Question';
import './Main.less';

const {questions} = test;

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickAnswer = this.handleClickAnswer.bind(this);
        this.state = {
            currentQuestion: 0,
            score: 0
        }
    }

    handleClickAnswer(key) {
        const {currentQuestion} = this.state;
        let score = this.state.score;
        score += key ? questions[currentQuestion].score : 0;

        if(currentQuestion === questions.length - 1){
            this.props.finishMainPage({page: 'Main', score});
            console.log(score);
        } else {
            this.setState({
                currentQuestion: currentQuestion + 1,
                score,
            })
        }
    }

    render() {
        const {currentQuestion} = this.state;

        return (
            <div className="Main">
                <Question
                    question={questions[currentQuestion].question}
                    answers={questions[currentQuestion].answers}
                    handleAnswer={this.handleClickAnswer}
                    rightAnswer={questions[currentQuestion].right}
                />
            </div>
        );
    }
}
