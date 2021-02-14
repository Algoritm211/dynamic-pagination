import axios from "axios";


const instanceAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})


export const photosAPI = {
  fetchPhotos(pageNumber) {
    return instanceAxios.get(`photos?_limit=20&_page=${pageNumber}`).then(data => {
      return {
        photos: data.data,
        totalCount: data.headers['x-total-count']
      }
    })
  }
}
