const express = require("express");
const jwt = require('jsonwebtoken')
const {expressjwt: expressJWT} = require('express-jwt')
const cors = require('cors')
const cookieParse = require('cookie-parse')


//const { usuario } = require('./models');

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors())
app.use(cookieParse())



app.get("/", async function (req, res) {
  // var resultado = await usuario.findAll();
  // res.json(resultado);
});

app.get("/autenticar", async function (req, res) {
  res.render("autenticar");
});

app.post("/logar", async function (req, res) {
  if (req.body.login == "igor" && req.body.password == "admin") {
    // res.json('Login Realizado')
    res.write(`<p><strong>User:</strong>${req.body.login}</p>`);
  } else {
    res.json("Usuário ou Senha Incorreta");
  }
});

app.post("/deslogar", async function (req, res) {
  // var resultado = await usuario.findAll();
  // res.json(resultado);
});

app.get("/inscrever", async function (req, res) {
  res.render("inscrever");
});

app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});
