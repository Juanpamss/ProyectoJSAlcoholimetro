/**
 * Fiesta.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaFiesta: {
      type: 'number',
      required: true
    },

    horaInicio: {
      type: 'string',
      required: true
    },

    horaFin: {
      type: 'string',
      required: true
    },

    fiestaIdFK:{
      model: 'Lugar',
    }

  },

};

