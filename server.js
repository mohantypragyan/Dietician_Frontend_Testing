//Install express server
const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const HOST = "localhost";
//const API_SERVICE_URL =   "https://dietician-dev-41d9a344a720.herokuapp.com/dietician/"; //"http://localhost:5678/dietician";
const API_SERVICE_URL =  "https://dieticianstaging-f334e4b782aa.herokuapp.com/dietician/"; //"http://localhost:5678/dietician" 
app.use('/api', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/api`]: '',
    },
 }));
// Serve only the static files form the dist directory
app.use(express.static(__dirname +'/dist/dietician-project'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname +'/dist/dietician-project/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
