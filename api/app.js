import PrettyError from 'pretty-error';
import {urlencoded, json} from 'body-parser';
import express from 'express';
import session from 'express-session';

import * as auth from './controllers/auth';

const pretty = new PrettyError();
const app = express();

app.use(session({
  secret: 'react and redux rule!!!!',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60000}
}));

app.use(urlencoded({extended: false}));
app.use(json());

app.get('/auth', auth.auth);
app.post('/auth/login', auth.login);
app.post('/auth/logout', auth.logout);

app.use((err, req, res, next) => {    // eslint-disable-line no-unused-vars

  if (err) {
    console.error('API ERROR:', pretty.render(err));
    return res.status(err.status || 500).json(err);
  }
  res.status(404).end('NOT FOUND');
});

export default app;
