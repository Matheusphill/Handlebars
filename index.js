const express = require("express")
const exphbs = require("express-handlebars")

const app =  express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.stetic("public"))

app.get('/', (requisicao,resposta)=>{
    resposta.render('home')
})

app.listen(3000,()=>{
    console.log("servidor rodendo na pporta 3000")
})