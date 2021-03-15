const { Model, DataTypes } = require('sequelize')      
const connection = require('../../config/connection')

class Colors extends Model {}

Colors.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      color: {
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
  modelName: 'Colors',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Colors