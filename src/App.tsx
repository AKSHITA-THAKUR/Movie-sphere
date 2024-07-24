import LandingPage from './component/LandingPage'
import HomePage from './component/HomePage'
import MovieList from './component/MovieList'
import TvShows from './component/TvShows'
import GenereList from './component/GenereList'
import Deatil from './component/Deatil'
import Navbar from './component/Navbar'
import TvGenerePage from './component/TVGenerePage'
import NotFound from './component/PageNotFound'
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/movies' element={<MovieList/>}/>
      <Route path='/tvshows' element={<TvShows/>}/>
      <Route path='/movie/:id' element={<Deatil/>}/>
      <Route path='/movieList/:id' element={<GenereList/>}/>
      <Route path='/TvList/:id' element={<TvGenerePage/>}/>
      <Route path='*' element={<NotFound/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
