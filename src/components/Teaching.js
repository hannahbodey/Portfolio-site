import BackButton from '../microcomponents/BackButton'
import WorkExperience from '../microcomponents/TeachingExperience'

const Teaching = () => {
  return (
    <div className='site-wrapper'>
      <BackButton />
      <div className='work-education-experience teaching-background'>
        <WorkExperience />
      </div>
    </div>
  )
}

export default Teaching