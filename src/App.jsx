import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer/>
      <ToastContainer position="top-right" autoClose={2000} />
      
    </>
  )
}

export default App
