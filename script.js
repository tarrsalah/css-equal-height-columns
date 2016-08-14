$ = require('jquery');
global.Jquery = require('jquery-match-height');

$(function() {
    $('.col').matchHeight({
        byRow: false
    });
});
