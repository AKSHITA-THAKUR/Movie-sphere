import { useEffect  , useState} from 'react'
import React from 'react'
import { getTopMovies } from '../feature/movieSlice'
import { useSelector , useDispatch } from 'react-redux'
import { RootState } from '../redux/store'

const TopRated:React.FC = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
    
    } , [])
    const topMovies = useSelector((state: RootState) => state.movies.topRated)

  return (
    <div>
      
    </div>
  )
}

export default TopRated
