import * as React from 'react';
import { AnswerOption } from '../../components/AnswerOption/AnswerOption';
import './RewardPage.less';

const notificationIfExistBalance = 'Пожалуйста потратье все баллы. Еще есть призы на которые вам хватает баллов.';
const DELAY_PER_SYMBOL = 60;

export class RewardPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenPrises: [],
			balance: props.score,
			notification: '',
			isRemainPrises: this.isRemainRewards([], props.score)
		};

		this.handleClickReward = this.handleClickReward.bind(this);
		this.handleGetPrises = this.handleGetPrises.bind(this);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.state.notification) {
			if (this.notificationTimer) {
				clearTimeout(this.notificationTimer);
			}

			const {notification} = this.state;
			const notificationDelay = DELAY_PER_SYMBOL * notification.length > 2000 ? DELAY_PER_SYMBOL * notification.length : 2000;

			this.notificationTimer = setTimeout((context) => context.setState({notification: ''}), notificationDelay, this);
		}
	}

	handleClickReward(id) {
		const {chosenPrises, balance} = this.state;
		let newChosenPrises = [...chosenPrises];
		let newBalance = balance;
		let notification = '';

		if (chosenPrises.includes(id)) {
			newChosenPrises = chosenPrises.filter(prise => prise !== id);
			newBalance += this.props.test.rewards[id].price;
		} else {
			if (newBalance - this.props.test.rewards[id].price > 0) {
				newChosenPrises = [...chosenPrises, id];
				newBalance -= this.props.test.rewards[id].price;
			} else {
				notification = `Не хватает ${this.props.test.rewards[id].price - newBalance} очков для получения  приза "${this.props.test.rewards[id].name}"`;
			}
		}

		this.setState({
			chosenPrises: newChosenPrises,
			balance: newBalance,
			notification,
			isRemainPrises: this.isRemainRewards(newChosenPrises, newBalance)
		});
	}

	handleGetPrises() {
		const {chosenPrises, balance} = this.state;

		if (this.isRemainRewards(chosenPrises, balance)) {
			this.setState({notification: notificationIfExistBalance});
		} else {
			this.props.finishGame({prises: this.props.test.rewards.filter((el, id) => chosenPrises.includes(id))});
		}
	}

	isRemainRewards(chosenPrises, balance) {
		const remainPrises = this.props.test.rewards.filter((el, id) => !chosenPrises.includes(id));

		return remainPrises.some(el => el.price < balance);
	}

	render() {
		const {score, test: {rewards}} = this.props;
		const {balance, chosenPrises, notification, isRemainPrises} = this.state;

		return (
			<div className="RewardPage">
				<div className="RewardPage__about">
					<h1 className="RewardPage__header">Отлично вы набрали
						<b className="RewardPage__score"> ${score} </b>
						очков. И теперь вы можете их потратить на то, на что
						только пожелаете, ну и если их хватает</h1>
					<h1 className="RewardPage__balance">Ваш баланс: <b className="RewardPage__score">${balance}</b></h1>
				</div>
				<div className="RewardPage__rewards">
					{rewards.map((reward, id) =>
						<AnswerOption
							key={reward.price + reward.name}
							answer={reward.name}
							handleClick={() => this.handleClickReward(id)}
							answerLabel={reward.price + '$'}
							mode={chosenPrises.includes(id) ? 'selected-prise' : 'prise'}
						/>)}
				</div>
				<button onClick={this.handleGetPrises}
								className={`RewardPage__get-prises ${!isRemainPrises && 'RewardPage__get-prises_active'}`}>Получить
					призы!!!
				</button>
				<div
					className={`RewardPage__notification ${notification && 'RewardPage__notification_show'}`}>{notification}</div>
			</div>
		);
	}
}
