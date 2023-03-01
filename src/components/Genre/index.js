import MovieCard from '../MovieCard';
import './Genre.css';

const Genre = (props) => {
    return (
        props.movies.length > 0 &&
        <section className='genre' style={
            { backgroundColor: props.backgroundColor }
        }>
            <h3 style={
                { borderColor: props.primaryColor }
            }>
                {props.genreName}
            </h3>
            <div className='movies'>
                {props.movies.map(movie =>
                    <MovieCard
                        key={movie.title}
                        title={movie.title}
                        rating={movie.rating}
                        image={movie.image}
                        backgroundColor={props.primaryColor}
                    />
                )}
            </div>
        </section>
    )
}

export default Genre;