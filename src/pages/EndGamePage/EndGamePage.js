import * as React from 'react';

export function EndGamePage({prises}) {
    return (
        <div className="EndGamePage">
            <h1> Спасибо, что приняли участие в нашей игре, вот список ваших призов!!!</h1>
            <div className="EndGamePage__prises-list">
                {prises.map(({name}) => <div className="EndGamePage">{name}</div>)}
            </div>
        </div>
    )
}
