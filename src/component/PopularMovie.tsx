import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../feature/movieSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { MovieDetails } from "../MovieDetails";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./hover.css"
const PopularMovie: React.FC = () => {
    const dispatch = useDispatch();
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPopularMovies());
    }, [dispatch]);

    const PopularMovies = useSelector(
        (state: RootState) => state.movies.popular
    );

    const moviesToShow = 4; 

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === Math.ceil(PopularMovies.length / moviesToShow) - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Math.ceil(PopularMovies.length / moviesToShow) - 1 : prev - 1
        );
    };

    const PopMovies = () => {
        return PopularMovies.map((movies: MovieDetails) => (
            <div
                key={movies.id}
                className="w-[250px] mx-4 border my-5 cursor-pointer  rounded-md zoom-out  bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg"
                onClick={() => navigate(`/movie/${movies.id}`)} 
            >
                <div className="w-full">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                        alt={movies.title}
                        className="w-full h-40 object-cover mb-4 rounded-md"
                    />
                </div>

                <div className="ml-3 ">
                    <h2 className="text-lg font-semibold mb-2">
                        {movies.title}
                    </h2>
                    <p className="text-gray-500">
                        Rating: {movies.vote_average}
                    </p>
                </div>
            </div>
        ));
    };

    return (
        <div className="ml-[100px] mt-10">
            <div>
                <h1 className="text-2xl font-bold text-white">Popular Movies...</h1>
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
                                width: `${PopularMovies.length * 250}px`
                            }}
                        >
                            {PopMovies()}
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
    );
};

export default PopularMovie;
