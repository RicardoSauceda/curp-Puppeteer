const express = require('express');
const router = express.Router();
const { consultarCURP } = require('../curpService');

router.post('/', async (req, res) => {
    const { curp } = req.body;
    if (!curp) {
        return res.status(400).json({ codigo: 400, error: 'Falta el parámetro curp' });
    }
    try {
        const resultado = await consultarCURP(curp);
        if (resultado.codigo === 404) {
            return res.status(404).json(resultado);
        }
        res.json(resultado);
    } catch (err) {
        res.status(500).json({ codigo: 500, error: 'Error al consultar CURP', detalle: err.message });
    }
});

module.exports = router;
