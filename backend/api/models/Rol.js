/**
 * Rol.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descripcion:{
      type: 'string',
      required: true
    },

    permisos: {
      type: 'boolean',
      required: true
    },

    rolIdFK:{
      model: 'Usuario',
    }

  },

};

