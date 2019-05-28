import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            time : ''  
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInterval = this.handleInterval.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        var interval = setInterval(this.handleInterval, 1000)
        console.log(interval)
    }

    handleInterval(){
        var count = this.state.time
        if(count > 0){
            this.setState(prevState =>{
                return{
                    time: prevState.time - 1
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
    render() {
        return (
            <div className = "clock-data">
                <form onSubmit = {this.handleSubmit}>
                    <input 
                    type = "number" 
                    name = "time" 
                    value = {this.state.time}
                    placeholder = "Enter your time allocation"
                    min = "1"
                    onChange = {this.handleChange}
                    />
                    <button>Start</button>
                </form>
                <h2>{this.convertTime()}</h2>
            </div>
        )
    }
}

export default Clock;
