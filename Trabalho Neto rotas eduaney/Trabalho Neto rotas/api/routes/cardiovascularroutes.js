const controllercardiovascular = require('../controllers/cardiovascularcontrollers');

app.get('/cardiovascular/cardiovascularmenu', controllercardiovascular.menucardiovascular);
