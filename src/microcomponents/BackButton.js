import { useNavigate } from 'react-router-dom'

const BackButton = () => {

  const navigate = useNavigate()
  
  const handleBackButton = () => {
    navigate('/')
  }
  
  return (
    <button className='back-button' onClick={handleBackButton}>Go Back</button>
  )
}

export default BackButton