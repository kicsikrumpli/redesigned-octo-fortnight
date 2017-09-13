/*
- open popup 
*/
(function(){
    var showerTemps = [7, 23, 59, 61];
    var showerFlows = [0,0,0,0];
    const MAX_FLOW = 4;

    function calcTemp() {
        var flows = showerFlows.reduce((a, b) => a + b);
        var weightedTemps = showerTemps
            .map((value, index) => value * showerFlows[index])
            .reduce((a, b) => a + b);
        return flows > 0 ? weightedTemps / flows : undefined;
    }

    showerTemps.forEach((value, number) => {
        $(`#temp_${number}`).text(value);
    });

    $('#shower-popup-mask').on('click', event => {
        $(event.target).parent().hide();
    });
    $('#shower-small').on('click', event => {
        $('#shower-popup').show();
    });
    $('.shower-booth').on('click', event => {
        var showerClicked = parseInt(event.target.id.split('_')[1]);
        showerFlows[showerClicked] = (showerFlows[showerClicked] + 1) % MAX_FLOW;
        console.log(`Temp: ${calcTemp()}`);
    });
})();