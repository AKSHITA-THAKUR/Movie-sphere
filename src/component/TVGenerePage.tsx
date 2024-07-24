import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTvGenereList } from '../feature/TvSlice';
import { RootState } from '../redux/store';

const TvGenerePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
const { id } = useParams<{ id: string }>();

useEffect(()=>{
    dispatch(getTvGenereList(id))
} , [ dispatch])

const genres = useSelector((state: RootState) => state.TvSlice.TvList);

const GenereList = () =>{

    
        return genres.map((shows:any)=>(
            <div
            key={shows.id}
            className="w-[250px] mx-4 border my-5 shadow-md rounded-md zoom-out mt-20 bg-white/10 "
            
        >
            <div className="w-full">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${shows.poster_path}`}
                    alt={shows.original_name}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                    
                />
            </div>

            <div className="ml-3">
                <h2 className="text-lg font-semibold mb-2">
                    {shows.original_name}
                </h2>
                <p className="text-gray-500">
                    Rating: {shows.vote_average}
                </p>
            </div>
        </div>
          
        ))
    
}
 

  return (
    <div>
     
      <div className='flex flex-wrap  pl-[120px] bg text-slate-300'>
     {GenereList()}
      </div>
    </div>
  )
}

export default TvGenerePage
