import Express from 'express'
import cors from 'cors'
import { Anuncio, Prisma, PrismaClient } from '@prisma/client'
import { converterHourasStringParaMinutos } from './utils/ConverterHorasParaMinutos'
import { ConvertMinutosParaHorasString } from './utils/ConvertMinutosParaHoras'

const app = Express()

app.use(Express.json())
app.use(cors())

const prisma = new PrismaClient({
    log: ["query"]
})

app.get('/games', async (request, response) => {

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    Anuncios: true,
                }
            }
        }
    })

    return response.json(games)
})

app.post('/game/:gameId/anuncios', async (request, response) => {

    const gameId: number = +request.params.gameId

    var anuncioRequisicao: any = request.body

    console.log(anuncioRequisicao);

    const anuncio = await prisma.anuncio.create({
        data: {
            gameId: gameId,
            Name: anuncioRequisicao.Name,
            AnosDeJogo: anuncioRequisicao.AnosDeJogo,
            DiasDaSemana: anuncioRequisicao.DiasDaSemana.join(','),
            Discord: anuncioRequisicao.Discord,
            HorasFinal: converterHourasStringParaMinutos(anuncioRequisicao.HorasFinal),
            HorasInicio:converterHourasStringParaMinutos(anuncioRequisicao.HorasInicio),
            UsaChatDeVoz: anuncioRequisicao.UsaChatDeVoz
        }
    })

    return response.status(201).json(anuncio)
})

app.get('/games/:id/anuncios', async (request, response) => {
    
    const IdGame : number = +request.params.id

    const anuncios = await prisma.anuncio.findMany({
        select: {
            Id: true,
            Name: true,
            AnosDeJogo: true,
            DiasDaSemana: true,
            HorasFinal: true,
            HorasInicio: true,
            UsaChatDeVoz: true
        },
        where: {
            gameId: IdGame,
        },
        orderBy: {
            DataCriacao: "desc",
        }
    })

    var retorno = MontaRetornoAnuncios(anuncios);

    return response.json(retorno)
})

app.get("/anuncios/:id/discord", async (request, response) =>{

    const idAnuncio : number = +request.params.id

    const anuncio = await prisma.anuncio.findUniqueOrThrow({
        select: {
            Discord: true
        },
        where: {
            Id: idAnuncio
        }
    }) 

    response.send(anuncio);

});

app.listen(3333);

function MontaRetornoAnuncios(anuncios: any[]){

    const anunciosDTO = anuncios.map(anuncio => {
        return {
            ...anuncio,
            DiasDaSemana: anuncio.DiasDaSemana.split(','),
            HorasInicio: ConvertMinutosParaHorasString(anuncio.HorasInicio),
            HorasFinal: ConvertMinutosParaHorasString(anuncio.HorasInicio)
        }
    })

return anunciosDTO;
}
