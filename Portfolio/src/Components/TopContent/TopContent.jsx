import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topcontent'>
       <div className='topcontent-container'>
        <h1>Mr.Aravind R</h1>
        <p>A Professional Interactive Web Developer</p>
        <a href="www.google.com">
            <button className='topcontent-downloadButton'>Download CV</button>
        </a>
        <Link to='projects' smooth={true} duration={500}>
            <button className='topcontent-workButton'>My Work</button>
        </Link>
        </div> 
    </div>
  )
}

export default TopContent