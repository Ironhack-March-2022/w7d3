import { useState } from 'react'
import './App.css'
import MoviesList from './MoviesList'
import { v4 as uuid } from 'uuid';

const moviesData = [
  {
    "_id": "1ae23ef1",
    "title": "The Godfather",
    "director": "Francis Coppola",
    "hasOscars": true,
    "IMDBRating": 9.2
  },
  {
    "_id": "1ae23ef2",
    "title": "Star Wars",
    "director": "George Lucas",
    "hasOscars": true,
    "IMDBRating": 8.7
  },
  {
    "_id": "1ae23ef3",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "hasOscars": false,
    "IMDBRating": 9.3
  },
  {
    "_id": "1ae23ef4",
    "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "hasOscars": false,
    "IMDBRating": 8.0
  },
  {
    "_id": "1ae23ef5",
    "title": "Sharknado",
    "director": "Anthony C. Ferrante",
    "hasOscars": false,
    "IMDBRating": 5.2
  },
  {
    "_id": "1ae23ef6",
    "title": "Titanic",
    "director": "James Cameron",
    "hasOscars": true,
    "IMDBRating": 8.9
  }
]

function App() {

  const [movies, setMovies] = useState(moviesData)

  const [title, setTitle] = useState('')

  const [director, setDirector] = useState('')

  const [rating, setRating] = useState(0)

  const [hasOscars, setHasOscars] = useState(false)

  console.log(movies)
  const addMovie = () => {
    // add the movie interstellar to the movies array in the state
    const newMovie = {
      _id: uuid(),
      title: 'Interstellar',
      director: 'Christopher Nolan',
      hasOscars: true,
      IMDBRating: 8.6
    }
    console.log(newMovie)
    setMovies([newMovie, ...movies])
  }

  const handleSubmit = event => {
    // console.log('submitting the form')
    event.preventDefault();
    // create a new movie object
    const newMovie = {
      _id: uuid(),
      title,
      director,
      rating,
      hasOscars
    }

    console.log(newMovie)
    // add this movie to the movies array in the state
    setMovies([newMovie, ...movies])
    // reset the input fields
    setTitle('')
    setRating(0)
    setDirector('')
    setHasOscars(false)
  }
  const handleTitleChange = event => {
    // console.log('changed')
    // this get's us the value from the input field
    // console.log(event.target.value)
    // set the state of title
    setTitle(event.target.value)
  }

  const handleDirectorChange = event => {
    setDirector(event.target.value)
  }

  const handleRatingChange = event => {
    setRating(event.target.value)
  }

  const handleHasOscarsChange = event => {
    setHasOscars(event.target.checked)
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <button onClick={addMovie}>Add the movie Interstellar</button> */}
      {/* form in react */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input type="text" value={title} onChange={handleTitleChange} />

        <label htmlFor="">Director: </label>
        <input type="text" value={director} onChange={handleDirectorChange} />

        <label htmlFor="">Rating: </label>
        <input type="number" value={rating} onChange={handleRatingChange} />

        <label htmlFor="">Has Oscars: </label>
        <input type="checkbox" checked={hasOscars} onChange={handleHasOscarsChange} />

        <button type="submit">Add this movie</button>
      </form>
      <MoviesList moviesProp={movies} />
      {/* </header> */}
    </div>
  )
}

export default App
