module.exports = {
    menurespiratorio,}

function menurespiratorio(req, res) {
    res.render("respiratorio/formrespiratorioindex.ejs", {
        title: 'Respiratório', 
        texto: "Respiratório"});} 
