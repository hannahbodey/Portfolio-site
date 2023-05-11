import WorkExperience from '../microcomponents/TechExperience'
import TechEducation from '../microcomponents/TechEducation'
import CodingLanguages from '../microcomponents/CodingLanguages'

const Tech = () => {
  return (
    <div className='site-wrapper'>
      <div className='tech-background tech-background-styling'>
        {/* <h4 className='coding-languages-title'>Coding Languages</h4> */}
        {/* <div className='skills-container tech-background'>
          <CodingLanguages />
        </div> */}
        <div className='work-education-experience tech-background'>
          <WorkExperience />
        </div>
        <div className='work-education-experience tech-background'>
          <TechEducation />
        </div>
      </div>
    </div>
  )
}

export default Tech