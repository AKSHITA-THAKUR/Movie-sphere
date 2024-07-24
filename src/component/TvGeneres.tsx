import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTVGenere } from "../feature/TvSlice";
import { RootState } from "../redux/store";
const TVGeners = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getTVGenere());
	}, []);

	const generes = useSelector((state: RootState) => state.TvSlice.genere);

	return (
		<div>
			<aside>
				<nav className=" min-h-screen w-[150px] text-gray-100 px-4 bg-gradient-to-b from-slate-500 to-slate-900 bg-red-700 border-2 border-double border-black rounded-xl">
					<div className="py-3 flex justify-center">
						<h1 className="text-3xl">Geners</h1>
					</div>
					<div>
						{generes.map((generes: any) => (
							<div
								className=" text-l  py-4 px-3 cursor-pointer hover:bg-slate-900 rounded  "
								key={generes.id}
								onClick={()=>{
									console.log("This is the genere id i click", generes.id)
									navigate(`/TvList/${generes.id}`)
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

export default TVGeners;
