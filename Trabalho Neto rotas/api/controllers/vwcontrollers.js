module.exports = {
    menuvw,
    menubrasilia,
    menumecanica
}

function menuvw(req, res) {
    res.render("vw/formvwindex.ejs", {
        title: "VW",
        texto: "VW"})} 


function menubrasilia(req, res){
            res.render("vw/formbrasilia.ejs", {
                title: 'Brasília',
                texto: 'Brasília'})}
        
function menumecanica(req, res){
            res.render("vw/formmecanica.ejs", {
                title: "Mecânica",
                texto: "Mecânica"})}