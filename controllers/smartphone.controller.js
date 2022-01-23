const Smartphone = require('../models/smartphone.model.js');

// .Env
const dotenv = require('dotenv');
dotenv.config();

notify = function(req){
    if( process.env.DEV_MODE == 1 ){

        let  URL = (process.env.IS_HTTPS ? 'https://' : 'http://') 
        + process.env.HOSTNAME + ":" + process.env.PORT + req.originalUrl;
        console.log(`Link: ${URL}`);
    }
}

exports.create = (req, res) => {
    let smartphone = new Smartphone(
        {
            name: req.body.name,
            brand: req.body.brand,
            image: req.body.image,
            price: req.body.price,
            release: req.body.release
        }
    );
    smartphone.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send({
            message: `Smartphone ${req.body.name} created successfully!`
        })
    })
    notify(req);
};

exports.retrieve = (req, res) => {
    Smartphone.findById(req.params._id, function (err, data) {
        if( !data ){
            res.send({"Error" : "Data not found"});
            return false;
        }
        if (err){
            res.send(err);
        }
        res.json({
            name: data.name,
            brand: data.brand,
            image: data.image,
            price: data.price,
            release: data.release
        });
    });
    notify(req);
};

exports.update = function (req, res) {
    Smartphone.findById(req.params._id, function (err, data) {
        if( !data ){
            res.send({"Error" : "Data not found"});
            return false;
        }

        if (err){
            res.send(err);
        }

        data.name = req.body.name || data.name;
        data.brand = req.body.brand || data.brand;
        data.image = req.body.image || data.image;
        data.price = req.body.price || data.price;
        data.release = req.body.release || data.release;
        
        data.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: `Smartphone ${data.name} Updated Successfully!`,
                data: data
            });
        });
    });
    notify(req);
};

exports.delete = function (req, res) {
    Smartphone.deleteOne({
        _id: req.params._id
    }, function(err, data){
        if( data.deletedCount < 1 ){
            res.send({"Error" : "Data not found"});
            return false;
        }

        if(err){
            res.send(err)
        }
        res.json({
            message: `Smartphone Deleted Successfully!`,
            row: data.deletedCount
        })
    })
    notify(req);
}