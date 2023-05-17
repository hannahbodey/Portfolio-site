const ProjectFour = () => {
  return (
    <>
      <a href='https://theatre-addict.herokuapp.com/' target='_blank' rel='noreferrer'>
        <div className='individual-project'>
          <h5 className='project-title'>Theatre Addict</h5>
          <img className='project-logo' src={require('../images/theatreaddictgif.gif')} alt='theatre-addict-screenshot' />
          <h6 className='project-info'>April 2023, 8 day solo project</h6>
          {/* <a href='https://theatre-addict.herokuapp.com/'>Click here to find your next show!</a> */}
          <p className='project-description'>For my final project on my General Assembly course, which was completed independently in 8 days, I wanted to channel my enthusiasm for musical theatre. I created an app that was designed for mobile but worked on desktop, and allowed the user to swipe through all the musicals showing in the West End in London. Users could click through and were taken to the booking pages for each theatre. I also added functionality for the user to create an account so they could leave comments for other users, and then message other users to get more information about a particular show or theatre.</p>
        </div>
      </a>
      <a href='https://github.com/hannahbodey/GA-Project-4-Theatre-Addict'target='_blank' rel='noreferrer'>
        <button className='back-button repo-button'>Click through to my Git repo →</button>
      </a>
    </>
  )
}

export default ProjectFour