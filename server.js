var http = require('http');
var serveStatic = require('serve-static');
var serve = serveStatic('public');
var five = require("johnny-five");
var Spark = require("spark-io");
var board;

var leftServo;
var rightServo;

console.log(process.env.SPARK_TOKEN);
board = new five.Board({
    io: new Spark({
        token: process.env.SPARK_TOKEN,
        deviceId: process.env.SPARK_DEVICE_ID
    }),
    repl: false
});

board.on("ready", function() {
    console.log('board ready');
    leftServo = new five.Servo({
        pin: "D0",
        type: "continuous"
    });

    rightServo = new five.Servo({
        pin: "A0",
        type: "continuous"
    });
});


var server = http.createServer(function(req, res) {
    serve(req, res, function() {
        if(req.url === '/left') {
          turnLeft();
        }

        if(req.url === '/right') {
          turnRight();
        }

        if(req.url === '/forward') {
          forward();
        }

        if(req.url === '/backward') {
          backward();
        }

        if(req.url === '/stop') {
          stop();
        }


        res.end();
    });
});
server.listen(process.env.PORT, function() {
    console.log('Server is now listening at port: ' + process.env.PORT);
});


function forward() {
    console.log('you\'re going forward.');
    leftServo.cw(1);
    rightServo.ccw(1);
}

function backward() {
    console.log('you\'re going backward.');
    leftServo.ccw(1);
    rightServo.cw(1);
}

function turnRight() {
    console.log('you\'re turning right.');
    leftServo.cw(1);
    rightServo.cw(0);
}

function turnLeft() {
    console.log('you\'re turning left.');
    leftServo.cw(0);
    rightServo.ccw(1);
}

function stop() {
    console.log('you\'re now stopped.');
    leftServo.cw(0);
    rightServo.ccw(0);
}