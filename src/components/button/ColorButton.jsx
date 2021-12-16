import { useState } from 'react';

const ColorButton = ({ disabled }) => {
    const [ backgroundColor, setBackgroundColor ] = useState('MediumVioletRed');

    const onClick = () => backgroundColor === 'MediumVioletRed'
        ? setBackgroundColor('MidnightBlue')
        : setBackgroundColor('MediumVioletRed');

    return (
        <button
            style={{ backgroundColor: disabled ? 'gray' : backgroundColor, color: 'white' }}
            onClick={onClick}
            disabled={disabled}
            
        >
            Change to {backgroundColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'}
        </button>
    )
}

export default ColorButton;
