const ProjectTwo = () => {
  return (
    <>
      <a href='https://schoolmedicaldictionary.netlify.app/' target='_blank' rel='noreferrer'>
        <div className='individual-project'>
          <h5 className='project-title'>Merriam-Webster Dictionary App</h5>
          <img className='project-logo' src={require('../images/dictionarygif.gif')} alt='dictionary-app-screenshot' />
          <h6 className='project-info'>March 2023, 2 day pair project</h6>
          {/* <a href='https://schoolmedicaldictionary.netlify.app/'>Click here to learn!</a> */}
          <p className='project-description'>In 48 hours with a partner, I built a React.js app that consumed the Merriam Webster dictionary APIs to return definitions. I went for a clean and simple design that put the emphasis on the definitions. The API structure was quite complex, so it took us a long time to get the information showing correctly. We did manage this, however, and managed to produce this functioning product in a very short period of time. I particularly built the home page with its random word-of-the-day feature in order to provide an introductory stage for the user.</p>
        </div>
      </a>
      <a href='https://github.com/hannahbodey/GA-Project-2-Dictionary-App' target='_blank' rel='noreferrer'>
        <button className='back-button repo-button'>Click through to my Git repo →</button>
      </a>
    </>
  )
}

export default ProjectTwo