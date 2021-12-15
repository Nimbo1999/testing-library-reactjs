import { render, screen, fireEvent } from '@testing-library/react';
import ColorButton from './ColorButton';

test('Button has correct initial color', () => {
    render(<ColorButton />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('Button has correct initial text', () => {
    render(<ColorButton />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toHaveTextContent('Change to blue');
});

test('Button has white label text', () => {
    render(<ColorButton />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toHaveStyle({ color: 'white' });
});

test('Button turns blue when clicked', () => {
    render(<ColorButton />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });

    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
    expect(colorButton).toHaveTextContent('Change to blue');

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
    expect(colorButton).toHaveTextContent('Change to red');
});

test('Button can not call a function when disabled', () => {
    render(<ColorButton disabled />);

    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

    fireEvent.click(colorButton);

    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});