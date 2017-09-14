function endSequence() {
    $('#epilogue').show();
}

(function(){
    $('#qr-mini').on('click', event => {
        $(event.target.id).hide();
        $('#qr').show();
    });
    $('#qr').on('click', event => {

    });
})();
