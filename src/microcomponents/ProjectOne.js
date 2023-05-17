const ProjectOne = () => {
  return (
    <>
      <a href='https://hannahbodey.github.io/GA-Project-1-PacMan/' target='_blank' rel='noreferrer'>
        <div className='individual-project'>
          <h5 className='project-title'>PacMan</h5>
          <img className='project-logo' src={require('../images/pacmangif.gif')} alt='pacman-screenshot' />
          <h6 className='project-info'>February 2023, 6 day solo project</h6>
          {/* <a href='https://hannahbodey.github.io/GA-Project-1-PacMan/'>Click here to play!</a> */}
          <p className='project-description'>I spent just over a week building a Medieval version of the arcade classic PacMan. I studied a lot of Medieval literature at university and knew that the manuscripts have some excellent margin drawings of monsters, and this was the inspiration for my theme. I drafted up the logic in pseudocode, built my MVP functioning and then built up the styling. Once that was done, I worked on the movement of the ghosts - I especially wanted to capture the original characters of the ghosts, which are all different. I employed multiple rules on the movement of these ghosts to give them different characters.</p>
        </div>
      </a>
      <a href='https://github.com/hannahbodey/GA-Project-1-PacMan'target='_blank' rel='noreferrer'>
        <button className='back-button repo-button'>Click through to my Git repo →</button>
      </a>
    </>
  )
}

export default ProjectOne