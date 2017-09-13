/*
- open popup 
*/
(function(){
    $('#shower-popup-mask').on('click', event => {
        $(event.target).parent().hide();
    });
    $('#shower-small').on('click', event => {
        $('#shower-popup').show();
    });
})();