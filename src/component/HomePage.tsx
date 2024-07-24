import React from "react";
import Banner from "./Banner";
import PopularMovie from "./PopularMovie";
import TopRated from "./TopRated";
import TopTv from "./TopTv";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";

import "./hover.css"
import TvPopular from "./TvPopular";
const HomePage: React.FC = () => {
	const { isAuthenticated, loginWithRedirect , isLoading } = useAuth0();

	if (isLoading) {
		return (
		  <div className="flex items-center justify-center h-screen">
			<div className="text-center">
			  <h1 className="text-2xl mb-4">Loading...</h1>
			</div>
		  </div>
		);
	  }




  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl mb-4">You need to log in first</h1>
          <button
            onClick={() => loginWithRedirect()}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

	return (
		<div className=" bg text-slate-100">
			<Banner />
			<PopularMovie />
			<TopRated />
			<TopTv />
			<TvPopular />
			<Footer />
		</div>
	);
};

export default HomePage;
