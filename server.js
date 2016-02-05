var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/dist'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);

app.set('port', process.env.PORT || 16666);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
