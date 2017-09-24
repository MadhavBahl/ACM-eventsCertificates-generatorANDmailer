var express = require('express');
var fs = require('fs');
const hbs = require('hbs');
var gm = require('gm').subClass({imageMagick: true});

var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname + '/views'));

var input = '/base.png';
var output = '/op.png';
