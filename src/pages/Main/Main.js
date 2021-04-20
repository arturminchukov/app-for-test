import * as React from 'react';
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
        score += key ? this.props.test.questions[currentQuestion].score : 0;

        if(currentQuestion === this.props.test.questions.length - 1){
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
                    question={this.props.test.questions[currentQuestion].question}
                    answers={this.props.test.questions[currentQuestion].answers}
                    handleAnswer={this.handleClickAnswer}
                    rightAnswer={this.props.test.questions[currentQuestion].right}
                />
            </div>
        );
    }
}
