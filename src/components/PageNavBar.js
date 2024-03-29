import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

const PageNavBar = () => {
  return (
    <Navbar expand='md'>
      <Container>
        <Navbar.Brand className='brand' to={'/'} as={Link}>Home</Navbar.Brand>
        <Navbar.Toggle className='narrow-menu' />
        <Navbar.Collapse className='justify-content-end narrow-style'>
          <Nav className='navbar-container'>
            <Link className='navbar-link' to='/'>About Me</Link>
            <Link className='navbar-link' to='/education'>Education</Link>
            <Link className='navbar-link' to='/tech'>Tech</Link>
            <Link className='navbar-link' to='/teaching'>Teaching</Link>
            <Link className='navbar-link' to='/projects'>Projects</Link>
            <Link className='navbar-link' to='https://www.linkedin.com/in/hannah-bodey/' target='_blank' rel='noreferrer'>Contact Me</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavBar