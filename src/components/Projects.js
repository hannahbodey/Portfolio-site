import ProjectFour from '../microcomponents/ProjectFour'
import ProjectOne from '../microcomponents/ProjectOne'
import ProjectThree from '../microcomponents/ProjectThree'
import ProjectTwo from '../microcomponents/ProjectTwo'
import CodingLanguages from '../microcomponents/CodingLanguages'

const Projects = () => {
  return (
    <div className='site-wrapper'>
      <div className='projects-container'>
        <div className='projects-title-container'>
          <h1>Previous Projects</h1>
          <h2>General Assembly Software Engineering Immersive</h2>
        </div>
        <h4 className='coding-languages-title'>Coding Languages</h4>
        <div className='skills-container'>
          <CodingLanguages />
        </div>
        <div className='all-projects-container'>
          <div className='project-container'>
            <ProjectFour />
          </div>
          <div className='project-container'>
            <ProjectThree />
          </div>
          <div className='project-container'>
            <ProjectTwo />
          </div>
          <div className='project-container'>
            <ProjectOne />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects