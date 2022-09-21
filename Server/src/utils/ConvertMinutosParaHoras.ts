
/**
 * @param minutos 
 * tem que chegar assim: 630
 * @returns 
 * returna assim: 10:30
 */

export function ConvertMinutosParaHorasString(minutos: number){

    const horas = Math.floor(minutos / 60);
    const minutosHora = minutos % 60;

    return `${String(horas).padStart(2,'0')}:${String(minutosHora).padStart(2,'0')}`;
}