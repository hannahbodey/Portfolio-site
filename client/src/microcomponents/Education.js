import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <>
      <h3 className='experience-title'>Education</h3>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png' alt='ga-logo' />
          <h5 className='job-title'>Software Engineering Immersive at General Assembly</h5>
        </div>
        <h6 className='job-info'>January 2023 - April 2023</h6>
        <p className='job-description'>Learning the fundamentals of programming.</p>
        <Link className='project-link' to='/projects'>Click here to see projects in more detail.</Link>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://upload.wikimedia.org/wikipedia/sco/thumb/d/d1/University_College_London_logo.svg/2560px-University_College_London_logo.svg.png' alt='ucl-logo' />
          <h5 className='job-title'>Teach First Postgraduate Diploma in Education (Modern Foreign Languages)</h5>
        </div>
        <h6 className='job-info'>July 2019 - August 2021</h6>
        <p className='job-description'>Training as a teacher through the Teach First programme, studying at the Institute of Education at University College London.</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://www.logo.wine/a/logo/University_of_Cambridge/University_of_Cambridge-Logo.wine.svg' alt='cambridge-logo' />
          <h5 className='job-title'>Trinity College, Cambridge</h5>
        </div>
        <h6 className='job-info'>October 2015 - July 2019</h6>
        <p className='job-description'>BA Hons Modern & Medieval Languages (French & Italian) (of which year abroad spent studying at the Ecole Normale Supérieure de Lyon, in Lyon, France) — Class: 2 Division: i</p>
      </div>
    </>
  )
}

export default Education