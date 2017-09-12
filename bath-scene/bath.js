/*
- put missing floortile in place
- reveals showers behind the curtain
- three lights on the wall reveal how close bath temperature is to prescribed one
- one shower has hot tap broken off, the other has the cold one broken off. Third one is out of order
- open the two taps with the correct flow so that the mixture of the water is 38°C
- when the temperature is a match, all 3 lights are lit
- if the temp is right, feed bath monster from the trash, and it will hand you your reward in its tentacle
- bonus game: lightsout on ceiling, when solved, shines light on TARGET_TEMPERATURE on the wall
*/
var state = {
    curtain: true,
    puzzlePieceInHand: false,
    HOT_TAP_TEMP: 60.0, // temperature of Hot Tap
    hotFlow: 0.0, // flow of hot water from tap 0.0 .. 1.0
    COLD_TAP_TEMP: 10.0,
    coldFlow: 0.0,
    TARGET_TEMPERATURE: 38
};

const PATTERN = [
    ["_","x","_","_"],
    ["x","x","x","_"],
    ["_","x","_","_"],
    ["_","_","_","_"]
]

var LO_DIVS = (function(pattern){
    var divs = [];
    for(var row = 0; row < PATTERN.length; row++) {
        divs[row] = [];
        for(var col = 0; col < PATTERN[0].length; col ++) {
            divs[row][col] = {id: `lo_${row}_${col}`, state: pattern[row][col] !== "x"};
        }
    }
    return divs;
})(PATTERN);

// lights out
(function(divs, onComplete){
    const COLS = divs[0].length;
    const ROWS = divs.length;
    //console.log(`COLS: ${COLS}, ROWS: ${ROWS}`);

    function toggle({col: x, row: y}) {
        divs[y][x].state = !divs[y][x].state;
        var div = $(`#${divs[y][x].id}`);
        var removeClass = divs[y][x].state ? "lo_off" : "lo_on";
        var addClass = divs[y][x].state ? "lo_on" : "lo_off";
        div.removeClass(removeClass).addClass(addClass);
    }

    function neighbors(x, y) {
        var buttons = [{col: x, row: y}];
        if (x > 0) buttons.push({col: x - 1, row: y});
        if (x < COLS - 1) buttons.push({col: x + 1, row: y});
        if (y > 0) buttons.push({col: x, row: y - 1});
        if (y < ROWS - 1) buttons.push({col: x, row: y + 1});
        return buttons;
    }

    function checkComplete() {
        var isComplete = divs.reduce((a, b) => a.concat(b), [])
                .map(e => e.state)
                .reduce((a, b) => a && b, true);
        if (isComplete) {
            onComplete();
        }
    }

    // init
    divs.forEach(row => 
        row.forEach(element => {
            $(`<div id=${element.id}/>`)
                .addClass("lo_button")
                .addClass(element.state ? "lo_on" : "lo_off")
                .appendTo("#lo");
        }));

    $(".lo_button").click(function(event) {
        var [_, y, x] = event.target.id.split("_");
        neighbors(parseInt(x), parseInt(y)).forEach(toggle);
        checkComplete();
    })
})(LO_DIVS, onLightsUpComplete);

function onLightsUpComplete() {
    $(".lo_button").off("click");
    $("#lightbeam").show();
    $("#temperature")
        .append(`${state.TARGET_TEMPERATURE}°C`)
        .show();
}

(function(onComplete) {
    const PUZZLE_ID = 'puzzle-piece';
    $('#puzzle-piece')
        .attr('draggable', true)
        .on('dragstart', (event) => {
            event.originalEvent.dataTransfer.setData('drag', PUZZLE_ID);
         });
    $('#puzzle-goal')
        .on('dragover', event => {
            event.preventDefault();
        })
        .on('drop', event => {
            event.preventDefault();
            if (event.originalEvent.dataTransfer.getData('drag') === PUZZLE_ID) {
                onComplete();
            }
        });
})(onPuzzleComplete);

function onPuzzleComplete() {
    console.log('puzzle complete');
    $('#puzzle-piece').hide();
    $('#puzzle-goal').hide();
}