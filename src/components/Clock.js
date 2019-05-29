import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            time : 1500,
            countdown: false,
            sessionLength: 25,
            breakLength: 5,
            timerType: "Session",
            interval: '',
            alarmColor: { color: "white" }
        }
        this.handleInterval = this.handleInterval.bind(this)
    }


    // handleSubmit = () => setInterval(this.handleInterval, 1000)
    handleSubmit =() => {
        let start = 
            !this.state.countdown ? (this.handleInterval(), 
            this.setState({countdown: true, alarmColor: {color:"green"}})) 
            :(this.setState({countdown: false}),
            clearInterval(this.state.interval)) 
    }

    handlePomodoro = () => {
        console.log(this.state.sessionLength)
        this.setState({
            sessionLength: 25,
            breakLength: 5,
            interval: '',
            time: 1500,
            timerType: "Session"
        })
        this.state.interval && clearInterval(this.state.interval)
        this.handleSubmit()
    }

    handleReset = () => {
        clearInterval(0)
        this.setState({
            sessionLength:25,
            countdown: false,
            breakLength: 5,
            timerType: "Session",
            time: 1500,
            interval: "",
            alarmColor:{color:"white"}
        });
        this.state.interval && clearInterval(this.state.interval)
    }

    handleInterval =() =>{
        console.log("Your Ternary works!")
        this.setState({
            interval: setInterval(() => {
                this.decrementTimer();
                this.phaseControl();
            },1000)
        })
    }

    decrementTimer =()=>{
        console.log("the decrementTimer method is called correctly")
        this.setState({time: this.state.time - 1})
    }

    phaseControl = () => {
        console.log("the phasecontrol method is called correctly")
        let time = this.state.time;
        this.warning(time)
        this.buzzer(time)
        if(time < 0){
            // eslint-disable-next-line no-unused-expressions
            this.state.timerType === "Session" ? (this.state.interval && clearInterval(this.state.interval),
                this.handleInterval(), this.switchTimer(this.state.breakLength * 60, "Break")) : (this.state.interval && clearInterval(this.state.interval),
                    this.handleInterval(), this.switchTimer(this.state.sessionLength * 60, "Session"))
        }
    }

    warning = (_time) => {
        console.log("warning is being called correctly")
        _time < 61 ? this.setState({alarmColor:{color:"red"}}):this.setState({alarmColor:{color: "white"}})
    }

    buzzer = (_time) => {
        console.log("buzzer is being called correctly")
        if(_time === 0){
            this.audioBeep.play()
        }
    }

    switchTimer = (num, str) => {
        console.log("switchTimer is being called correctly")
        this.setState({
            time: num,
            timerType: str,
            alarmColor:{color:"white"}
        })
    }

    convertTime = time => {
        let minutes = Math.floor(this.state.time / 60);
        let seconds = this.state.time - minutes * 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return minutes + ":" + seconds;
        }

    addTime = (event) =>{
        const {name, value} = event.target
        if(name == "sessionLength"){
            this.setState(prevState =>{
                return{
                    time: Number(prevState.sessionLength*60) + 60
                }
            })
        } else{
            this.setState(prevState => {
                return{
                    time: Number(prevState.breakLength * 60) + 60
                }
            })
        }
        this.setState(prevState =>{
            return {
                [name]: Number(value) + 1
            }
        })
    }

    subtractTime = (event) => {
        const { name, value } = event.target
        if(name == "sessionLength"){
            this.setState(prevState =>{
                return{
                    time: Number(prevState.sessionLength*60) - 60
                }
            })
        } else{
            this.setState(prevState => {
                return{
                    time: Number(prevState.breakLength * 60) - 60
                }
            })
        }
        this.setState(prevState => {
            return {
                [name]: Number(value) - 1
            }
        })
    }
    
    render() {
        return (
            <div className = "clock-data">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick={this.handlePomodoro}
                    >Pomodoro</button>
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick = {this.handleSubmit}
                    >Start</button>
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick  = {this.handleReset}
                    >Reset</button>
                </div>
                <div className = "container">
                    <div className = "row">
                        <div className="break-length col">
                            <h3>Break Length</h3>
                            <button 
                                type="button" 
                                name= "breakLength"
                                value = {this.state.breakLength}
                                className="btn btn-outline-secondary" 
                                onClick = {this.addTime}>
                                <FontAwesomeIcon icon={faAngleUp}/>
                            </button>
                            <button 
                                name="breakLength"
                                value={this.state.breakLength}
                                type="button" 
                                className="btn btn-outline-secondary" 
                                onClick = {this.subtractTime}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </button>
                            <h3 style = {{margin: "0 2em"}}>{this.state.breakLength}</h3>
                        </div>
                        <div className = "time-left col" style = {this.state.alarmColor}>
                            <h3> Time Left </h3>
                            <p style = {spanstyle}>{this.state.timerType}</p>
                            <h3 id="time"> {this.convertTime()} </h3>
                        </div>
                        <div className="session-length col">
                            <h3>Session Length</h3>
                            <button 
                                name="sessionLength"
                                value={this.state.sessionLength}
                                type="button" 
                                className="btn btn-outline-secondary" 
                                onClick = {this.addTime}>
                                <FontAwesomeIcon icon={faAngleUp} />
                            </button>
                            <button 
                                name = "sessionLength"
                                value = {this.state.sessionLength}
                                type="button" 
                                className="btn btn-outline-secondary" 
                                onClick = {this.subtractTime}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </button>
                            <h3 style = {{margin: "0 2em"}}>{this.state.sessionLength}</h3>
                        </div>
                    </div>
                    <p style = {spanstyle}>Click Start to get started</p>
                </div>
                <audio
                    id="beep"
                    preload="auto"
                    src="https://goo.gl/65cBl1"
                    ref={audio => {
                        this.audioBeep = audio;
                    }}
                />
            </div>
        )
    }
}

const spanstyle = {
    fontSize: "0.75em",
    textAlign: "center",
    marginTop: "1em"
}

const pstyle = {
    fontSize: "0.5em",
    textAlign: "center",
    marginTop: "0.2em"
}

export default Clock;

/**
 * <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input
                        type = "number"
                        name = "time"
                        value = {this.state.time}
                        placeholder = "Enter your Session allocation"
                        min = "1"
                        onChange = {this.handleChange}
                        />
                        <button>Start Session</button>
                    </form>
                    <h2>{this.convertTime()}</h2>
                </div>
 */