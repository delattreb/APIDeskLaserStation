/**
 * Moduleesp.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      unique: true,
      required: true,
    },

    pseudo: {
      type: 'string',
      allowNull: true,
    },

    connected: {
      type: 'number',
      allowNull: true,
    },
  },
};

