import * as React from 'react';
import test from '../../tests/father-birthday-test';
import {AnswerOption} from '../../components/AnswerOption/AnswerOption';

const {rewards} = test;
const notificationIfExistBalance = 'Пожалуйста потратье все баллы. Еще есть призы на которые вам хватает баллов.';

export class RewardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenPrises: [],
            balance: props.score,
            notification: ''
        };

        this.handleClickReward = this.handleClickReward.bind(this);
        this.handleGetPrises = this.handleGetPrises.bind(this);
    }

    handleClickReward(id) {
        return () => {
            const {chosenPrises, balance} = this.state;
            let newChosenPrises;
            let newBalance = balance;
            let notification = '';

            if (chosenPrises.includes(id)) {
                newChosenPrises = chosenPrises.filter(prise => prise !== id);
                newBalance += rewards[id].price;
            } else {
                newChosenPrises = [...chosenPrises, id];
                if(newBalance - rewards[id].price > 0 ){
                    newBalance-=rewards[id].price;
                } else {
                    notification = `У вас недостаточно очков для получения ${rewards[id].name}`;
                }
            }

            this.setState({
                chosenPrises: newChosenPrises,
                balance: newBalance,
                notification
            })
        }
    }

    handleGetPrises() {
        const {chosenPrises, balance} = this.state;
        const remainPrises = rewards.filter((el, id) => !chosenPrises.includes(id));

        if (remainPrises.some(el => el.price < balance)) {
            this.setState({
                notification: notificationIfExistBalance
            });

            setTimeout(callback => callback({notification: ''}), 2000, this.setState);
        } else {
            this.props.finishGame({prises:rewards.filter({prises: (el, id) => chosenPrises.includes(id)})});
        }
    }

    render() {
        const {score} = this.props;
        const {balance, chosenPrises, notification} = this.state;
        return (
            <div className="RewardPage">
                <div className="RewardPage__about">
                    <h1 className="RewardPage__header">Отлично вы набрали
                        <b className="RewardPage__score">${score}</b>
                        очков. И теперь вы можете их потратить на то, на что
                        только пожелаете, ну и если их хватает</h1>
                    <h1>У вас осталось <b>${balance}</b> очков</h1>
                </div>
                <div className="RewardPage__rewards">
                    {rewards.map((reward, id) =>
                        <AnswerOption
                            answerKey={reward.price}
                            answer={reward.name}
                            handleClick={this.handleClickReward}
                            id={id}
                            mode={chosenPrises.includes(id) ? 'selected-prise' : 'prise'}
                        />)}
                </div>
                <button onClick={this.handleGetPrises}>Получить призы!!!</button>
                <div
                    className={`RewardPage__notification ${notification && 'RewardPage__notification_show'}`}>{notification}</div>
            </div>
        );
    }
}
