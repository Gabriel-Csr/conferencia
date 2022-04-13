const controllermuscular = require('../controllers/muscularcontrollers');

app.get('/muscular/muscularmenu', controllermuscular.menumuscular);
app.get('/muscular/superiores', controllermuscular.menusuperiores);
app.get('/muscular/superiores/cutaneos', controllermuscular.menucutaneos)
