import AdditionalCertificates from '../microcomponents/AdditionalCertificates'
import CodingLanguages from '../microcomponents/CodingLanguages'
import Education from '../microcomponents/Education'
import Interests from '../microcomponents/Interests'
import Languages from '../microcomponents/Languages'
import PersonalIntro from '../microcomponents/PersonalIntro'
import WorkExperience from '../microcomponents/WorkExperience'

const About = () => {
  return (
    <div className='site-wrapper'>
      <div className='title-container'>
        <h1>Hannah Bodey</h1>
        <h2>Junior Software Engineer</h2>
      </div>
      <div className='bio-container'>
        <PersonalIntro />
      </div>
      <div className='skills-container'>
        <CodingLanguages />
      </div>
      <div className='skills-container'>
        <Languages />
      </div>
      <div className='work-education-experience'>
        <WorkExperience />
      </div>
      <div className='work-education-experience'>
        <Education />
      </div>
      <div className='additional-skills-container'>
        <AdditionalCertificates />
      </div>
      <div className='personal-interests-container'>
        <Interests />
      </div>
    </div>
  
  )
}

export default About