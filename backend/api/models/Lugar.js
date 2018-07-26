/**
 * Lugar.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },

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

    imagenLugar: {
      type: 'string',
      required: true
    },

    fiestas: {
      collection: 'Fiesta',
      via: 'fiestaIdFK'
    }

  },

};

