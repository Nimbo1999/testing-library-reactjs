export function replaceCamelWithSpaces(colorName) {
    if (typeof colorName !== 'string') return '';
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}