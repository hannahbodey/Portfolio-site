import AdditionalCertificates from '../microcomponents/AdditionalCertificates'
import CodingLanguages from '../microcomponents/CodingLanguages'
import Education from '../microcomponents/Education'
import Interests from '../microcomponents/Interests'
import Languages from '../microcomponents/Languages'
import PersonalIntro from '../microcomponents/PersonalIntro'
import WorkExperience from '../microcomponents/TeachingExperience'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  const handleClickTech = () => {
    navigate('/tech')
  }

  const handleClickTeach = () => {
    navigate('/teaching')
  }

  const handleClickProjects = () => {
    navigate('/projects')
  }

  const handleClickEducation = () => {
    navigate('/education')
  }

  return (
    <div className='site-wrapper'>
      <div className='title-container'>
        <img className='headshot' src={require('../images/8715F432-8209-4AB3-9036-7C1AA16CC7F7_1_105_c.jpeg')} alt='headshot' />
        <div className='title-pic-container'>
          <h1>Hannah Bodey</h1>
          <h2>Junior Software Engineer</h2>
        </div>
        <div className='logo-images-container'>
          <a href='https://github.com/hannahbodey' target='_blank' rel='noreferrer'>
            <div className='github-image'>
              <img className='title-image' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
            </div>
          </a>
          <a href='https://www.linkedin.com/in/hannah-bodey/' target='_blank' rel='noreferrer'>
            <img className='title-image' src='https://cdn-icons-png.flaticon.com/512/61/61109.png' />
          </a>
        </div>
      </div>
      <div className='bio-container'>
        <PersonalIntro />
      </div>
      {/* <h4 className='coding-languages-title'>Coding Languages</h4>
      <div className='skills-container'>
        <CodingLanguages />
      </div> */}
      <div className='tech-teaching-links-container'>
        <button className='tech-teaching-link' onClick={handleClickProjects}>View Coding Projects</button>
        <button className='tech-teaching-link' onClick={handleClickEducation}>View Educational Background</button>
        <button className='tech-teaching-link' onClick={handleClickTech}>View Tech Experience</button>
        <button className='tech-teaching-link' onClick={handleClickTeach}>View Teaching Experience</button>
      </div>
      <h4 className='coding-languages-title'>Languages</h4>
      <div className='skills-container'>
        <Languages />
      </div>

      {/* <div className='work-education-experience'>
        <WorkExperience />
      </div>
      <div className='work-education-experience'>
        <Education />
      </div> */}
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