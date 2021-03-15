'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Sizes',
      {
        id: {
          type: Sequelize.UUID,
          default: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        size: {
          type: Sequelize.STRING(50)
        },
        product_id: {
          type: Sequelize.UUID,
          references: {
            model: 'Products',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },

      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sizes')
  }
};
