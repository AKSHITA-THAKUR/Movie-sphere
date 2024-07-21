import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../asset/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { isAuthenticated,  logout } = useAuth0();
  const navigate = useNavigate();

	return (
		<div className="w-full h-[80px] bg-slate-900 bg-opacity-50 text-white fixed  left-0 z-20 flex items-center justify-between px-4 ">
			<div className="flex items-center">
				<img
					src={logo}
					alt="Logo"
					className="h-26 w-[300px] mr-4 mt-9 hover:cursor-pointer"
					onClick={()=> navigate("/")}
					
				/>
			</div>
			<div className="   flex items-center space-x-16 mr-10">
				<div className="  cursor-pointer hover:bg-red-600">Home</div>
				<div className=" cursor-pointer hover:bg-red-600">TV Shows</div>
				<div className="  cursor-pointer hover:bg-red-600">Movies</div>
         
{isAuthenticated ? 				<button className="  cursor-pointer text-white bg-red-600 rounded w-[60px] h-[30px]" onClick={()=> logout({ logoutParams: { returnTo: window.location.origin } })}>
					Logout
				</button> :         <button className="  cursor-pointer text-white bg-red-600 rounded w-[60px] h-[30px]">
					Login
				</button>  }



			</div>
		</div>
	);
};

export default Navbar;
