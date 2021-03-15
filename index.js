const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const { sequelize } = require('./database/models');

const authRouter = require('./routes/auth')
const productsRouter = require('./routes/products')
const ordersRouter = require('./routes/orders')
const transactionsRouter = require('./routes/transactions')
const sizesRouter = require('./routes/sizes')
const imagesRouter = require('./routes/images')
const colorsRouter = require('./routes/colors')


// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// check database connection
sequelize.authenticate().then(() => {
  console.log('Success connecting database');
});

app.use('/auth', authRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)
app.use('/transactions', transactionsRouter)
app.use('/sizes', transactionsRouter)
app.use('/images', transactionsRouter)
app.use('/colors', transactionsRouter)


// run express
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });