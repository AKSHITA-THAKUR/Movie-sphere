import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@reduxjs/toolkit";
import { TVGenere, TVPopular, AiringToday, TopRatedTV } from "../api/handleApi";

export interface TvState {
	genere: any[];
	popular: any[];
	airingToday: any[];
	topRated: any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialState: TvState = {
	genere: [],
	popular: [],
	airingToday: [],
	topRated: [],
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

export const getAiringToday:any = createAsyncThunk("getAiringTv shows today" , async()=>{
    const airingTodayTv = await AiringToday();
    return airingTodayTv;
});

export const getTopRatedTV: any = createAsyncThunk("getTopRated TV shows" , async()=>{
    const topRatedTv = await TopRatedTV();
    return topRatedTv;
});

export const getTVGenere: any = createAsyncThunk("getTV shows genere" , async()=>{
    const tvGenere = await TVGenere();
    return tvGenere;
});

const tvSlice = createSlice({
    name:"TvSlice" , 
    initialState:initialState,
    reducers:{} , 
    extraReducers:(builder) =>{
        builder
       .addCase(getTVPopular.pending , (state)=>{
        state.status = "loading";
        state.error = null;
       })
       .addCase(getTVPopular.fulfilled , (state,action)=>{
            state.popular = action.payload;
            state.status = "succeeded";
       })
       .addCase(getTVPopular.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
       })
       .addCase(getAiringToday.pending , (state)=>{
            state.status = "loading";
            state.error = null;
       })
       .addCase(getAiringToday.fulfilled , (state,action)=>{
            state.airingToday = action.payload;
            state.status = "succeeded";
       })
       .addCase(getAiringToday.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
       })
       .addCase(getTopRatedTV.pending , (state)=>{
            state.status = "loading";
            state.error = null;
       })
       .addCase(getTopRatedTV.fulfilled , (state,action)=>{
            state.topRated = action.payload;
            state.status = "succeeded";
       })
       .addCase(getTopRatedTV.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
       })
       .addCase(getTVGenere.pending , (state)=>{
            state.status = "loading";
            state.error = null;
       })
       .addCase(getTVGenere.fulfilled , (state,action)=>{
            state.genere = action.payload;
            state.status = "succeeded";
       })
       .addCase(getTVGenere.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
       })

    }

})

export const tvReducer = tvSlice.reducer;


