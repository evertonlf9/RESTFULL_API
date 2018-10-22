import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import logger from 'morgan';
import cors from 'cors';
import corsOptions from './config/cors.config';
import indexRouter from './app/routes/index';

const path = require('path');

const app = express();
const secret = 'teste1';

app.set('superSecret', secret);
// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json({ type: 'application/vnd.api+json', extended: true, limit: '100mb' }));
app.use(bodyParser.urlencoded({extended: false, limit: '100mb'  }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.options('*', cors(corsOptions));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use((err, req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', indexRouter);

app.get('/', (req, res) => {
  res.json({"message": "Welcome"});
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

export default app;
