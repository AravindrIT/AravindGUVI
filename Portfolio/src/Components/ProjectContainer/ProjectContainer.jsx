import React from 'react'
import { Element } from 'react-scroll'
import './ProjectContainer.css'

const ProjectContainer = () => {
  return (
    <Element className='projectcontainer' id='project'>
        <div>
          <h1 className='title'>
            Projects
            </h1>
        </div>
        <div>
            <h1 className='projects'>Cooming Soon...</h1>
        </div>
    </Element>
  )
}

export default ProjectContainer