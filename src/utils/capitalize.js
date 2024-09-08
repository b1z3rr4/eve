export function capitalize(string) {
    const arrayDeLetras = string.split('');
    const primeiraLetra = arrayDeLetras[0].toUpperCase();
    const novaString = primeiraLetra + arrayDeLetras.splice(1, arrayDeLetras.length).join('');
    return novaString;
}
