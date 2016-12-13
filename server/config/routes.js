var products = require('../controllers/products.js');
module.exports= function(app){
	app.get('/',products.home)
}