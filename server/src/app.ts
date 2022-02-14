//  ---------------------------- server/app.js
// declarations
import 'dotenv/config';
const { ENVIRONMENT, PORT } = process.env;
import express from 'express';
import morgan from 'morgan';

import bodyParser from 'body-parser';

// db connection
import db from '../configs/db.config';

// routes import
import usersRoutes from '../routes/usersRoutes';

const app = express();

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

app.use('/users', usersRoutes(db));


app.get('/', (req, res) => {
  res.json({greetings: 'hello world'});
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));