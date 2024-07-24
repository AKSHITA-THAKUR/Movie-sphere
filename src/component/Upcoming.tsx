

import { useEffect  , useState} from 'react'
import React from 'react'
import { upComingMovies } from '../feature/movieSlice'
import { useSelector , useDispatch } from 'react-redux'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RootState } from '../redux/store'
import { MovieDetails } from '../MovieDetails';
import "./hover.css"

const UpComing:React.FC = () => {

    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
        dispatch(upComingMovies())
    } , [])
    const upcoming = useSelector((state: RootState) => state.movies.upcoming)

    const moviesToShow = 4; 


	const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === Math.ceil(upcoming.length / moviesToShow) - 1 ? 0 : prev + 1
        );
	};

	const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Math.ceil(upcoming.length / moviesToShow) - 1 : prev - 1
        );
	};


    const Upmovies = () =>{

        return upcoming.map((movies:MovieDetails)=>(
            <div
            key={movies.id}
            className="w-[250px] mx-4 border my-5 shadow-md rounded-md zoom-out  bg-white/10 z-10 backdrop-filter backdrop-blur-lg  cursor-pointer"
            
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
     <div className="ml-[100px] mt-10">
            <div>
                <h1 className="text-2xl font-bold text-white"> Upcoming Movies...</h1>
            </div>
            <div className="relative w-[1100px]">
                <div className="flex items-center">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-10 p-2 bg-gray-600 rounded-full hover:bg-gray-400"
                    >
                        <FaArrowLeft />
                    </button>
                    <div className="w-full flex overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / moviesToShow)}%)`,
                                width: `${upcoming.length * 250}px`
                            }}
                        >
                            {Upmovies()}
                        </div>
                    </div>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-10 p-2 bg-gray-600 rounded-full hover:bg-gray-400"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpComing
