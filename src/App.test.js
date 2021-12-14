import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct initial color', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('Button has correct initial text', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toHaveTextContent('Change to blue');
});

test('Button turns blue when clicked', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });

    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
    expect(colorButton).toHaveTextContent('Change to blue');

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
    expect(colorButton).toHaveTextContent('Change to red');
});
