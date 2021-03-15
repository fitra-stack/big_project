const { Model, DataTypes } = require('sequelize')      
const connection = require('../../config/connection')

class Images extends Model {}

Images.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        // allowNull: false
      },
      url: {
        type: DataTypes.STRING
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
  modelName: 'Images',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Images