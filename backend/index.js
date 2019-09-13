const express = require('express');
const app = express();
const chalk = require('chalk');

var cors = require('cors')
app.use(cors())

//include the lodash & underscore
const _ = require('underscore');

const questions = require('./routes/questions')

const login = require('./routes/login')

app.use(express.json());

app.use('/api/questions', questions);
app.use('/api/login', login);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(chalk.red.bgWhite.bold(`Listening on port ${port}...`), chalk.green('✓')));