/**
 * Formata uma data no formato yyyy-MM-dd para dd/MM/yyyy.
 * 
 * @param {string} date - A data no formato yyyy-MM-dd.
 * @returns {string} - A data formatada no formato dd/MM/yyyy.
 */
export function formateDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

