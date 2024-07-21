import axios from "axios";
const apiKey = "7dae8ce276ab4d0aecdf916905899340";
// MOVIES APIS
export const Popular = async () => { 
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
		);
		console.log(data.results);
		return data.results;
	} catch (error) {
		console.error("The error is in popular MOVIE Api ", error);
	}
};

export const TopRatedMovies = async () => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
		);
		console.log(data.results);
		return data.results;
	} catch (error) {
		console.error("The error is in TOPRATED MOVIE Api ", error);
	}
};

export const Upcoming = async () => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
		);
		console.log(data.results);
		return data.results;
	} catch (error) {
		console.error("The error is in UPCOMING Api ", error);
	}
};
export const NowPlaying = async() =>{
	try{
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
		);
		return data.results;

	}
	catch(error){
		console.error("The error is in Now playing Api ", error);
	}
}

//TELEVISION APIS

export const TVPopular = async () => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
		);
		console.log(data.results);
		return data.results;
	} catch (error) {
		console.error("The error is in TV popular Api ", error);
	}
};

export const TopRatedTV = async () => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`
		);
        console.log(data.results);
		return data.results;
	} catch (error) {
		console.error("The error is in TopRated Tv Api ", error);
	}
};

export const AiringToday = async () =>{
    try{
        const { data } = await axios.get(
			`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`
		);
        console.log(data.results);
		return data.results;
    }
 catch (error) {
    console.error("The error is in airing today Api ", error);
}
}

//API FOR GENERES
 
export const MovieGenere = async () =>{
    try{
   const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
   console.log(data.genres);
   return data.genres;
    }
    catch (error)  {
        console.error("The error is in GENERES Api ", error);
    }
}
export const TVGenere = async () =>{
    try{
   const {data} = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)
   console.log(data.genres);
   return data.genres;
    }
    catch (error)  {
        console.error("The error is in GENERES Api ", error);
    }
}
