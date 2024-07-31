const express = require('express');
const otpRoutes = require('./routes/otpRoutes');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/', otpRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
