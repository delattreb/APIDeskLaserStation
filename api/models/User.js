/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {
    attributes: {
        first_name: {
            type: 'string',
            required: true,
        },

        last_name: {
            type: 'string',
            required: true,
        },

        email: {
            type: 'string',
            required: true,
            isEmail: true,
        },

        description: {
            type: 'string',
            allowNull: true,
        },

        customers: {
            collection: 'customer',
            via: 'users'
        },

        password: {
            type: 'string',
            required: true,
            //encrypt: true,
            custom: function (value) {
                // • be a string
                // • be at least 6 characters long
                // • contain at least one number
                // • contain at least one letter
                return _.isString(value) && value.length >= 8 && value.match(/[a-z]/i) && value.match(/[0-9]/);
            }
        }
    }, customToJSON: function () {
        // Return a shallow copy of this record with the password and ssn removed.
        //return _.omit(this, ['temperature', 'humidity'])
        return _.omit(this, ['password', 'createdAt', 'updatedAt'])
    },


    // Lifecycle Callbacks
    beforeCreate: function (values, cb) {

        // Hash password
        bcrypt.hash(values.password, 10, function (err, hash) {
            if (err) return cb(err);
            values.password = hash;
            //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
            cb();
        });
    },

    comparePassword: function (password, user) {
        return new Promise(function (resolve, reject) {
            bcrypt.compare(password, user.password, function (err, match) {
                if (err) reject(err);

                if (match) {
                    resolve(true);
                } else {
                    reject(err);
                }
            })
        });
    }
};

