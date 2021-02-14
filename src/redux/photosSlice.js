import {createSlice} from "@reduxjs/toolkit";
import {photosAPI} from "../api/photos-api";


const photosSlice = createSlice({
  name: 'photos',
  initialState: {totalCount: 0, photos: []},
  reducers: {
    setPhotosInfo: (state, action) => {
      state.totalPages = parseInt(action.payload.totalCount)
      state.photos.push(...action.payload.photos)
    }
  }
})


export const {setPhotosInfo} = photosSlice.actions
export default photosSlice.reducer


export const loadPhotos = (pageNumber) => async (dispatch) => {
  const data = await photosAPI.fetchPhotos(pageNumber)
  dispatch(setPhotosInfo(data))
}
