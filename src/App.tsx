import LandingPage from './component/LandingPage'
import HomePage from './component/HomePage'
import MovieList from './component/MovieList'
import TvShows from './component/TvShows'
import Deatil from './component/Deatil'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/movies' element={<MovieList/>}/>
      <Route path='/tvshows' element={<TvShows/>}/>
      <Route path='/movie/:id' element={<Deatil/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
