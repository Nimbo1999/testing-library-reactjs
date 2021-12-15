const CheckBox = ({ checked, onChange }) => {
    return (
        <div>
            <input id="app-checkbox" type="checkbox" onChange={onChange} checked={checked} aria-checked={checked} />
            <label htmlFor="app-checkbox">Disable button</label>
        </div>
    );
}

export default CheckBox;
