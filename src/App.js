import './App.css';
import React, {useState, useEffect} from 'react'
import PhotosElement from "./components/Photos/PhotosElement";
import {useDispatch, useSelector} from "react-redux";
import {loadPhotos} from "./redux/photosSlice";
import {getPhotos, getTotalPhotos} from "./redux/photos-selector";

function App() {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [isFetching, setIsFetching] = useState(true)
  const photos = useSelector(getPhotos)
  const totalCount = useSelector(getTotalPhotos)

  useEffect(() => {
    if (isFetching && (photos.length !== totalCount)) {
      dispatch(loadPhotos(page))
      setPage((prevPage) => prevPage + 1)
      setIsFetching(false)
    }
  }, [dispatch, isFetching])


  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = (event) => {
    if (event.target.documentElement.scrollTop + window.innerHeight > event.target.documentElement.offsetHeight - 10) {
      setIsFetching(true)
    }
  }


  const photosBlock = photos.map((photo) => {
    return <PhotosElement photo={photo} key={photo.id}/>
  })

  return (
    <div className="App">
      {photosBlock}
    </div>
  );
}

export default App;
