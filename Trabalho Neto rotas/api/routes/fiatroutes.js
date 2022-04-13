const controllerfiat = require('../controllers/fiatcontrollers');

app.get('/fiat/fiatmenu', controllerfiat.menufiat);

