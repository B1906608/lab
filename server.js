const express = require("express");
const cors = require("cors");
const config = require("./app/config");

const app = express();

app.use(cors({ origin: config.app.origin }));

app.use(express.json());

app.use(express.urlencoded({ extanded: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}.`);
});