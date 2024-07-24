import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieDetails } from "../MovieDetails";
import {
	Popular,
	TopRatedMovies,
	Upcoming,
	MovieGenere,
	NowPlaying,
	Details,
	MovieGenereList,
} from "../api/handleApi";

export interface MovieState {
	popular: MovieDetails[];
	MovieList: MovieDetails[];
	topRated: MovieDetails[];
	upcoming: MovieDetails[];
	deatils: MovieDetails;
	geners: any[];
	nowPlaying: any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialMovieState: MovieState = {
	popular: [],
	topRated: [],
	upcoming: [],
	deatils: {} as MovieDetails ,
	MovieList: [],
	geners: [],
	nowPlaying: [],
	status: "idle",
	error: null,
};

export const getPopularMovies: any = createAsyncThunk(
	"getPopularMovies",
	async () => {
		const popularMovies = await Popular();
		return popularMovies;
	}
);

export const getTopMovies: any = createAsyncThunk("getTopMovies", async () => {
	const topRatedMovie = await TopRatedMovies();
	return topRatedMovie;
});

export const upComingMovies: any = createAsyncThunk(
	"getupcomingMovies",
	async () => {
		const upcomingMovies = await Upcoming();
		return upcomingMovies;
	}
);

export const Moviegeners: any = createAsyncThunk(
	"getMoviesGeners",
	async () => {
		const movieGeners = await MovieGenere();
		return movieGeners;
	}
);

export const getMovieGenereList: any = createAsyncThunk(
	"GetListofMovies",
	async (id: number) => {
		const List = await MovieGenereList(id);
		console.log("The list is activated", List);
		return List;
	}
);

export const getDetails: any = createAsyncThunk(
	"getDeatils",
	async (id: number) => {
		const movieDetails: any = await Details(id);
		return movieDetails;
	}
);

export const nowPlaying: any = createAsyncThunk("getnowPlaying", async () => {
	const nowPlaying = await NowPlaying();
	return nowPlaying;
});

const MovieSlice = createSlice({
	name: "movies",
	initialState: initialMovieState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPopularMovies.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getPopularMovies.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.popular = action.payload;
			})
			.addCase(getPopularMovies.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(getTopMovies.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getTopMovies.fulfilled, (state, action) => {
				state.topRated = action.payload;
				state.status = "succeeded";
			})
			.addCase(getTopMovies.rejected, (state, action) => {
				state.status = "failed";
				state.error =
					action.error.message || "Failed to fetch top-rated movies";
			})
			.addCase(upComingMovies.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(upComingMovies.fulfilled, (state, action) => {
				state.upcoming = action.payload;
				state.status = "succeeded";
			})
			.addCase(upComingMovies.rejected, (state, action) => {
				state.status = "failed";
				state.error =
					action.error.message || "Failed to fetch upcoming movies";
			})
			.addCase(Moviegeners.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(Moviegeners.fulfilled, (state, action) => {
				state.geners = action.payload;
				state.status = "succeeded";
			})
			.addCase(Moviegeners.rejected, (state, action) => {
				state.status = "failed";
				state.error =
					action.error.message || "Failed to fetch movie genres";
			})
			.addCase(nowPlaying.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(nowPlaying.fulfilled, (state, action) => {
				state.nowPlaying = action.payload;
				state.status = "succeeded";
			})
			.addCase(nowPlaying.rejected, (state, action) => {
				state.status = "failed";
				state.error =
					action.error.message ||
					"Failed to fetch now playing movies";
			})
			.addCase(getDetails.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getDetails.fulfilled, (state, action) => {
				state.deatils = action.payload;
				state.status = "succeeded";
			})
			.addCase(getDetails.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(getMovieGenereList.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getMovieGenereList.fulfilled, (state, action) => {
				state.MovieList = action.payload;
				state.status = "succeeded";
				console.log("This is successfully done", state.MovieList);
			})
			.addCase(getMovieGenereList.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const movieReducer = MovieSlice.reducer;
