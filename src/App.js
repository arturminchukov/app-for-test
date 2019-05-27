import React from 'react';
import './App.less';
import {WelcomePage} from './pages/WelcomePage/WelcomePage';
import {Main} from './pages/Main/Main';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isWelcomePage: true,
        };

        this.handleClickWelcomePage = this.handleClickWelcomePage.bind(this);
    }

    handleClickWelcomePage() {
        this.setState({
            isWelcomePage: false
        })
    }

    render() {
        const {isWelcomePage} = this.state;

        if(isWelcomePage){
            return (
                <div className="App">
                    <WelcomePage handleClick={this.handleClickWelcomePage}/>
                </div>
            )
        }

        return (
            <div className="App">
                <Main/>
            </div>
        )
    };
}

export default App;
