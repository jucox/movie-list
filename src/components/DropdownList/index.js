import './DropdownList.css';

const DropdownList = (props) => {
    return (
        <div className='dropdown-list'>
            <label htmlFor={props.for}>{props.label}</label>
            <select
                id={props.id}
                required={props.required}
                value={props.value}
                onChange={e => props.onChanged(e.target.value)}
            >
                <option value="">Select</option>
                {props.items.map(
                    item => <option key={item}>{item}</option>
                )}
            </select>
        </div>    
    )
}

export default DropdownList;