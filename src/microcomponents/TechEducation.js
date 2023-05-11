import { Link } from 'react-router-dom'

const TechEducation = () => {
  return (
    <>
      <h3 className='tech-experience-title'>Tech Training</h3>
      <div className='individual-tech-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png' alt='ga-logo' />
          <h5 className='job-title'>General Assembly</h5>
        </div>
        <h6 className='job-info'>January 2023 - April 2023</h6>
        <p className='job-description'>Software Engineering Immersive</p>
        <Link className='project-link' to='/projects'>Click here to see projects in more detail.</Link>
      </div>
    </>
  )
}

export default TechEducation