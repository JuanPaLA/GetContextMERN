const express = require('express')
const router = express.Router()

const moduloModel = require('../../model/modulos')

router.get('/modulos/test', (req, res) => {
    res.send({ msg: 'modulos locos.' })
})

router.get('/modulos/all', (req, res) => {
    moduloModel.find({})
        .then(files => { res.send(files)})
        .catch(err => console.log(err));
});

router.get('/modulos/info/:id', (req, res) => {
    moduloModel.findById({ _id: req.params.id })
    .then(info => res.json(info.info))
})

module.exports = router