const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./models/index");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

var corsOptions = {
    origin: "http://localhost:8081"
};


app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({message: "Teste pagina de cadastro de usuários."});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});