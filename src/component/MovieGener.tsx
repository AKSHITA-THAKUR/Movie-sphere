import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Moviegeners } from "../feature/movieSlice";
import { RootState } from "../redux/store";
const MovieGener = () => {
	const dispatch = useDispatch();
    const naviagte = useNavigate();
	useEffect(() => {
		dispatch(Moviegeners());
	}, []);

	const generes = useSelector((state: RootState) => state.movies.geners);

	return (
		<div>
			<aside>
				<nav className=" min-h-screen   w-[150px] text-gray-100 px-4 bg-gradient-to-b from-slate-500 to-slate-900  border-1 border-double border-black rounded-xl mt-20">
					<div className="py-3 flex justify-center">
						<h1 className="text-3xl">Geners</h1>
					</div>
					<div>
						{generes.map((generes: any) => (
							<div
								className=" text-l rounded  py-4 px-4 cursor-pointer hover:bg-slate-900 "
								key={generes.id}
                               onClick={()=>{
								   naviagte(`/movieList/${generes.id}`)
							   }}
							>
								{generes.name}
								
							</div>
						))}
					</div>
				</nav>
			</aside>
		</div>
	);
};

export default MovieGener;
