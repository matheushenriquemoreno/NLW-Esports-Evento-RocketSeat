import Express from 'express'

const app = Express()

app.get('/games', (request, response) => {
    
    return response.json([
        {id: 1, nome: "anuncio"},
        {id: 2, nome: "anuncio"},
        {id: 2, nome: "anuncio"}
    ])

})


app.listen(3333);


