import React from 'react'
import TopTv from './TopTv'
import AiringToday from './AiringToday'
import TvPopular from './TvPopular'
import TVGeners from './TvGeneres'
import { useAuth0 } from "@auth0/auth0-react";

const TvShows:React.FC = () => {
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
    <div>
    
      <div className=' bg flex text-slate-300 mt-20'>
        <div><TVGeners/></div>
        <div>     
      <div className='w-[1200px]'>
    <TopTv/>
    <AiringToday/>
    <TvPopular/>
      </div></div>
      </div>
 
    </div>
  )
}

export default TvShows
