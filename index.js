const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// run express
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });