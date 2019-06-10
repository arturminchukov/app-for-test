import * as React from 'react';
import './WelcomePage.less';

export function WelcomePage({startGame}) {
    const handleClick = () => {
        startGame({});
    };

    return (
        <div className="WelcomePage">
            <div className="WelcomePage__container">
                <h1>Добро пожаловать на очередные Великие игры! Приготовьтесь и будьте внимательные, от вас потребуется
                    смекалка и знания.</h1>
                <button onClick={handleClick}>
                    Давайте же начнем!!!
                </button>
            </div>
        </div>
    );
}
