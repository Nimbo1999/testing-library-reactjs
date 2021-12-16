import { replaceCamelWithSpaces } from './string.utils';

describe('Replace camelcase with space between words', () => {
    test('Should work for no inner capital letters', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });

    test('Should work for one inner capital letters', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });

    test('Should work for two inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });

    test('Should return empty string when no args have been provided', () => {
        expect(replaceCamelWithSpaces()).toBe('');
    });

    test('Should return empty string when something diferent than a string have been provided', () => {
        expect(replaceCamelWithSpaces(null)).toBe('');
        expect(replaceCamelWithSpaces(1)).toBe('');
        expect(replaceCamelWithSpaces({ test: '' })).toBe('');
        expect(replaceCamelWithSpaces([1, 2])).toBe('');
        expect(replaceCamelWithSpaces(() => {})).toBe('');
    });
});