import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './Navbar'
import { Home, About, Blogs, Contact } from './pages'

function App() {

  return (
    <>
      <main className='bg-slate-300/20 w-full h-screen'>
      
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About/>} />
            <Route path='blogs' element={<Blogs/>} />
            <Route path='contact' element={<Contact/>} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
