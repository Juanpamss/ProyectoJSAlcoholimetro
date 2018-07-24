/**
 * Lugar.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    direccion: {
      type: 'string',
      required: true
    },

    capacidad: {
      type: 'number',
      required: true
    },

    parqueadero: {
      type: 'boolean',
      required: true
    },

    numParqueaderos: {
      type: 'string',
      required: true
    },

    fiestas: {
      collection: 'Fiesta',
      via: 'fiestaIdFK'
    }

  },

};

