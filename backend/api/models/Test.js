/**
 * Test.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    gradoAlcohol: {
      type: 'number',
      required: true
    },

    horaTest: {
      type: 'string',
      required: true
    },

    testIdFK:{
      model: 'Usuario',
    }

  },

};

