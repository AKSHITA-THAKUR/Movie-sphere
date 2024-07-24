import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PopularMovie from "./PopularMovie";
import TopRated from "./TopRated";
import UpComing from "./Upcoming";
import MovieGener from "./MovieGener";

const MovieList: React.FC = () => {
  const { isAuthenticated, loginWithRedirect , isLoading} = useAuth0();

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
    <div >
      <div className="flex bg text-slate-300" >
        <div>
          <MovieGener />
        </div>
        <div>
          <h1>This is the movieList page</h1>
          <div className="mr-10">
            <TopRated />
            <UpComing />
            <PopularMovie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
