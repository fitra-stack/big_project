const sequelize = require('../../config/connection')              
const User = require('./User')
const Products = require('./Products')
const Orders = require('./Orders')
const Transactions = require('./Transactions')
const Sizes = require('./Sizes')
const Images = require('./Images')
const Colors = require('./Colors')

User.hasMany(Products, {
  as: 'products',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Products.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

User.hasMany(Transactions, {
  as: 'transactions',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Transactions.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Products.hasMany(Orders, {
  as: 'orders',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Orders.belongsTo(Products, {
  as: 'products',
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

User.hasMany(Orders, {
  as: 'orders',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Orders.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Transactions.hasMany(Orders, {
  as: 'orders',
  foreignKey: 'transaction_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Orders.belongsTo(Transactions, {
  as: 'transactions',
  foreignKey: 'transaction_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Products.hasMany(Sizes, {
  as: 'sizes',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Sizes.belongsTo(Products, {
  as: 'products',
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Products.hasMany(Images, {
  as: 'images',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Images.belongsTo(Products, {
  as: 'products',
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Products.hasMany(Colors, {
  as: 'colors',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Colors.belongsTo(Products, {
  as: 'products',
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

module.exports = {
  sequelize,
  User,
  Products,
  Orders,
  Transactions,
  Images,
  Colors,
  Sizes
}