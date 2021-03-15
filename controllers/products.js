const { Products } = require('../database/models')

exports.findAll = async (req, res, next) => {                      
  try {
    const products = await Products.findAll()

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success get Products.',
      data: products
    })
  } catch (error) {
    return next(error)
  }
}

exports.findById = async (req, res, next) => {                         
  try {
    const { id } = req.params

    const products = await Products.findByPk(id)

    if (!products) {
      throw new Error('Products with this id not found.')
    }

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success get products.',
      data: products
    })
  } catch (error) {
    return next(error)
  }
}

exports.add = async (req, res, next) => {                             
  try {
    const { user } = req
    const { name, description, stock, discount, sex, price } = req.body
console.log(user);
    const products = await Products.create({
      name, 
      description, 
      stock,
      discount,
      sex,
      price,
      user_id: user.id
    })

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Success create products.',
      data: products
    })
  } catch (error) {
    return next(error)
  }
}

exports.update = async (req, res, next) => {                          
  try {
    const { user } = req
    const { id, name, description, stock, discount, sex, price } = req.body

    const products = await Products.findByPk(id)

    if (!products) {
      throw new Error('Products with this id not found.')
    }

    await Products.update({
      name, 
      description,
      stock,
      discount,
      sex,
      price,
      user_id: user.id
    }, {
      where: {
        id
      }
    })

    const updatedProducts = await Products.findByPk(id)

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success update products.',
      data: updatedProducts
    })
  } catch (error) {
    return next(error)
  }
}

exports.destroy = async (req, res, next) => {                     
  try {
    const { id } = req.params

    await Products.destroy({
      where: {
        id
      }
    })

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Success delete products.'
    })
  } catch (error) {
    return next(error)
  }
}