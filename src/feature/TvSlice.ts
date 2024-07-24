import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	TVGenere,
	TVPopular,
	AiringToday,
	TopRatedTV,
	TVGenereList,
} from "../api/handleApi";
import { TvDetails } from "../TvDetails";
export interface TvState {
	genere: any[];
	popular: TvDetails[];
	airingToday: TvDetails[];
	TvList: TvDetails[];
	topRated: TvDetails[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialState: TvState = {
	genere: [],
	popular: [],
	airingToday: [],
	topRated: [],
	TvList: [],
	status: "idle",
	error: null,
};

export const getTVPopular: any = createAsyncThunk(
	"PopularTvShoes",
	async () => {
		const popularTv = await TVPopular();
		return popularTv;
	}
);

export const getAiringToday: any = createAsyncThunk(
	"getAiringTv shows today",
	async () => {
		const airingTodayTv = await AiringToday();
		return airingTodayTv;
	}
);

export const getTopRatedTV: any = createAsyncThunk(
	"getTopRated TV shows",
	async () => {
		const topRatedTv = await TopRatedTV();
		return topRatedTv;
	}
);

export const getTVGenere: any = createAsyncThunk(
	"getTV shows genere",
	async () => {
		const tvGenere = await TVGenere();
		return tvGenere;
	}
);

export const getTvGenereList: any = createAsyncThunk(
	"GetListofMovies",
	async (id: number) => {
		const List = TVGenereList(id);
		return List;
	}
);

const tvSlice = createSlice({
	name: "TvSlice",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTVPopular.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getTVPopular.fulfilled, (state, action) => {
				state.popular = action.payload;
				state.status = "succeeded";
			})
			.addCase(getTVPopular.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(getAiringToday.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getAiringToday.fulfilled, (state, action) => {
				state.airingToday = action.payload;
				state.status = "succeeded";
			})
			.addCase(getAiringToday.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(getTopRatedTV.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getTopRatedTV.fulfilled, (state, action) => {
				state.topRated = action.payload;
				state.status = "succeeded";
			})
			.addCase(getTopRatedTV.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(getTVGenere.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getTVGenere.fulfilled, (state, action) => {
				state.genere = action.payload;
				state.status = "succeeded";
			})
			.addCase(getTVGenere.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(getTvGenereList.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getTvGenereList.fulfilled, (state, action) => {
				state.TvList = action.payload;
				state.status = "succeeded";
			})
			.addCase(getTvGenereList.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const tvReducer = tvSlice.reducer;
