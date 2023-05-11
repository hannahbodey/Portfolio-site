import WorkExperience from '../microcomponents/TechExperience'
import TechEducation from '../microcomponents/TechEducation'
import CodingLanguages from '../microcomponents/CodingLanguages'

const Tech = () => {
  return (
    <div className='site-wrapper'>
      <h4 className='coding-languages-title'>Coding Languages</h4>
      <div className='skills-container'>
        <CodingLanguages />
      </div>
      <div className='work-education-experience'>
        <WorkExperience />
      </div>
      <div className='work-education-experience'>
        <TechEducation />
      </div>
    </div>
  )
}

export default Tech