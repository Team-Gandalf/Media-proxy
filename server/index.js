const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const parser = require('body-parser');
const path = require('path');
const port = 2112;

app.use(express.static(path.join(__dirname, '../public')));

// app.use(parser.urlencoded({ extended: true }));

const mediaProxy = createProxyMiddleware({
  target: 'http://localhost:8000',
  changeOrigin: true,
});

const reviewProxy = createProxyMiddleware({
  target: 'http://localhost:4200',
  changeOrigin: true,
});

const announcementProxy = createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
});

const bodyProxy = createProxyMiddleware({
  target: 'http://localhost:1991',
  changeOrigin: true,
});

app.use('/media', mediaProxy);

app.use('/api/reviews/:id', reviewProxy);

app.use('/getGame', announcementProxy);

app.use('/mainbody', bodyProxy);


app.use(parser.json());

app.listen(port, () => { console.log(`listening at http://localhost:${port}`); });