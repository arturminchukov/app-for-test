import React from 'react';
import './App.less';
import {WelcomePage} from './pages/WelcomePage/WelcomePage';
import {Main} from './pages/Main/Main';
import {RewardPage} from './pages/RewardPage/RewardPage';
import {EndGamePage} from './pages/EndGamePage/EndGamePage';

const pages = {
    WelcomePage: WelcomePage,
    Main: Main,
    RewardPage: RewardPage,
    EndGamePage: EndGamePage
};

const pagesPriority = ['WelcomePage', 'Main', 'RewardPage', 'EndGamePage'];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pagePriority: 0,
            testState: {},
        };

        this.nextPage = this.nextPage.bind(this);
    }

    nextPage(payload) {
        this.setState(prevState => ({
            pagePriority: prevState.pagePriority + 1,
            testState: {
                ...prevState,
                ...payload
            }
        }));
    }

    render() {
        const {pagePriority, testState} = this.state;
        const pageKey = pagesPriority[pagePriority];
        const Page = pages[pageKey];
        let props = null;

        if (pageKey === 'WelcomePage') {
            props = {
                handleClick: this.nextPage
            }
        }

        if (pageKey === 'Main') {
            props = {
                finishMainPage: this.nextPage
            }
        }

        if (pageKey === 'RewardPage') {
            props = {
                score: testState.score,
                finishGame: this.nextPage
            }
        }

        if (pageKey === 'EndGamePage') {
            props = {
                prises: testState.prises
            }
        }

        return (
            <div className="App">
                <Page {...props} />
            </div>
        );
    };
}

export default App;
