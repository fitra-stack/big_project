const { Model, DataTypes } = require('sequelize')      
const connection = require('../../config/connection')

class Transactions extends Model {}

Transactions.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        // allowNull: false
      },
      status: {
        type: DataTypes.STRING(50)
      },
      total_payment: {
        type: DataTypes.DOUBLE
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
}, {
  modelName: 'Transactions',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Transactions