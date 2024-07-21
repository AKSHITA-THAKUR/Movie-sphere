import React from "react";
import bgVideo3 from "../asset/bgVideo3.mp4";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";


const LandingPage: React.FC = () => {
	const { loginWithRedirect  , isAuthenticated} = useAuth0();
	const navigate = useNavigate();
	return (
        <>
         <Navbar/>
		<div className=" h-full flex flex-col justify-between m-0 items-center  overflow-hidden ">
           
			<video
				src={bgVideo3}
				className="w-full h-full absolute top-0 z-0 object-cover"
				autoPlay
				muted
				loop
			></video>
			<div className=" text-white relative z-10 text-center px-4 mt-40">
				<p className="text-5xl font-extrabold leading-tight mb-4 font-sans">Dive into a World of Blockbusters </p>
				<p className="text-5xl font-extrabold leading-tight mb-4 font-sans">and Hidden Gems.</p>
				<p className="text-3xl font-medium mb-6 font-serif">Unlimited movies , TV shows and More</p>
				<p className=" text-xl font-light mb-10 font-mono">
					Ready to watch ? just Signup  and get access to
					unlimited movies and Tv shows
				</p>
				<button className="bg-red-600 hover:bg-red-800  text-white font-bold py-2 px-4 rounded mt-8"
				onClick={ isAuthenticated ? ()=> navigate("/homepage")  : ()=> loginWithRedirect()}> 
					Get Started
				</button>
			</div>
		</div>
        </>
	);
};
export default LandingPage;
