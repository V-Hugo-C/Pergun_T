
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/Pergunta");

//Database
connection.authenticate()
    .then(() => {
        console.log("Conexão com o banco feita com sucesso")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    });

//Conectanto o EJS com Express
app.set('view engine','ejs');
app.use(express.static('public'));

// BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Rotas
app.get("/", (req,res) => {
    res.render("index");
});

app.get("/perguntar", (req,res) =>{
    res.render("perguntar");
});

app.post("/saveask", (req,res)=> {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido, titulo :" + titulo +" "+"descricao "+ descricao );
});

app.listen(8080,()=>{
    console.log("APP Rodando");
});