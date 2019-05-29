import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            time : '',
            countdown: false,
            sessionLength: 25,
            breakLength: 5  
        }
        this.handleInterval = this.handleInterval.bind(this)
    }


    handleSubmit = () => setInterval(this.handleInterval, 1000)

    handlePomodoro = () => {
        console.log(this.state.sessionLength)
        this.setState({
            sessionLength: 25,
            breakLength: 5
        })
        this.handleSubmit()
    }

    handleReset = () => {
        clearInterval(0)
        this.setState({
            sessionLength:25,
            breakLength: 5
        })
    }

    handleInterval(){
        var count = this.state.sessionLength
        if(count > 0){
            this.setState(prevState =>{
                return{
                    sessionLength: Number(prevState.sessionLength) - 1
                }
            })
        } else {
            clearInterval(count)
            count = 0;
        }
    }
    convertTime = time => {
        time = this.state.time;
        var hours = '0'
        var minutes, seconds = 0;
        if (time < 3600) {
            minutes = Math.floor(time / 60)
            seconds = time % 60
            hours = hours < 10 ? '0' + hours : hours
            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds
            return `${hours}:${minutes}:${seconds}`
        } else {
            hours = Math.floor(time/3600)
            minutes = Math.floor((time % 3600) / 60)
            seconds = Math.floor((time % 3600) % 60)
            hours = hours < 10 ? '0' + hours : hours
            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds
            return `${hours}:${minutes}:${seconds}`
        }
    }

    addTime = (event) =>{
        const {name, value} = event.target
        this.setState({
            [name]: Number(value)+1
        })
    }

    subtractTime = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: Number(value) - 1
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
                
            </div>
        )
    }
}

const spanstyle = {
    fontSize: "0.5em",
    textAlign: "center",
    marginTop: "1em"
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