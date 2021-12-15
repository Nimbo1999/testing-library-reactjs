import { useState } from 'react';

const ColorButton = ({ disabled }) => {
    const [ backgroundColor, setBackgroundColor ] = useState('red');

    const onClick = () => backgroundColor === 'red'
        ? setBackgroundColor('blue')
        : setBackgroundColor('red');

    return (
        <button
            style={{ backgroundColor, color: 'white' }}
            onClick={onClick}
            disabled={disabled}
        >
            Change to {backgroundColor === 'red' ? 'blue' : 'red'}
        </button>
    )
}

export default ColorButton;
