const { Model, DataTypes } = require('sequelize')           
const connection = require('../../config/connection')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  modelName: 'Users',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = User