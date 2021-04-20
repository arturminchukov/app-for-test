import * as React from 'react';
import './RewardPage.less';

const POINT_TO_WIN = 7;

export class RewardPageWithPassphrase extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notification: '',
			isSuccessfullyComplete: props.score >= POINT_TO_WIN,
		};
	}

	render() {
		const {test} = this.props;
		const {isSuccessfullyComplete} = this.state;

		return (
			<div className="RewardPage">
				<div className="RewardPage__about">
					{isSuccessfullyComplete ?
						<h1 className="RewardPage__header">Отлично, ваше кодовое слово
							<b className="RewardPage__score"> {test.rewards[0].name} </b>
							<br/>
							Запомните, оно вам понадобится чтобы получить подарок =)
							</h1>

						: <h1 className="RewardPage__header">К сожалению, вы не прошли тест и не получили кодовое слово, попробуйте
							еще раз.</h1>
					}
				</div>
			</div>
		);
	}
}
