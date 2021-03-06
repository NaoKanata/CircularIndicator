import "./App.css";
import React from 'react';
import Circle from 'react-circle'
import {
    Button,
    TextField
} from '@material-ui/core';
import Logo from './Logo.png';
import MenuItem from '@material-ui/core/MenuItem';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import GitHubIcon from '@material-ui/icons/GitHub';
import PostAddIcon from '@material-ui/icons/PostAdd';

const currencies = [
    {
        value: '10',
        label: '10 Minutes',
    },
    {
        value: '15',
        label: '15 Minutes',
    },
    {
        value: '25',
        label: '25 Minutes',
    },
    {
        value: '30',
        label: '30 Minutes',
    },
    {
        value: '45',
        label: '45 Minutes',
    },
    {
        value: '1h',
        label: '1 hour',
    },
];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            hour: 0,
            minute: 25,
            second: 0,
            templete: '25',
        }
        setTimeout(this._timer, 16);
    }

    _footer = () => {
        return (
            <>
                <div class="OtherButtonContainer">
                    <div class="OtherButton">
                        <Button variant="outlined" color="primary" onClick={this._clickAddPage}>
                            <PostAddIcon />
                        </Button>
                    </div>
                    <div class="OtherButton">
                        <Button variant="outlined" color="primary" onClick={this._clickGithub}>
                            <GitHubIcon />
                        </Button>
                    </div>
                </div>
                <p>Copyright © 2021 naok All Rights Reserved.</p>
            </>
        );
    }

    _handleChange = (event) => {
        this.setState({ templete: event.target.value });
        switch (event.target.value)
        {
            case '10':
                this.setState({
                    hour: 0,
                    minute: 10,
                    second: 0,
                });
            break;
            case '15':
                this.setState({
                    hour: 0,
                    minute: 15,
                    second: 0,
                });
            break;
            case '25':
                this.setState({
                    hour: 0,
                    minute: 25,
                    second: 0,
                });
            break;
            case '30':
                this.setState({
                    hour: 0,
                    minute: 30,
                    second: 0,
                });
            break;
            case '45':
                this.setState({
                    hour: 0,
                    minute: 45,
                    second: 0,
                });
            break;
            case '1h':
                this.setState({
                    hour: 1,
                    minute: 0,
                    second: 0,
                });
            break;
        }
    };

    _isRunning = () => {
        if (localStorage.getItem("isRunning") != "false") {
            return (
                <div class="hgoehoge">
                    <Button variant="contained" color="primary" onClick={this._stopClick}>
                        <StopIcon />
                    </Button>
                    {this._footer()}
                </div>
            );
        }
        else {
            return (
                <>
                    <div class="inputContainer">
                        <div class="inputItem">
                            <TextField
                                name="hour"
                                id="filled-basic"
                                label="Hour"
                                variant="filled"
                                type="number"
                                fullWidth="true"
                                value={this.state.hour}
                                onChange={this._inputChange}
                            />
                        </div>
                        <div class="inputItem">
                            <TextField
                                name="minute"
                                id="filled-basic"
                                label="Minute"
                                variant="filled"
                                type="number"
                                fullWidth="true"
                                value={this.state.minute}
                                onChange={this._inputChange}
                            />
                        </div>
                        <div class="inputItem">
                            <TextField
                                name="second"
                                id="filled-basic"
                                label="Second"
                                variant="filled"
                                type="number"
                                fullWidth="true"
                                value={this.state.second}
                                onChange={this._inputChange}
                            />
                        </div>
                    </div>
                    <Button variant="contained" color="primary" onClick={this._click}>
                        <PlayArrowIcon />
                    </Button>
                    <div class="TempleteField">
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Templete"
                            value={this.state.templete}
                            helperText="Please select a templete."
                            onChange={this._handleChange}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    {this._footer()}
                </>
            );
        }
    }

    render() {
        return (
            <div class="App">
                <div>
                    <img src={Logo} alt="Circular Indicator" width="82px"/>
                </div>
                <Circle
                    animate={false}
                    size={200}
                    lineWidth={40}
                    progress={this.state.progress}
                    bgColor="#dddddd"
                    progressColor="#22769c"
                    showPercentage={false}
                    roundedStroke={true}
                />
                {this._isRunning()}
                {/* <p>{localStorage.getItem("length")}</p>
                <p>{localStorage.getItem("isRunning")}</p> */}
            </div>
        );
    }

    _inputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
        this.setState({ templete: 'Customized' });
    }

    _timer = () => {
        // background.js で算出された localStorage.getItem("progress") を取得するようにする
        this.setState({
            progress: localStorage.getItem("progress")
        });
        setTimeout(this._timer, 16)
    }

    _stopClick = () => {
        localStorage.setItem("length", 0);
        localStorage.setItem("nowDate", null);
        localStorage.setItem("isRunning", false);
    }

    _click = () => {
        // ここでは必要な情報を送る
        // - インターバルの長さ
        // - 開始時刻
        localStorage.setItem("length", Number(this.state.hour) * 60 * 60 + Number(this.state.minute) * 60 + Number(this.state.second));
        localStorage.setItem("nowDate", (new Date()).getTime());
        localStorage.setItem("isRunning", true);
    }

    _clickGithub = () => {
        window.open('https://github.com/NaoKanata/CircularIndicator', '_blank');
    }


    _clickAddPage = () => {
        window.open('./index.html', '_blank');
    }
}

export default App;
