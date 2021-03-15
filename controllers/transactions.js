const { Transactions } = require('../database/models')

exports.findAll = async (req, res, next) => {                      
  try {
    const transactions = await Transactions.findAll()

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success get Transactions.',
      data: transactions
    })
  } catch (error) {
    return next(error)
  }
}

exports.findById = async (req, res, next) => {                         
  try {
    const { id } = req.params

    const transactions = await Transactions.findByPk(id)

    if (!transactions) {
      throw new Error('Transactions with this id not found.')
    }

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success get transactions.',
      data: transactions
    })
  } catch (error) {
    return next(error)
  }
}

