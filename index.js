import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use('/css', express.static(path.join(__dirname, 'Projeto/css')));
app.use('/imgs', express.static(path.join(__dirname, 'Projeto/imgs')))

app.get('/', function (req, res) {
    res.redirect('/index');
});
app.get('/index', function (req, res) {
    let index = path.resolve(__dirname, 'Projeto/html/index.html');
    res.sendFile(index);
});
app.get('/paginaNoticias', function (req, res) {
    let pagina = path.resolve(__dirname, 'Projeto/html/paginaNoticias.html');
    res.sendFile(pagina);
});
app.get('/paginaNoticias1', function (req, res) {
    let pagina1 = path.resolve(__dirname, 'Projeto/html/paginaNoticias1.html');
    res.sendFile(pagina1);
});
app.get('/paginaNoticias2', function (req, res) {
    let pagina2 = path.resolve(__dirname, 'Projeto/html/paginaNoticias2.html');
    res.sendFile(pagina2);
});
app.get('/paginaNoticias3', function (req, res) {
    let pagina3 = path.resolve(__dirname, 'Projeto/html/paginaNoticias3.html');
    res.sendFile(pagina3);
});
app.get('/paginaNoticias4', function (req, res) {
    let pagina4 = path.resolve(__dirname, 'Projeto/html/paginaNoticias4.html');
    res.sendFile(pagina4);
});
app.get('/paginaNoticias5', function (req, res) {
    let pagina5 = path.resolve(__dirname, 'Projeto/html/paginaNoticias5.html');
    res.sendFile(pagina5);
});
app.get('/paginaNoticias6', function (req, res) {
    let pagina6 = path.resolve(__dirname, 'Projeto/html/paginaNoticias6.html');
    res.sendFile(pagina6);
});
app.get('/paginaNoticias7', function (req, res) {
    let pagina7 = path.resolve(__dirname, 'Projeto/html/paginaNoticias7.html');
    res.sendFile(pagina7);
});
app.get('/paginaNoticias8', function (req, res) {
    let pagina8 = path.resolve(__dirname, 'Projeto/html/paginaNoticias8.html');
    res.sendFile(pagina8);
});
app.get('/paginaNoticias9', function (req, res) {
    let pagina9 = path.resolve(__dirname, 'Projeto/html/paginaNoticias9.html');
    res.sendFile(pagina9);
});
app.get('/paginaNoticias10', function (req, res) {
    let pagina10 = path.resolve(__dirname, 'Projeto/html/paginaNoticias10.html');
    res.sendFile(pagina10);
});
app.get('/paginaNoticias11', function (req, res) {
    let pagina11 = path.resolve(__dirname, 'Projeto/html/paginaNoticias11.html');
    res.sendFile(pagina11);
});

app.listen(3000, () => console.log('App rodando na porta 3000'));