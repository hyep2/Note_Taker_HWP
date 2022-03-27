const express = require('express');
const { join } = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



const PORT = 'process.env.PORT || 3000';
app.listen(PORT, console.log('app is running'));