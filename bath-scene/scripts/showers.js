/*
- open popup 
*/
(function(){
    $('.popup-mask').on('click', event => {
        $(event.target.parent.id).hide();
    });
    $('#shower-small').on('click', event => {
        $('#shower-popup').show();
    });
})();