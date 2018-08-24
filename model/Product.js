"use strict";

const Sequelize = require('sequelize');

const RegularExpressions = require('./RegularExpressions');

const connection = require('../routes/connection');

const Product = connection.define('products',{
    productID:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
    },
    categoryID:{
        allowNull: false,

        type: Sequelize.DataTypes.INTEGER
    },
    productTitle: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: RegularExpressions.CategoryTitleExpression
        },
    },
        productPrice:{
            primaryKey: true,
            allowNull: false,

            type: Sequelize.DataTypes.INTEGER
        },
        productDescription: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                is: RegularExpressions.CategoryTitleExpression
            }
        }
    },{
    createdAt: false,
    updatedAt: false
});


//Category.sync({force: true});

module.exports = Product;