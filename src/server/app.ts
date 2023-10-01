import express from 'express';
import router from './routes/index';

const { PORT_SERVER = 3030 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);

// Serve app production bundle
app.use(express.static('dist/app'));

app.listen(PORT_SERVER, () => {
  console.log(`Server listening at http://localhost:${PORT_SERVER}`);
});
