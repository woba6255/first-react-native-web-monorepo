const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/dcpc',
      createProxyMiddleware('/dcpc', {
      target: 'http://194.190.114.15:10080', // remote local
      changeOrigin: true,
      ws: true,
      onProxyReqWs: (proxyReq, req, socket, options, head) => {
        socket.on('error', (err) => {
          console.warn('Socket error using onProxyReqWs event', err);
        });
      },
    }),
  );
};
