import express from 'express';
import morgan from 'morgan';
import * as http from 'http';
import config from './common/config';
import logger from './common/logger';


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(':date[iso] :method :url :status - :response-time ms'));

// setup routes
app.use('/', (_, res) => {
  res.send('Hello world!');
  res.end();
})

http.createServer(app).listen(config.server.port, () => {
  logger.info('Server started at port: ', config.server.port);
});
