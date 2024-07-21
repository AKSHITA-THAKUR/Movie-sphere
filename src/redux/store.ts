import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "../feature/movieSlice";
import { tvReducer } from "../feature/TvSlice";
 export const store = configureStore({
    reducer: {
        movies: movieReducer,
        TvSlice:tvReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

