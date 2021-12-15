import { render, screen, fireEvent } from '@testing-library/react';
import CheckBox from './Checkbox';

test('Checkbox must be rendered', () => {
    render(<CheckBox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
});

test('Checkbox must be checked when receive checked propertie', () => {
    render(<CheckBox checked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
});

test('Chechbox must call a function when pressed', () => {
    const mockFunction = jest.fn();
    render(<CheckBox onChange={mockFunction} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(mockFunction).toHaveBeenCalled();
});

test('Checkbox must have a label', () => {
    render(<CheckBox />);
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
    expect(checkbox).toBeInTheDocument();
});
