import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import hand from 'express-handlebars'
import fs from 'fs'
import { title } from 'process'
const log = console.log
var id = 0;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const hbs = hand.create({partialsDir: ["views/partials"]})
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, './public', 'data', 'data.json')))

const app = express();

app.use('/public', express.static(path.join(__dirname, './public')));

app.engine('handlebars', hbs.engine)

app.set("view engine", "handlebars")

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/noticia/:id', (req, res) =>{
    id = parseInt(req.params.id, 10);
    var item = jsonData.noticias.find(item => item.id === id)
    res.render('page', {
        layout: 'noticia',
        title: item ? item.title: 'Titulo não encontrado',
        noticiaTitulo: item ? item.noticiaTitulo: 'Titulo não encontrado',
        info: item ? item.info: 'Conteudo não encontrado',
        sections: item ? item.sections : []
    })
})

app.listen(3000, () => log('App rodando na porta localhost:3000'))