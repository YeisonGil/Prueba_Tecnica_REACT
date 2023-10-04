import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Popular from './components/Popular/Popular'
import Footer from './components/Footer/Footer'
import Home from './pages/home/Home'
import Movies from './pages/movies/Movies'
import Series from './pages/series/Series'
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Popular/>
        <div className='bodyy'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Series/>} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App