import './MovieCard.css';

const MovieCard = (props) => {
    return (
        <div className='movie-card'>
            <div className='header' style={{ backgroundColor: props.backgroundColor }}>
                <img src={props.image} alt={props.genre} />
            </div>
            <div className='footer'>
                <h4>{props.title}</h4>
                <h5>Your rating: {props.rating}</h5>
            </div>
        </div>
    )
}

export default MovieCard;