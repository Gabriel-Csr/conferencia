module.exports = {
    menuchevrolet,
}

function menuchevrolet(req, res) {
    res.render("chevrolet/formchevroletindex.ejs",{
        title: 'Chevrolet', 
        texto: "Chevrolet"})} 
