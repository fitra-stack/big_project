const { Colors } = require('../database/models')

exports.findAll = async (req, res, next) => {                      
  try {
    const colors = await Colors.findAll()

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success get Colors.',
      data: colors
    })
  } catch (error) {
    return next(error)
  }
}

