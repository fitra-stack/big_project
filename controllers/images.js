const { Images } = require('../database/models')

exports.findAll = async (req, res, next) => {                      
  try {
    const images = await Images.findAll()

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success get Images.',
      data: images
    })
  } catch (error) {
    return next(error)
  }
}

