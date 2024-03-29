import './Navigation.css'
import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      
        <nav>
            <ul>
                <li><a className='active' href='#home'>Home</a></li> 
                <li><a href='#news'>News</a></li> 
                <li><a href='#about'>About</a></li> 
                <li><a href='#contact'>Contact</a></li>  
            </ul>
        </nav>
    )
  }
}
