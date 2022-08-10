const express = require('express');
const { usuario } = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', async function(req, res){
  var resultado = await usuario.findAll();
  res.json(resultado);
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});