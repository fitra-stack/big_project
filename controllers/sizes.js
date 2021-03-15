const { Sizes } = require('../database/models')

exports.findAll = async (req, res, next) => {                      
  try {
    const sizes = await Sizes.findAll()

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success get Sizes.',
      data: sizes
    })
  } catch (error) {
    return next(error)
  }
}

