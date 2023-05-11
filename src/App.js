import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNavBar from './components/PageNavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Tech from './components/Tech'
import Teaching from './components/Teaching'
import EducationOverview from './components/EducationOverview'

const App = () => {
  return (
    <div className='overall-wrapper'>
      <div className='site-wrapper'>
        <BrowserRouter>
          <PageNavBar />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/education' element={<EducationOverview />} />
            <Route path='/tech' element={<Tech />} />
            <Route path='/teaching' element={<Teaching />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
