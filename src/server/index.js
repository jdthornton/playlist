import "regenerator-runtime/runtime";
import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import cors from 'cors'
import bodyParser  from 'body-parser';
import { Server } from 'http';

const app = express();
const server = Server(app);

if(process.env.NODE_ENV === 'development'){
  app.use(cors({credentials: true, origin: 'http://localhost:8080'}));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



import routes from './routes/api';

app.use('/api/v1', routes);

app.use(function(error, req, res, next){
  if(error){
    res.sendStatus(500)
  } else {
    res.sendStatus(res.statusCode)
  }
});

if(process.env.NODE_ENV === 'production') {
  const render = require('./render').default
  app.use(
    expressStaticGzip('dist', {
      enableBrotli: true,
    })
  );

  app.use('*', render);
}


server.listen(PORT, () => console.log('Demo app listening on port '+PORT));
