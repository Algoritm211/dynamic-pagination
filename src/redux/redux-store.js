import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import photosSlice from "./photosSlice";


const rootReducer = combineReducers({
  photosSlice: photosSlice
})

const store = configureStore({
  reducer: rootReducer
})


export default store

