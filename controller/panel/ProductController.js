"use strict";

const Product = require('../../model/Product');

const RegularExpressions = require('../../model/RegularExpressions');

const Response = require('../../model/Response');

module.exports.GetProductsListAction = async ( req , res )=>{

    try{

        let products = await Product.findAll();

        res.render('products/product-list',{'products': products});


    }//try
    catch(ex){

        res.render('error',{'error': ex});

    }//catch

};
