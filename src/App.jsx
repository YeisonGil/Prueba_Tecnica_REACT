import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Popular from './components/Popular/Popular'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Popular/>
        <Routes>
          <Route path='/error' element={<h1>page error</h1>} />X
          <Route path='/loading' element={<h1>page loading</h1>} />X
          <Route path='/home' element={<h1>page home</h1>} />X
          <Route path='/movies' element={<h1>page movies</h1>} />X
          <Route path='/series' element={<h1>page series</h1>} />X
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App