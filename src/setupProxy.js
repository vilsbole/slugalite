const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("GRAPHQL PROXY");
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: "https://api.sorare.com",
      changeOrigin: true,
    })
  );
};
