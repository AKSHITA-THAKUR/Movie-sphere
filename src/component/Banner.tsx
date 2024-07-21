import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nowPlaying } from "../feature/movieSlice";
import { RootState } from "../redux/store";
const Banner: React.FC = () => {
	const dispatch = useDispatch();

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
					className="w-[1100px] h-[450px] ml-[150px] rounded-lg bg-fit  "
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w500${random?.poster_path})`,
					}}
				>
					<div className="text-white ml-7 h-[270px] pt-9">
						<h1 className="text-5xl font-bold mt-5 ">
							{random?.title || random?.original_title}
						</h1>
						<div className="mt-5">
							<button className="  w-[70px] bg-slate-500 rounded-md">
							
								Play
							</button>
							<button className=" ml-10 w-[70px] bg-slate-500 rounded-md">
							
								My List
							</button>
						</div>

						<p className="text-lg mt-5 w-[370px]">{random?.overview}</p>
					</div>
				</div>
			</>
		);
	};

	return <div>{RandomMovie()}</div>;
};

export default Banner;
