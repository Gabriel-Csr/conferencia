const controllerhyundai = require('../controllers/hyundaicontrollers');

app.get('/hyundai/hyundaimenu', controllerhyundai.menuhyundai);
