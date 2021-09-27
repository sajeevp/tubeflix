import GridItem from './movies/GridItem'
const axios = require('axios')

const Content = () => {
  let movies = []
  axios
    .get(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLH4-ezzxirAR6-9u_yeYIS_fjMNrOpBwd&key=AIzaSyBkmbe8BiH-W-2L96DwvfAJEnBEnRCY1lU'
    )
    .then(function (response) {
      movies = response.data.items
      console.log(movies);
    })
    .catch(function (error) {
      console.log(error)
    })
  return (
    <div className='container mx-auto py-4'>
      <div class='grid grid-cols-4 gap-4'>
        <GridItem items={movies} />
      </div>
    </div>
  )
}

export default Content
