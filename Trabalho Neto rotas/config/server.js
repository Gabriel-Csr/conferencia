const express = require('express');
const consign = require('consign');
const path = require('path');

app = express();

app.set('views', path.join(__dirname, '../api/views'));
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));

app.set('port', 3000);

consign({ cwd: 'api' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(app.get('port'), () => {
    console.log('projeto rodando na porta: ', app.get('port'))})

module.exports = app;