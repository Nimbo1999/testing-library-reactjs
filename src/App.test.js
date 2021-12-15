import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Centered functional tests of button with checkbox', () => {

    test('Initial conditions', () => {
        render(<App />);

        const colorButton = screen.getByRole('button');
        expect(colorButton).toBeEnabled();

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
    });

    test('When checkbox is checked, button should be disabled', () => {
        render(<App />);

        const checkBox = screen.getByRole('checkbox');

        fireEvent.click(checkBox);
        expect(checkBox).toBeChecked();

        const colorButton = screen.getByRole('button');
        expect(colorButton).toBeDisabled();
    });

    test('Button will be gray when disabled', () => {
        render(<App />);

        const checkBox = screen.getByRole('checkbox');
        const colorButton = screen.getByRole('button');
        fireEvent.click(checkBox);

        expect(colorButton).toBeDisabled();
        expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
        fireEvent.click(checkBox);

        expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
        fireEvent.click(colorButton);
        fireEvent.click(checkBox);
        expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
        fireEvent.click(checkBox);
        expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
    });

});

