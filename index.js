import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { create } from 'express-handlebars';
import { readFileSync } from 'fs';

// Configure the filename and dirname variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Handlebars instance with partials directory
const hbs = create({partialsDir: [path.join(__dirname, 'views', 'partials')]});

// Read JSON data (ensure 'data.json' is included in your deployment or use environment variables)
const jsonData = JSON.parse(readFileSync(path.join(__dirname, 'public', 'data', 'data.json'), 'utf8'));

const app = express();

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Define routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/noticia/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = jsonData.noticias.find(item => item.id === id);
    res.render('page', {
        layout: 'noticia',
        title: item ? item.title : 'Título não encontrado',
        noticiaTitulo: item ? item.noticiaTitulo : 'Título não encontrado',
        info: item ? item.info : 'Conteúdo não encontrado',
        sections: item ? item.sections : []
    });
});

// Listen on port 3000 (Vercel uses a different port)
app.listen(process.env.PORT || 3000, () => console.log(`App rodando na porta ${process.env.PORT || 3000}`));
