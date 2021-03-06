
'use strict';

var models = require('../lib/model/db');

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.describeTable('Companies').then(function(attributes){

      if (attributes.hasOwnProperty('auto_approve')) {
        return 1;
      }

      return queryInterface.addColumn(
        'Users',
        'auto_approve',
        models.User.attributes.auto_approve
      );
    });

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'auto_approve');
  }
};
