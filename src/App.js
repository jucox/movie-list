import { useState } from 'react';
import Form from './components/Form';
import Genre from './components/Genre';

function App() {

  const genres = [
    {
      name: 'Action/Adventure',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    },
    {
      name: 'Animation',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    },
    {
      name: 'Comedy',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    },
    {
      name: 'Documentary',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    },
    {
      name: 'Drama',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    },
    {
      name: 'Horror',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    },
    {
      name: 'Romance',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    },
    {
      name: 'Science Fiction/Fantasy',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    },
    {
      name: 'Thriller',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    },
    {
      name: 'Other',
      primaryColor: '#0F4C75',
      backgroundColor: '#BBE1FA'
    }
  ];

  const [movies, setMovies] = useState([]);

  const onNewMovieAdded = (movie) => {
    debugger;
    setMovies([...movies, movie]);
  }

  return (
    <div className="App">
        <Form
          genres={genres.map(genre => genre.name)}
          onNewMovieRegistering={
            movie => onNewMovieAdded(movie)
          }
        />

        {genres.map(genre => <Genre
          key={genre.name}
          genreName={genre.name}
          primaryColor={genre.primaryColor}
          backgroundColor={genre.backgroundColor}
          movies={movies.filter(movie => movie.genre === genre.name)}
        />)}
    </div>
  );
}

export default App;