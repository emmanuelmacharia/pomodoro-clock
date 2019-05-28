import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className = "app-header">
            <h1>Pomodoro</h1>
            <Link className="navLinks" to='/'>Home</Link> | <Link className="navLinks" to='/about'>About</Link>
        </div>
    )
}
