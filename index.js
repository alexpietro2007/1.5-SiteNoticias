import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import hand from 'express-handlebars'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const hbs = hand.create({partialsDir: ["views/partials"]})


const app = express();

app.use('/public', express.static(path.join(__dirname, 'Projeto/public')));

app.engine('handlebars', hbs.engine)
app.set("view engine", "handlebars")

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/oda', (req, res) =>{

})

app.listen(3000, () => console.log('App rodando na porta localhost:3000'));