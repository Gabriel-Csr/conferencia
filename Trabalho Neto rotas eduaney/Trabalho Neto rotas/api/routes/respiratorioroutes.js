const controllerrespiratorio = require('../controllers/respiratoriocontrollers');

app.get('/respiratorio/respiratoriomenu', controllerrespiratorio.menurespiratorio);
