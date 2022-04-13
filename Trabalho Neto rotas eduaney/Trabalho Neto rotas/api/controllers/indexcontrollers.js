module.exports = {
    indexcontrollers,}

function indexcontrollers(req, res) {
    res.render('index.ejs', 
    {title: 'Projeto Rotas', 
     texto: "Menu Principal"});} 