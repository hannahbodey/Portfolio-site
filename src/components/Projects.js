import ProjectFour from '../microcomponents/ProjectFour'
import ProjectOne from '../microcomponents/ProjectOne'
import ProjectThree from '../microcomponents/ProjectThree'
import ProjectTwo from '../microcomponents/ProjectTwo'
import CodingLanguages from '../microcomponents/CodingLanguages'
import BackButton from '../microcomponents/BackButton'
import ProjectOneLanguages from '../microcomponents/ProjectOneLanguages'
import ProjectTwoLanguages from '../microcomponents/ProjectTwoLanguages'
import ProjectThreeLanguages from '../microcomponents/ProjectThreeLanguages'
import ProjectFourLanguages from '../microcomponents/ProjectFourLanguages'

const Projects = () => {
  return (
    <div className='site-wrapper'>
      <BackButton />
      <div className='projects-container'>
        <div className='projects-title-container'>
          <h1>Previous Projects</h1>
          <h2>General Assembly Software Engineering Immersive</h2>
        </div>
        {/* <h4 className='coding-languages-title'>Coding Languages</h4>
        <div className='skills-container'>
          <CodingLanguages />
        </div> */}
        <div className='all-projects-container'>
          <div className='project-languages-container'>
            <div className='project-container'>
              <ProjectFour />
            </div>
            <div className='code-container'>
              <ProjectFourLanguages />
            </div>
          </div>
          <div className='project-languages-container'>
            <div className='project-container'>
              <ProjectThree />
            </div>
            <div className='code-container'>
              <ProjectThreeLanguages />
            </div>
          </div>
          <div className='project-languages-container'>
            <div className='project-container'>
              <ProjectTwo />
            </div>
            <div className='code-container'>
              <ProjectTwoLanguages />
            </div>
          </div>
          <div className='project-languages-container'>
            <div className='project-container'>
              <ProjectOne />
            </div>
            <div className='code-container'>
              <ProjectOneLanguages />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects