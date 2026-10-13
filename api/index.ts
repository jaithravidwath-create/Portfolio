import express from 'express';
import serverApp from '../server/index'; // Imports existing Express server setup

const app = express();

app.use(serverApp);

export default app;
