import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const PageNavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand className='brand' to={'/'} as={Link}>Home</Navbar.Brand>
      <Navbar.Toggle className='narrow-menu' />
      <Navbar.Collapse className='justify-content-end narrow-style'>
        <Nav>
          <Link to='/'>About Me</Link>
          <Link to='/projects'>View Projects</Link>
          <Link to='/contact'>Contact Me</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default PageNavBar