const { menu, kategori } = require('../models');

module.exports = {

    // post menu
    postDataMenu: (req,res) => {
        const {body} = req

        const newData = {
            ...body,
            Image : req.Image.url,
        }

        menu.create(newData)
        .then((data) => {
            res.status(200).send({
                msg: 'succes post data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed post data',
                status : 500,
                error
            })
        })
    },

    getAllData: (req,res) => {
        menu.findAll({
            include: [{
                model: kategori,
                as: "kategoris",
                attributes: ['nama_kategori']
            }]
        })
        .then((data) => {
            res.status(200).send({
                msg: 'succes get all data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed get all data',
                status : 500,
                error
            })
        })
    },
    DeletData: (req,res) => {
        const {id} = req.params;

        menu.destroy({where: {id}})
        .then((data) => {
            res.status(200).send({
                msg: 'succes delete data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed delete data',
                status : 500,
                error
            })
        })
    },
    updateData: (req,res) => {
        const {id} = req.params;
        const {body} = req;

        menu.update(body,{where: {id}})
        .then((data) => {
            res.status(200).send({
                msg: 'succes update data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed update data',
                status : 500,
                error
            })
        })
    },
    GetById: (req,res) => {
            const {id} = req.params;
    
            menu.FindOne({where: {id}})
            .then((data) => {
                res.status(200).send({
                    msg: 'succes Get data',
                    status : 200,
                    data
                })
            })
            .catch((error) => {
                res.status(500).send({
                    msg: 'failed Get data',
                    status : 500,
                    error
                })
            })
        },
        searchBytiytle: (req, res) => {
            const {nama} = req.query;
            menu.findAll({where: {nama: {[Op.Like]: '%'+nama+'%'}}})
            .then((data) => {
                res.status(200).send({
                    msg: 'succes search data',
                    status: 200,
                    data
                })
                })
                .catch((error) => {
                    res.status(500).send({
                        msg: 'failed search data',
                        status: 500,
                        error
                    })
                })
            
            }
        }
    
