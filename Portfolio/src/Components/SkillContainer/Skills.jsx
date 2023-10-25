import React from 'react'
import { Element } from 'react-scroll'
import Skilling from '../../assets/Skill.jpg'
import LinearProgress from '@mui/material/LinearProgress'
import './Skill.css'

const Skills = () => {
  return (
    <Element className='skillcontainer' id='skill'>
        <div className='skillcontainer-img'>
            <img src={Skilling} alt="" />
        </div>
        <div className='skillcontainer-text'>
            <h2>SKILL SET</h2>
            <div className='skillcontainer-skillset'>
                <h5>React</h5>
                <div className='skillcontainer-slider skillcontainer-slider1'>
                    <LinearProgress variant='determinate' value={85}></LinearProgress>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>Node</h5>
                <div className='skillcontainer-slider skillcontainer-slider2'>
                    <LinearProgress variant='determinate' value={75}></LinearProgress>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>Express</h5>
                <div className='skillcontainer-slider skillcontainer-slider3'>
                    <LinearProgress variant='determinate' value={70}></LinearProgress>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>Mongo DB</h5>
                <div className='skillcontainer-slider skillcontainer-slider4'>
                    <LinearProgress variant='determinate' value={80}></LinearProgress>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>My SQL</h5>
                <div className='skillcontainer-slider skillcontainer-slider5'>
                    <LinearProgress variant='determinate' value={77}></LinearProgress>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>HTML, CSS, JS</h5>
                <div className='skillcontainer-slider skillcontainer-slider6'>
                    <LinearProgress variant='determinate' value={97}></LinearProgress>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>Git</h5>
                <div className='skillcontainer-slider skillcontainer-slider7'>
                    <LinearProgress variant='determinate' value={89}></LinearProgress>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skills