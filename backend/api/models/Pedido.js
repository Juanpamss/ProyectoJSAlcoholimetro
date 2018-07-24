/**
 * Pedido.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad: {
      type: 'number',
      required: true
    },

    usuarioIdFK:{
      model: 'Usuario',
    },

    bebidaIdFK:{
      model: 'Bebida',
    }

  },

};

