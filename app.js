const express = require('express');
const app = express();
const routes = require('./src/routes/main.routes')
const port = process.env.PORT || 3000;

//Rutas- Acá designamos la responsabilidad a routes
app.use('/',routes);

//archivos estáticos
app.use(express.static('public'));

//server
app.listen(port,(req,res) => {
    console.log(`corriendo en el puerto ${port}`)
});