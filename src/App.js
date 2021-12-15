import { useState } from 'react';

import ColorButton from './components/button/ColorButton';
import CheckBox from './components/checkbox/Checkbox';

function App() {
    const [disabled, setDisabled] = useState(false);

    const onPressOnChange = ({ target }) => setDisabled(target.checked);

    return (
        <div>
            <ColorButton disabled={disabled} />

            <CheckBox checked={disabled} onChange={onPressOnChange} />
        </div>
    );
}

export default App;
