import './TextField.css';

const TextField = (props) => {
    const onTyped = (e) => {
        props.onChanged(e.target.value);
    }

    return (   
        <div className='text-field'>
            <label htmlFor={props.for}>{props.label}</label>
            <input type={props.type} id={props.id} value={props.value} onChange={onTyped} placeholder={props.placeholder} required={props.required} />
        </div>
    )
}

export default TextField;