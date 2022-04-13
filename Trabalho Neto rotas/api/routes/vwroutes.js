const controllervw = require('../controllers/vwcontrollers');

app.get('/vw/vwmenu', controllervw.menuvw);

app.get('/vw/brasilia', controllervw.menubrasilia);
app.get('/vw/brasilia/mecanica', controllervw.menumecanica)
