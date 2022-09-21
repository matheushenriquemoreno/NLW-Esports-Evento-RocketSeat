
/**
 * @param horasString 
 * tem que chegar assim: 10:30
 * @returns 
 * returna assim: 10 * 60 + 30 = 630
 */

export function converterHourasStringParaMinutos(horasString: string){
    const [horas, minutos] = horasString.split(':').map(Number);


    const conversaoHorasParaMinutos = (horas * 60) + minutos;

    return conversaoHorasParaMinutos
}