import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <React.Fragment>
        <ul>
            <li><NavLink to="/" style={({isActive})=>{return {backgroundColor: isActive?'green':''}}}>Home</NavLink></li>
            <li><NavLink to="/about" style={({isActive})=>{return {backgroundColor: isActive?'red':''}}}>About</NavLink></li>
            <li><NavLink to="/contact" style={({isActive})=>{return {backgroundColor: isActive?'red':''}}}>Contact</NavLink></li>
            <li><NavLink to="/post" style={({isActive})=>{return {backgroundColor: isActive?'red':''}}}>Post</NavLink></li>

        </ul>

    </React.Fragment>
  )
}

export default Navbar