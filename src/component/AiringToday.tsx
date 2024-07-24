 
import { useEffect  , useState} from 'react'
import React from 'react'
import { getAiringToday } from '../feature/TvSlice'
import { useSelector , useDispatch } from 'react-redux'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RootState } from '../redux/store'
import { TvDetails } from '../TvDetails';
import "./hover.css"

const AiringToday:React.FC = () => {

    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
        dispatch(getAiringToday())
    } , [])
    const AiringToday = useSelector((state: RootState) => state.TvSlice.airingToday)

    const SlideToShow = 4; 


	const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === Math.ceil(AiringToday.length / SlideToShow) - 1 ? 0 : prev + 1
        );
	};

	const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Math.ceil(AiringToday.length / SlideToShow) - 1 : prev - 1
        );
	};


    const Airing_Today = () =>{

        return AiringToday.map((Shows:TvDetails)=>(
            <div
            key={Shows.id}
            className="w-[250px] mx-4 border my-5 shadow-md rounded-md zoom-out cursor-pointer"
            
        >
            <div className="w-full">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${Shows.poster_path}`}
                    alt={Shows.original_name}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                />
            </div>

            <div className="ml-3">
                <h2 className="text-lg font-semibold mb-2">
                    {Shows.original_name}
                </h2>
                <p className="text-gray-500">
                    Rating: {Shows.vote_average}
                </p>
            </div>
        </div>
          
        ))
    }
  
  return (
    <div>
     <div className="ml-[100px] mt-10">
            <div>
                <h1 className="text-2xl font-bold text-white">Airing Today...</h1>
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
                                transform: `translateX(-${currentSlide * (100 / SlideToShow)}%)`,
                                width: `${AiringToday.length * 250}px`
                            }}
                        >
                            {Airing_Today()}
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

export default AiringToday
   

  