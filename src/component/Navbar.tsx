import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../asset/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
	const { isAuthenticated, logout } = useAuth0();
	const navigate = useNavigate();
	const {pathname} = useLocation();
	const page =  pathname.split('/')?.[1]
	console.log(page)
	
	function Linkness(type:string){
		let classes = " px-4 py-3  rounded cursor-pointer hover:bg-red-600"
		if (type===page){
			classes +=" bg-red-600 text-white"
		}
		else {
			classes +=" text-gray-300"
		}
		return classes
	}


	return (
		<div className="w-full h-[80px] bg-slate-900 bg-opacity-50 text-white fixed top-0 left-0 z-20 flex items-center justify-between px-4 backdrop-filter backdrop-blur-md ">
			<div className="flex items-center">
				<img
					src={logo}
					alt="Logo"
					className="h-26 w-[300px] mr-4 mt-9 hover:cursor-pointer"
					onClick={() => navigate("/")}
				/>
			</div>
			<div className="  flex items-center space-x-16 mr-10">
				<div
					className={Linkness('homepage')}
					onClick={
						
							() => navigate("/homepage")
							
					}
				>
					Home
				</div>
				<div
					className={Linkness('tvshows')}
					onClick={ () => navigate("/tvshows")}
				>
					TV Shows
				</div>
				<div
					className={Linkness('movies')}
					onClick={ () => navigate("/movies")}
				>
					Movies
				</div>

				{isAuthenticated ? (
					<button
						className="  hover:bg-red-800 cursor-pointer text-white bg-red-600 rounded w-[60px] h-[30px]"
						onClick={() =>
							logout({
								logoutParams: {
									returnTo: window.location.origin,
								},
							})
						}
					>
						Logout
					</button>
				) : (
					<button className="  cursor-pointer text-white bg-red-600 rounded w-[60px] h-[30px]">
						Login
					</button>
				)}
			</div>
		</div>
	);
};

export default Navbar;
