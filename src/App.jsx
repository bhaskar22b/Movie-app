import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Fav from './Pages/Fav'
import PageNotFound from './Pages/PageNotFound'
import MovieCard from './Component/MovieCard'
import NavBar from './Component/NavBar'
import Login from './Pages/Login'
import { MovieProvider } from './Contexts/MovieContext'
import Contact from './Pages/Contact'
import SuccessPage from './Pages/SuccessPage'
import MovieDetail from './Pages/MovieDetail'
import { SliderProvider } from './Contexts/SliderContext'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      {/* <MovieCard movie={{title: "hlo", release_date: "2024"}} /> */}
      
      <SliderProvider>

      <MovieProvider>
        
      <NavBar />

      <main className='main-content'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />  //Dynamic route
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </main>

      <Footer />
      
      
      </MovieProvider>

      </SliderProvider>
    </>
  )
}

export default App