var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app termination', function() {
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS
require('./airplaneParameters.js');

var ClimbTable = new mongoose.Schema({
	weight: Number,
	vfri5: Number,
	vfri10: Number,
	vfri15: Number,
	vclmb: Number
});

db.ClimbTable.insert({
	weight: 18000,
	vfri5: 116,
	vfri10: 110,
	vfri15: 107,
	vclmb: 130
},
{
	weight: 20000,
	vfri5: 120,
	vfri10: 112,
	vfri15: 109,
	vclmb: 131
},
{
	weight: 18000,
	vfri5: 116,
	vfri10: 110,
	vfri15: 107,
	vclmb: 130
},
{
	weight: 20000,
	vfri5: 120,
	vfri10: 112,
	vfri15: 109,
	vclmb: 131
},
{
	weight: 22000,
	vfri5: 126,
	vfri10: 118,
	vfri15: 115,
	vclmb: 137
},
{
	weight: 24000,
	vfri5: 132,
	vfri10: 123,
	vfri15: 120,
	vclmb: 143
},
{
	weight: 26000,
	vfri5: 137,
	vfri10: 128,
	vfri15: 125,
	vclmb: 148
},
{
	weight: 28000,
	vfri5: 142,
	vfri10: 134,
	vfri15: 130,
	vclmb: 154
},
{
	weight: 29000,
	vfri5: 146,
	vfri10: 137,
	vfri15: 133,
	vclmb: 158
})

var FlapsTable = new mongoose.Schema({
	flaps: String,
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});

db.FlapsTable.insert({
	flaps: "5",
	weight: 18000,
	altitude: 0,
	temperature: "Below 20",
	vr: 102,
	v2: 116
},
{
	flaps: "5",
	weight: 18000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 102,
	v2: 115
},
{
	flaps: "5",
	weight: 18000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 102,
	v2: 114
},
{
	flaps: "5",
	weight: 18000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 102,
	v2: 113
},
{
	flaps: "5",
	weight: 18000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 102,
	v2: 112
},
{
	flaps: "5",
	weight: 18000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 103,
	v2: 111
},
{
	flaps: "5",
	weight: 20000,
	altitude: 0,
	temperature: "Below 20",
	vr: 105,
	v2: 115
},
{
	flaps: "5",
	weight: 20000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 106,
	v2: 114
},
{
	flaps: "5",
	weight: 20000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 107,
	v2: 113
},
{
	flaps: "5",
	weight: 20000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 107,
	v2: 112
},
{
	flaps: "5",
	weight: 20000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 108,
	v2: 112
},
{
	flaps: "5",
	weight: 20000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 110,
	v2: 111
},
{
	flaps: "5",
	weight: 22000,
	altitude: 0,
	temperature: "Below 20",
	vr: 112,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 113,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 113,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 114,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 115,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 116,
	v2: 117
},
{
	flaps: "5",
	weight: 24000,
	altitude: 0,
	temperature: "Below 20",
	vr: 118,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 119,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 120,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 120,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 121,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 122,
	v2: 122
},
{
	flaps: "5",
	weight: 26000,
	altitude: 0,
	temperature: "Below 20",
	vr: 124,
	v2: 127
},
{
	flaps: "5",
	weight: 24000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 125,
	v2: 127
},
{
	flaps: "5",
	weight: 24000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 126,
	v2: 127
},
{
	flaps: "5",
	weight: 24000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 126,
	v2: 127
},
{
	flaps: "5",
	weight: 24000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 127,
	v2: 127
},
{
	flaps: "5",
	weight: 24000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 128,
	v2: 127
},
{
	flaps: "5",
	weight: 28000,
	altitude: 0,
	temperature: "Below 20",
	vr: 130,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 131,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 131,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 132,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 133,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 134,
	v2: 132
},
{
	flaps: "5",
	weight: 29000,
	altitude: 0,
	temperature: "Below 20",
	vr: 133,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 134,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 135,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 136,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 137,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 138,
	v2: 135
},
{
	flaps: "5",
	weight: 18000,
	altitude: 0,
	temperature: "Above 20",
	vr: 102,
	v2: 114
},
{
	flaps: "5",
	weight: 18000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 102,
	v2: 113
},
{
	flaps: "5",
	weight: 18000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 102,
	v2: 112
},
{
	flaps: "5",
	weight: 18000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 103,
	v2: 111
},
{
	flaps: "5",
	weight: 18000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 103,
	v2: 110
},
{
	flaps: "5",
	weight: 18000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 105,
	v2: 109
},
{
	flaps: "5",
	weight: 20000,
	altitude: 0,
	temperature: "Above 20",
	vr: 107,
	v2: 113
},
{
	flaps: "5",
	weight: 20000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 108,
	v2: 112
},
{
	flaps: "5",
	weight: 20000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 108,
	v2: 112
},
{
	flaps: "5",
	weight: 20000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 110,
	v2: 111
},
{
	flaps: "5",
	weight: 20000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 110,
	v2: 111
},
{
	flaps: "5",
	weight: 20000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 112,
	v2: 111
},
{
	flaps: "5",
	weight: 22000,
	altitude: 0,
	temperature: "Above 20",
	vr: 113,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 114,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 115,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 116,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 117,
	v2: 117
},
{
	flaps: "5",
	weight: 22000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 118,
	v2: 117
},
{
	flaps: "5",
	weight: 24000,
	altitude: 0,
	temperature: "Above 20",
	vr: 120,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 120,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 121,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 122,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 123,
	v2: 122
},
{
	flaps: "5",
	weight: 24000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 124,
	v2: 122
},
{
	flaps: "5",
	weight: 26000,
	altitude: 0,
	temperature: "Above 20",
	vr: 126,
	v2: 127
},
{
	flaps: "5",
	weight: 26000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 126,
	v2: 127
},
{
	flaps: "5",
	weight: 26000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 127,
	v2: 127
},
{
	flaps: "5",
	weight: 26000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 128,
	v2: 127
},
{
	flaps: "5",
	weight: 26000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 129,
	v2: 127
},
{
	flaps: "5",
	weight: 26000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 130,
	v2: 127
},
{
	flaps: "5",
	weight: 28000,
	altitude: 0,
	temperature: "Above 20",
	vr: 131,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 132,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 133,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 134,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 135,
	v2: 132
},
{
	flaps: "5",
	weight: 28000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 136,
	v2: 132
},
{
	flaps: "5",
	weight: 29000,
	altitude: 0,
	temperature: "Above 20",
	vr: 135,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 136,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 137,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 138,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 138,
	v2: 135
},
{
	flaps: "5",
	weight: 29000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 140,
	v2: 135
},
{
	flaps: "10",
	weight: 18000,
	altitude: 0,
	temperature: "Below 20",
	vr: 100,
	v2: 111
},
{
	flaps: "10",
	weight: 18000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 100,
	v2: 110
},
{
	flaps: "10",
	weight: 18000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 100,
	v2: 110
},
{
	flaps: "10",
	weight: 18000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 100,
	v2: 109
},
{
	flaps: "10",
	weight: 18000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 100,
	v2: 108
},
{
	flaps: "10",
	weight: 18000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 100,
	v2: 107
},
{
	flaps: "10",
	weight: 20000,
	altitude: 0,
	temperature: "Below 20",
	vr: 100,
	v2: 110
},
{
	flaps: "10",
	weight: 20000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 100,
	v2: 109
},
{
	flaps: "10",
	weight: 20000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 100,
	v2: 109
},
{
	flaps: "10",
	weight: 20000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 100,
	v2: 108
},
{
	flaps: "10",
	weight: 20000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 100,
	v2: 107
},
{
	flaps: "10",
	weight: 20000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 101,
	v2: 106
},
{
	flaps: "10",
	weight: 22000,
	altitude: 0,
	temperature: "Below 20",
	vr: 103,
	v2: 109
},
{
	flaps: "10",
	weight: 22000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 105,
	v2: 109
},
{
	flaps: "10",
	weight: 22000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 105,
	v2: 108
},
{
	flaps: "10",
	weight: 22000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 105,
	v2: 108
},
{
	flaps: "10",
	weight: 22000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 106,
	v2: 108
},
{
	flaps: "10",
	weight: 22000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 108,
	v2: 108
},
{
	flaps: "10",
	weight: 24000,
	altitude: 0,
	temperature: "Below 20",
	vr: 109,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 110,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 111,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 111,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 112,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 113,
	v2: 113
},
{
	flaps: "10",
	weight: 26000,
	altitude: 0,
	temperature: "Below 20",
	vr: 115,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 116,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 116,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 117,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 118,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 119,
	v2: 118
},
{
	flaps: "10",
	weight: 28000,
	altitude: 0,
	temperature: "Below 20",
	vr: 120,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 121,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 122,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 122,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 123,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 124,
	v2: 122
},
{
	flaps: "10",
	weight: 29000,
	altitude: 0,
	temperature: "Below 20",
	vr: 124,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 2000,
	temperature: "Below 20",
	vr: 125,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 4000,
	temperature: "Below 20",
	vr: 125,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 6000,
	temperature: "Below 20",
	vr: 126,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 8000,
	temperature: "Below 20",
	vr: 127,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 10000,
	temperature: "Below 20",
	vr: 128,
	v2: 125
},
{
	flaps: "10",
	weight: 18000,
	altitude: 0,
	temperature: "Above 20",
	vr: 100,
	v2: 109
},
{
	flaps: "10",
	weight: 18000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 100,
	v2: 109
},
{
	flaps: "10",
	weight: 18000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 100,
	v2: 109
},
{
	flaps: "10",
	weight: 18000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 100,
	v2: 107
},
{
	flaps: "10",
	weight: 18000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 0,
	v2: 106
},
{
	flaps: "10",
	weight: 18000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 0,
	v2: 105
},
{
	flaps: "10",
	weight: 20000,
	altitude: 0,
	temperature: "Above 20",
	vr: 100,
	v2: 108
},
{
	flaps: "10",
	weight: 20000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 100,
	v2: 108
},
{
	flaps: "10",
	weight: 20000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 100,
	v2: 107
},
{
	flaps: "10",
	weight: 20000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 100,
	v2: 106
},
{
	flaps: "10",
	weight: 20000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 0,
	v2: 105
},
{
	flaps: "10",
	weight: 20000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 0,
	v2: 105
},
{
	flaps: "10",
	weight: 22000,
	altitude: 0,
	temperature: "Above 20",
	vr: 104,
	v2: 108
},
{
	flaps: "10",
	weight: 22000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 106,
	v2: 108
},
{
	flaps: "10",
	weight: 22000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 106,
	v2: 108
},
{
	flaps: "10",
	weight: 22000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 106,
	v2: 108
},
{
	flaps: "10",
	weight: 22000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 0,
	v2: 108
},
{
	flaps: "10",
	weight: 22000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 0,
	v2: 108
},
{
	flaps: "10",
	weight: 24000,
	altitude: 0,
	temperature: "Above 20",
	vr: 110,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 111,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 112,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 112,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 0,
	v2: 113
},
{
	flaps: "10",
	weight: 24000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 0,
	v2: 113
},
{
	flaps: "10",
	weight: 26000,
	altitude: 0,
	temperature: "Above 20",
	vr: 116,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 117,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 117,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 118,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 0,
	v2: 118
},
{
	flaps: "10",
	weight: 26000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 0,
	v2: 118
},
{
	flaps: "10",
	weight: 28000,
	altitude: 0,
	temperature: "Above 20",
	vr: 121,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 122,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 123,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 123,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 0,
	v2: 122
},
{
	flaps: "10",
	weight: 28000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 0,
	v2: 122
},
{
	flaps: "10",
	weight: 29000,
	altitude: 0,
	temperature: "Above 20",
	vr: 125,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 2000,
	temperature: "Above 20",
	vr: 125,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 4000,
	temperature: "Above 20",
	vr: 126,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 6000,
	temperature: "Above 20",
	vr: 127,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 8000,
	temperature: "Above 20",
	vr: 0,
	v2: 125
},
{
	flaps: "10",
	weight: 29000,
	altitude: 10000,
	temperature: "Above 20",
	vr: 0,
	v2: 125
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 18000,
	altitude: 0,
	vr: 98,
	v2: 106
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 18000,
	altitude: 2000,
	vr: 98,
	v2: 106
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 18000,
	altitude: 4000,
	vr: 98,
	v2: 105
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 18000,
	altitude: 6000,
	vr: 98,
	v2: 104
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 18000,
	altitude: 8000,
	vr: 98,
	v2: 103
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 18000,
	altitude: 10000,
	vr: 98,
	v2: 102
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 20000,
	altitude: 0,
	vr: 98,
	v2: 105
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 20000,
	altitude: 2000,
	vr: 98,
	v2: 105
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 20000,
	altitude: 4000,
	vr: 98,
	v2: 104
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 20000,
	altitude: 6000,
	vr: 98,
	v2: 103
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 20000,
	altitude: 8000,
	vr: 98,
	v2: 102
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 20000,
	altitude: 10000,
	vr: 98,
	v2: 102
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 22000,
	altitude: 0,
	vr: 100,
	v2: 104
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 22000,
	altitude: 2000,
	vr: 101,
	v2: 104
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 22000,
	altitude: 4000,
	vr: 101,
	v2: 104
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 22000,
	altitude: 6000,
	vr: 102,
	v2: 104
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 22000,
	altitude: 8000,
	vr: 103,
	v2: 104
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 22000,
	altitude: 10000,
	vr: 104,
	v2: 104
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 24000,
	altitude: 0,
	vr: 106,
	v2: 109
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 24000,
	altitude: 2000,
	vr: 106,
	v2: 109
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 24000,
	altitude: 4000,
	vr: 107,
	v2: 109
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 24000,
	altitude: 6000,
	vr: 108,
	v2: 109
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 24000,
	altitude: 8000,
	vr: 108,
	v2: 109
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 24000,
	altitude: 10000,
	vr: 109,
	v2: 109
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 26000,
	altitude: 0,
	vr: 111,
	v2: 113
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 26000,
	altitude: 2000,
	vr: 112,
	v2: 113
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 26000,
	altitude: 4000,
	vr: 112,
	v2: 113
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 26000,
	altitude: 6000,
	vr: 113,
	v2: 113
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 26000,
	altitude: 8000,
	vr: 114,
	v2: 113
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 26000,
	altitude: 10000,
	vr: 114,
	v2: 113
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 28000,
	altitude: 0,
	vr: 116,
	v2: 118
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 28000,
	altitude: 2000,
	vr: 117,
	v2: 118
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 28000,
	altitude: 4000,
	vr: 117,
	v2: 118
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 28000,
	altitude: 6000,
	vr: 118,
	v2: 118
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 28000,
	altitude: 8000,
	vr: 118,
	v2: 118
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 28000,
	altitude: 10000,
	vr: 119,
	v2: 118
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 29000,
	altitude: 0,
	vr: 119,
	v2: 120
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 29000,
	altitude: 2000,
	vr: 120,
	v2: 120
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 29000,
	altitude: 4000,
	vr: 120,
	v2: 120
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 29000,
	altitude: 6000,
	vr: 121,
	v2: 120
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 29000,
	altitude: 8000,
	vr: 122,
	v2: 120
},
{
	flaps: "15",
	temperature: "Below 20",
	weight: 29000,
	altitude: 10000,
	vr: 122,
	v2: 120
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 18000,
	altitude: 0,
	vr: 98,
	v2: 105
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 18000,
	altitude: 2000,
	vr: 98,
	v2: 104
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 18000,
	altitude: 4000,
	vr: 98,
	v2: 103
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 18000,
	altitude: 6000,
	vr: 98,
	v2: 102
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 18000,
	altitude: 8000,
	vr: 98,
	v2: 102
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 18000,
	altitude: 10000,
	vr: 98,
	v2: 102
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 20000,
	altitude: 0,
	vr: 98,
	v2: 103
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 20000,
	altitude: 2000,
	vr: 98,
	v2: 103
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 20000,
	altitude: 4000,
	vr: 98,
	v2: 102
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 20000,
	altitude: 6000,
	vr: 98,
	v2: 102
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 20000,
	altitude: 8000,
	vr: 99,
	v2: 102
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 20000,
	altitude: 10000,
	vr: 99,
	v2: 102
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 22000,
	altitude: 0,
	vr: 101,
	v2: 104
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 22000,
	altitude: 2000,
	vr: 102,
	v2: 104
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 22000,
	altitude: 4000,
	vr: 103,
	v2: 104
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 22000,
	altitude: 6000,
	vr: 104,
	v2: 104
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 22000,
	altitude: 8000,
	vr: 104,
	v2: 104
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 22000,
	altitude: 10000,
	vr: 104,
	v2: 104
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 24000,
	altitude: 0,
	vr: 107,
	v2: 109
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 24000,
	altitude: 2000,
	vr: 108,
	v2: 109
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 24000,
	altitude: 4000,
	vr: 108,
	v2: 109
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 24000,
	altitude: 6000,
	vr: 109,
	v2: 109
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 24000,
	altitude: 8000,
	vr: 110,
	v2: 109
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 24000,
	altitude: 10000,
	vr: 110,
	v2: 109
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 26000,
	altitude: 0,
	vr: 112,
	v2: 113
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 26000,
	altitude: 2000,
	vr: 113,
	v2: 113
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 26000,
	altitude: 4000,
	vr: 114,
	v2: 113
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 26000,
	altitude: 6000,
	vr: 114,
	v2: 113
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 26000,
	altitude: 8000,
	vr: 115,
	v2: 113
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 26000,
	altitude: 10000,
	vr: 115,
	v2: 113
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 28000,
	altitude: 0,
	vr: 117,
	v2: 118
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 28000,
	altitude: 2000,
	vr: 118,
	v2: 118
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 28000,
	altitude: 4000,
	vr: 119,
	v2: 118
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 28000,
	altitude: 6000,
	vr: 119,
	v2: 118
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 28000,
	altitude: 8000,
	vr: 120,
	v2: 118
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 28000,
	altitude: 10000,
	vr: 120,
	v2: 118
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 29000,
	altitude: 0,
	vr: 120,
	v2: 120
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 29000,
	altitude: 2000,
	vr: 121,
	v2: 120
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 29000,
	altitude: 4000,
	vr: 121,
	v2: 120
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 29000,
	altitude: 6000,
	vr: 122,
	v2: 120
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 29000,
	altitude: 8000,
	vr: 123,
	v2: 120
},
{
	flaps: "5",
	temperature: "Above 20",
	weight: 29000,
	altitude: 10000,
	vr: 123,
	v2: 120
})

var LandingTable = new mongoose.Schema({
	flaps: String,
	weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number
});

db.LandingTable.insert({
	flaps: "5",
	weight: 18000,
	vapp: 115,
	vref: 0,
	vga: 109,
},
{
	flaps: "5",
	weight: 20000,
	app: 120,
	vref: 0,
	vga: 110
},
{
	flaps: "5",
	weight: 22000,
	app: 126,
	vref: 0,
	vga: 115
},
{
	flaps: "5",
	weight: 24000,
	app: 131,
	vref: 0,
	vga: 120
},
{
	flaps: "5",
	weight: 26000,
	app: 137,
	vref: 0,
	vga: 125
},
{
	flaps: "5",
	weight: 28000,
	app: 142,
	vref: 0,
	vga: 130
},
{
	flaps: "5",
	weight: 29000,
	app: 146,
	vref: 0,
	vga: 134
},
{
	flaps: "10",
	weight: 18000,
	app: 109,
	vref: 108,
	vga: 108
},
{
	flaps: "10",
	weight: 20000,
	app: 112,
	vref: 112,
	vga: 108
},
{
	flaps: "10",
	weight: 22000,
	app: 117,
	vref: 117,
	vga: 108
},
{
	flaps: "10",
	weight: 24000,
	app: 122,
	vref: 122,
	vga: 112
},
{
	flaps: "10",
	weight: 26000,
	app: 127,
	vref: 127,
	vga: 117
},
{
	flaps: "10",
	weight: 28000,
	app: 132,
	vref: 132,
	vga: 122
},
{
	flaps: "10",
	weight: 29000,
	app: 136,
	vref: 136,
	vga: 125
},
{
	flaps: "15",
	weight: 18000,
	app: 106,
	vref: 105,
	vga: 105
},
{
	flaps: "15",
	weight: 20000,
	app: 106,
	vref: 106,
	vga: 105
},
{
	flaps: "15",
	weight: 22000,
	app: 112,
	vref: 112,
	vga: 105
},
{
	flaps: "15",
	weight: 24000,
	app: 117,
	vref: 117,
	vga: 107
},
{
	flaps: "15",
	weight: 26000,
	app: 122,
	vref: 121,
	vga: 111
},
{
	flaps: "15",
	weight: 28000,
	app: 126,
	vref: 126,
	vga: 116
},
{
	flaps: "15",
	weight: 29000,
	app: 129,
	vref: 129,
	vga: 119
},
{
	flaps: "35",
	weight: 18000,
	app: 0,
	vref: 101,
	vga: 0
},
{
	flaps: "35",
	weight: 20000,
	app: 0,
	vref: 102,
	vga: 0
},
{
	flaps: "35",
	weight: 22000,
	app: 0,
	vref: 107,
	vga: 0
},
{
	flaps: "35",
	weight: 24.000,
	app: 0,
	vref: 112,
	vga: 0
},
{
	flaps: "35",
	weight: 26000,
	app: 0,
	vref: 116,
	vga: 0
},
{
	flaps: "35",
	weight: 28000,
	app: 0,
	vref: 120,
	vga: 0
},
{
	flaps: "35",
	weight: 29000,
	app: 0,
	vref: 123,
	vga: 0
})