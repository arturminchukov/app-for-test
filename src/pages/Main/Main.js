import * as React from 'react';
import test from '../../tests/father-birthday-test';
import {Question} from '../../components/Question/Question';
import './Main.less';

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
        score += key ? test[currentQuestion].score : 0;

        if(currentQuestion === test.length - 1){
            // finishGame();
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
                    question={test[currentQuestion].question}
                    answers={test[currentQuestion].answers}
                    handleAnswer={this.handleClickAnswer}
                    rightAnswer={test[currentQuestion].right}
                />
            </div>
        );
    }
}
