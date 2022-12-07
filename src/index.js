const express= require('express');
const app = express();
app.use(express.json());

const morgan =require('morgan');
//configuraciones
app.set('puerto' , process.env.PORT || 2022);
// middlewares
app.use(morgan('runs'));
//  rutas para mi aplicacion
app.use(require('./router/router'))
// inicia el servidor NODE
app.listen(app.get('puerto'), ()=>{
    console.log('El servidor corriendo en el puerto',app.get('puerto') )
})