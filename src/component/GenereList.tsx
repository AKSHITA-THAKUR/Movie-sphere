import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieGenereList } from '../feature/movieSlice';
import { RootState } from '../redux/store';

const GenereList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
const { id } = useParams<{ id: string }>();

useEffect(()=>{
    dispatch(getMovieGenereList(id))
} , [  id])

const genres = useSelector((state: RootState) => state.movies.MovieList);

const getMovieList = () =>{

    
        return genres.map((movies:any)=>(
            <div
            key={movies.id}
            className="w-[250px] mx-4 border my-5 shadow-md rounded-md zoom-out  bg-white/10 z-10"
            onClick={() => navigate(`/movie/${movies.id}`)} 
        >
            <div className="w-full">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                    alt={movies.title}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                    
                />
            </div>

            <div className="ml-3">
                <h2 className="text-lg font-semibold mb-2">
                    {movies.title}
                </h2>
                <p className="text-gray-500">
                    Rating: {movies.vote_average}
                </p>
            </div>
        </div>
          
        ))
    
}
 

  return (
    <div>
     
      <div className='flex mt-16 flex-wrap text-slate-300 pl-[120px] bg'>
     {getMovieList()}
      </div>
    </div>
  )
}

export default GenereList
