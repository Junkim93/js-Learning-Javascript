console.log('main.js loaded');

$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    //toDo
    var tool = new Tool();

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello World';
    
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    }

    paper.view.draw();
});

const currentTemp = 19.5;

const multiline = `Current temerature:\n` +
`\t${currentTemp}\u00b0c\n` +
"Don't worry... the heat is on!";

const obj = {};

obj.color = "yellow";