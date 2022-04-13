module.exports = {
    menumuscular,
    menusuperiores,
    menucutaneos}

function menumuscular(req, res) {
    res.render("muscular/formmuscularindex.ejs",{
        title: 'Muscular', 
        texto: "Muscular"});} 

function menusuperiores(req, res){
            res.render("muscular/formsuperiores.ejs", {
                title: 'Superiores',
                texto: 'Superiores'})}
        
function menucutaneos(req, res){
            res.render("muscular/formcutaneos.ejs", {
                title: "Cutâneos",
                texto: "Cutâneos"})}