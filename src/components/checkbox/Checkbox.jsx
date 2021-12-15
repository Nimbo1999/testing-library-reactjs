const CheckBox = ({ checked, onChange }) => {
    return <input type="checkbox" onChange={onChange} checked={checked} aria-checked={checked} />;
}

export default CheckBox;
