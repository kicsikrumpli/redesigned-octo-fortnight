$(document).ready(() => (function(onComplete) {
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
})(onPuzzleComplete));

function onPuzzleComplete() {
    $('#puzzle-piece').hide();
    $('#puzzle-goal').hide();
    $('#curtain-right').addClass('pull-right');
    $('#curtain-left').addClass('pull-left');
}