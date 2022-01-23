require('./app')

const mongoose = require('mongoose');

const Smartphone = require('/var/opt/ipg/nodejs_smartphone/models/smartphone.model.js');

function seedSmartphones() {

    // Source: https://www.gsmarena.com/
    const smartphones = [
        {"name": "Galaxy S21 FE 5G",  "brand": "Samsung", "image": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-fe-5g.jpg", "price": 819.00, "release" : 2022},
        {"name": "iPhone 12 mini",  "brand": "Apple", "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg", "price": 807.30, "release" : 2020},
        {"name": "Nova 8",  "brand": "Huawei", "image": "https://fdn2.gsmarena.com/vv/bigpic/huawei-nova-8.jpg", "release" : 2021},
        {"name": "X100",  "brand": "Nokia", "image": "https://fdn2.gsmarena.com/vv/bigpic/nokia-x100.jpg", "release" : 2021},
        {"name": "P50 Pocket",  "brand": "Huawei", "image": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p50-pocket.jpg", "release" : 2021},
        {"name": "W41 Pro",  "brand": "LG", "image": "https://fdn2.gsmarena.com/vv/bigpic/lg-w41-pro.jpg", "release" : 2021},
        {"name": "Liquid X2",  "brand": "ACER", "image": "https://fdn2.gsmarena.com/vv/bigpic/acer-liquid-x2-1.jpg", "release" : 2016},
        {"name": "Moto Tab G70",  "brand": "Motorola", "image": "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-tab-g70.jpg", "release" : 2004},
        {"name": "iPhone 13 Pro Max",  "brand": "APPLE", "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg", "price": 1349.00, "release" : 2021},
        {"name": "Legion 2 Pro",  "brand": "LENOVO", "image": "https://fdn2.gsmarena.com/vv/bigpic/lenovo-legion-2-pro-phone-duel2-1.jpg", "price": 42.3, "release" : 2007},
        {"name": "Predator 8",  "brand": "ACER", "image": "https://fdn2.gsmarena.com/vv/bigpic/acer-predator-8.jpg", "price": 242.3, "release" : 2015}
    ];

    for ( smartphone of smartphones ) {
        var data = new Smartphone(smartphone);
        data.save()
    }

    //const s = Smartphone.find();
    //console.log('Smartphone: ', s);

    console.log("Seed data done :)");
}

seedSmartphones()