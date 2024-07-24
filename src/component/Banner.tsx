import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nowPlaying } from "../feature/movieSlice";
import { RootState } from "../redux/store";
import "./hover.css"
import { useNavigate } from "react-router-dom";
const Banner: React.FC = () => {
	const dispatch = useDispatch();
   const navigate = useNavigate();

	useEffect(() => {
		dispatch(nowPlaying());
	}, [dispatch]);

	const bannerData = useSelector(
		(state: RootState) => state.movies.nowPlaying
	);
	const RandomMovie = () => {
		const random =
			bannerData[Math.floor(Math.random() * bannerData?.length)];

		return (
			<> 
			 
			
				<div
					className="w-[1100px] h-[450px] ml-[150px] rounded-lg bg-fit mt-10 " 
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w500${random?.poster_path})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center'
					}}
				>
					<div className="text-white ml-7 h-[270px] pt-9">
						<h1 className="text-5xl font-bold mt-5 ">
							{random?.title || random?.original_title}
						</h1>
						<div className="mt-5">
							<button className="  w-[70px] bg-slate-500 rounded-md"
							onClick={() => navigate(`/movie/${random.id}`)} 
							>
							
								Watch 
							</button>
							<button className=" ml-10 w-[70px] bg-slate-500 rounded-md">
							
								My List
							</button>
						</div>

						<p className="text-lg mt-5 w-[370px] overflow-hidden">{random?.overview}</p>
					</div>
				</div>
			
			</>
		);
	};

	return <div className="bg">
		{RandomMovie()}
		</div>;
};

export default Banner;
