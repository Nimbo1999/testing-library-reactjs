import { useState } from 'react';

function App() {
    const [ backgroundColor, setBackgroundColor ] = useState('red');

    const onClick = () => backgroundColor === 'red' ? setBackgroundColor('blue') : setBackgroundColor('red');

    return (
        <div>
            <button
                style={{ backgroundColor }}
                onClick={onClick}
            >
                Change to {backgroundColor === 'red' ? 'blue' : 'red'}
            </button>
        </div>
    );
}

export default App;
