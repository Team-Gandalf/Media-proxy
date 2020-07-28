const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const parser = require('body-parser');
const path = require('path');
const port = 2112;

app.use(express.static(path.join(__dirname, '../public')));

const mediaProxy = createProxyMiddleware({
  target: 'http://18.219.209.226:8000/',
  changeOrigin: true,
});

const reviewProxy = createProxyMiddleware({
  target: 'http://18.218.201.173:4200/',
  changeOrigin: true,
});

const announcementProxy = createProxyMiddleware({
  target: 'http://18.217.243.249:8080/',
  changeOrigin: true,
});

const bodyProxy = createProxyMiddleware({
  target: 'http://18.191.250.26:1992/',
  changeOrigin: true,
});

app.use('/media', mediaProxy);

app.use('/api/reviews/:id', reviewProxy);

app.use('/getGame', announcementProxy);

app.use('/mainbody', bodyProxy);


app.use(parser.json());

app.listen(port, () => { console.log(`listening at http://localhost:${port}`); });