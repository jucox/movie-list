import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css'

const Form = (props) => {
    
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [genre, setGenre] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        props.onNewMovieRegistering({
            title,
            rating,
            image,
            genre
        });
        setTitle('');
        setRating('');
        setImage('');
        setGenre('');
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>FIll the form to add a movie</h2>
                <TextField
                    label="Movie title"
                    for="movie-title"
                    id="movie-title"
                    placeholder="Type the movie title"
                    type="text"
                    required={true}
                    value={title}
                    onChanged={value => setTitle(value)}
                />
                <DropdownList
                    label="Genre"
                    for="genre"
                    id="genre"
                    items={props.genres}
                    required={true}
                    value={genre}
                    onChanged={value => setGenre(value)}
                />
                <TextField
                    label="Your rating"
                    for="rating"
                    id="rating"
                    placeholder="Type your personal rating"
                    type="number"
                    required={true}
                    value={rating}
                    onChanged={value => setRating(value)}
                />
                <TextField
                    label="Cover image"
                    for="image-address"
                    id="image-address"
                    placeholder="Paste the movie cover image"
                    type="text"
                    required={true}
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <Button>
                    Add movie
                </Button>
            </form>
        </section>
    )
}

export default Form;