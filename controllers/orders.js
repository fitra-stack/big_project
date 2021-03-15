const { Orders, Products, Transactions } = require('../database/models')

exports.findById = async (req, res, next) => {                         
  try {
    const { id } = req.params

    const orders = await Orders.findByPk(id)

    if (!orders) {
      throw new Error('Orders with this id not found.')
    }

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success get orders.',
      data: orders
    })
  } catch (error) {
    return next(error)
  }
}

exports.update = async (req, res, next) => {                          
  try {
    // const { user } = req
    const { id, product_price, product_discount, product_qty} = req.body

    const orders = await Orders.findByPk(id)

    if (!orders) {
      throw new Error('Orders with this id not found.')
    }

    await Orders.update({
      product_price, 
      product_discount,
      product_qty,
      user_id: user.id,
      product_id: products.id,
      transaction_id: transactions.id
    }, {
      where: {
        id
      }
    })

    const updatedOrders = await Orders.findByPk(id)

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success update orders.',
      data: updatedOrders
    })
  } catch (error) {
    return next(error)
  }
}

exports.destroy = async (req, res, next) => {                     
  try {
    const { id } = req.params

    await Orders.destroy({
      where: {
        id
      }
    })

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success delete orders.'
    })
  } catch (error) {
    return next(error)
  }
}