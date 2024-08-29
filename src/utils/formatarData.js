/**
 * Formata uma data no formato yyyy-MM-dd para dd/MM/yyyy.
 * 
 * @param {string} data - A data no formato yyyy-MM-dd.
 * @returns {string} - A data formatada no formato dd/MM/yyyy.
 */
function formatarData(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

export default formatarData;
