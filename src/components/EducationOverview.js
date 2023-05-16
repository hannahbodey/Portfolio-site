import Education from '../microcomponents/Education'
import BackButton from '../microcomponents/BackButton'

const EducationOverview = () => {


  return (
    <div className='site-wrapper'>
      <BackButton />
      <div className='work-education-experience'>
        <Education />
      </div>
    </div>
  )
}

export default EducationOverview