import React from 'react'

export default function MoviesList(props) {

	return (
		props.moviesProp.map(movie =>
		(
			<div key={movie._id}>
				<h3>{movie.title}</h3>
				<p>Directed by: {movie.director}</p>
				{movie.IMDBRating > 9 && <p>🙀</p>}
				{movie.hasOscars ? <p>Oscar Winner 🏆</p> : <p>No Oscar 🙈</p>}
			</div>
		))
	)
}
