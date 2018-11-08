/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
            unique: true,
            required: true,
            //defaultsTo: 'string default',
            //columnName: 'full_name',
            //isIn: ['boring', 'too many emails', 'recipes too difficult', 'other'],
            //enum: ['mobile', 'work', 'home', 'skype', 'email'],
            //allowNull: true
            //minLength: 6,
            //protected: true,
        },

        description: {
            type: 'string',
            allowNull: true,
        },

        devices: {
            collection: 'device',
            via: 'customer',
        },

        users: {
            collection: 'user',
            via: 'customers'
        }
    }
};

