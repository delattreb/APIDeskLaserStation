/**
 * Device.js
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
        },

        description: {
            type: 'string',
            allowNull: true,
        },

        customer: {
            model: 'customer',
            columnName: 'idcustomer',
            required: true,
        },

        datas: {
            collection: 'Data',
            via: 'device',
        }
    }
};

