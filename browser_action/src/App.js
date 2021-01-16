import './App.css';
import React from 'react';
import Circle from 'react-circle'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            hour: 0,
            minute: 0,
            second: 0,
        }
        setTimeout(this._timer, 100);
    }

    render() {
        return (
            <div className="App">
                <Circle
                    animate={false}
                    size={80}
                    lineWidth={40}
                    progress={this.state.progress}
                    bgColor="rgb(150,10,0)"
                    progressColor="rgb(255,120,0)"
                    showPercentage={false}
                    roundedStroke={true}
                />
                <input name="hour" type="number" onChange={this._inputChange} />
                <input name="minute" type="number" onChange={this._inputChange} />
                <input name="second" type="number" onChange={this._inputChange} />
                <a onClick={this._click}>PRESS</a>
                <p>length : {localStorage.getItem("length")}</p>
                <p>{localStorage.getItem("progress")}</p>
            </div>
        );
    }

    _inputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name] : target.value
        });
    }

    _timer = () => {
        // background.js で算出された localStorage.getItem("progress") を取得するようにする
        this.setState({
            progress: localStorage.getItem("progress")
        });
        setTimeout(this._timer, 100)
    }

    _click = () => {
        // ここでは必要な情報を送る
        // - インターバルの長さ
        // - 開始時刻
        localStorage.setItem("length", this.state.hour*60*60+this.state.minute*60+this.state.second);
        localStorage.setItem("nowDate", (new Date()).getTime());
    }
}

export default App;
