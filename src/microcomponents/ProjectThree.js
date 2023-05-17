const ProjectThree = () => {
  return (
    <>
      <a href='https://boot-track.herokuapp.com/' target='_blank' rel='noreferrer'>
        <div className='individual-project'>
          <h5 className='project-title'>BootTrack</h5>
          <img className='project-logo' src={require('../images/boottrackgif.gif')} alt='boottrack-screenshot' />
          <h6 className='project-info'>March 2023, 8 day group project</h6>
          {/* <a href='https://boot-track.herokuapp.com/'>Click here to learn!</a> */}
          <p className='project-description'>With a partner, in 8 days, I built a platform to store and upload student work. I implemented both teacher and student accounts, that allowed interactions between both parties. The students can upload their work and submit reports on their progress which can then be viewed by the teacher. This makes for a cohesive app that is ideal for use in coding bootcamp settings.</p>
        </div>
      </a>
      <a href='https://github.com/hannahbodey/GA-Project-3-BootTrack' target='_blank' rel='noreferrer'>
        <button className='back-button repo-button'>Click through to my Git repo →</button>
      </a>
    </>
  )
}

export default ProjectThree