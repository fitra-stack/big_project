const { Model, DataTypes } = require('sequelize')      
const connection = require('../../config/connection')

class Sizes extends Model {}

Sizes.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        // allowNull: false
      },
      size: {
        type: DataTypes.STRING(50)
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
}, {
  modelName: 'Sizes',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Sizes