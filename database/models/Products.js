const { Model, DataTypes } = require('sequelize')      
const connection = require('../../config/connection')

class Products extends Model {}

Products.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        // allowNull: false
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
      },
      stock: {
        type: DataTypes.INTEGER
      },
      discount: {
        type: DataTypes.DOUBLE
      },
      sex: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DOUBLE
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
}
}, {
  modelName: 'Products',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Products