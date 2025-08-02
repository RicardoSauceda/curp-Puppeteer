
const express = require('express');
const bodyParser = require('body-parser');
const curpRouter = require('./routes/curp');

const app = express();
app.use(bodyParser.json());
app.use('/curp', curpRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servicio CURP escuchando en http://localhost:${PORT}`);
});