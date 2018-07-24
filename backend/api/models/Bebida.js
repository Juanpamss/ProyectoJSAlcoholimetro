/**
 * Bebida.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descripcion: {
      type: 'number',
      required: true
    },

    precio: {
      type: 'number',
      required: true
    },

    pedidos: {
      collection: 'Pedido',
      via: 'bebidaIdFK'
    }

  },

};

