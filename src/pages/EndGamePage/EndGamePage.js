import * as React from 'react';
import './EndGamePage.less';

export function EndGamePage({prises}) {
    return (
        <div className="EndGamePage">
            <h1 className="EndGamePage__header"> Спасибо, что приняли участие в нашей игре, вот список ваших призов!!!</h1>
            <div className="EndGamePage__prises-list">
                {prises.map(({name}) => <div className="EndGamePage__prise">{name}!!!</div>)}
            </div>
        </div>
    )
}
