const { Model, DataTypes } = require('sequelize')      
const connection = require('../../config/connection')

class Orders extends Model {}

Orders.init({
      id: {
        type: DataTypes.UUID,
        // default: DataTypes.UUIDV4,
        primaryKey: true,
        // allowNull: false
      },
      product_price: {
        type: DataTypes.DOUBLE
      },
      product_discount: {
        type: DataTypes.DOUBLE
      },
      product_qty: {
        type: DataTypes.INTEGER
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      product_id: {
        type: DataTypes.UUID,
        references: {
          model: 'Products',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      transaction_id: {
        type: DataTypes.UUID,
        references: {
          model: 'Transactions',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
}, {
  modelName: 'Orders',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Orders