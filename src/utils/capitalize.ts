/**
 * Coloca a primeira letra de uma string como maiuscula
 * 
 * @param {string} text - A string que deseja capitalizar a primeira letra
 * @returns {string} - A string capitalizada
 */
export function capitalize(text: string): string {
    const letters: Array<string> = text.split('');

    const firstLetter = letters[0].toUpperCase();
    const newStringWithCapitalize = firstLetter + letters.splice(1, letters.length).join('');

    return newStringWithCapitalize;
}
