$(document).ready(() => (function(onComplete) {
    const PUZZLE_ID = 'puzzle-piece';
    $('#puzzle-piece')
        .attr('draggable', true)
        .on('dragstart', (event) => {
            $('#puzzle-piece').attr('data-orig-x', event.originalEvent.clientX);
            $('#puzzle-piece').attr('data-orig-y', event.originalEvent.clientY);
            event.originalEvent.dataTransfer.setData('drag', PUZZLE_ID);
         })
         .on('drag', (event) => {
            var puzzlePiece = $('#puzzle-piece');
            var origX = parseInt(puzzlePiece.attr('data-orig-x'));
            var origY = parseInt(puzzlePiece.attr('data-orig-y'));
            var newX = parseInt(event.originalEvent.clientX);
            var newY = parseInt(event.originalEvent.clientY);
            puzzlePiece.attr('data-orig-x', newX);
            puzzlePiece.attr('data-orig-y', newY);
            var deltaX = newX - origX;
            var deltaY = newY - origY;
            var origTop = parseInt(puzzlePiece.css('top').split('px')[0]);
            var origLeft = parseInt(puzzlePiece.css('left').split('px')[0]);
            var top = origTop + deltaY + 'px';
            var left = origLeft + deltaX + 'px';
            puzzlePiece.css('top', top);
            puzzlePiece.css('left', left);
        })
        .on('dragend', event => {
            $('#puzzle-piece').removeAttr('data-orig-x');
            $('#puzzle-piece').removeAttr('data-orig-y');
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