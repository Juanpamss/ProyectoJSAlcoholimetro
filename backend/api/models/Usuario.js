/**
 * Usuario.js
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

    apellido: {
      type: 'string',
      required: true
    },

    correo: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    },

    roles: {
      collection: 'Rol',
      via: 'rolIdFK'
    },

    tests: {
      collection: 'Test',
      via: 'testIdFK'
    },

    pedidos: {
      collection: 'Pedido',
      via: 'usuarioIdFK'
    },

    fiestas: {
      collection: 'Fiesta',
      via: 'usuarioIdFK'
    }

  },

};

