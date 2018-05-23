var mongoose = require ("mongoose"); // The reason for this demo.

//var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://root:root@ds123799.mlab.com:23799/node-app';
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://mongodb://localhost/node-app';
mongoose.connect(uristring, function (err, conn) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});
