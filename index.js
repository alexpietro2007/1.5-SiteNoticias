import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { create } from 'express-handlebars';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const hbs = create({partialsDir: [path.join(__dirname, 'views', 'partials')]});

// Verifique se o arquivo JSON está acessível
const jsonDataPath = path.join(__dirname, 'public', 'data', 'data.json');
let jsonData;
try {
    jsonData = JSON.parse(readFileSync(jsonDataPath, 'utf8'));
} catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    process.exit(1); // Saia do processo se não conseguir ler o arquivo
}

const app = express();

// Servir arquivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// Configurar Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
// Definir rotas
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

// Ouça na porta fornecida pelo ambiente de execução
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));
