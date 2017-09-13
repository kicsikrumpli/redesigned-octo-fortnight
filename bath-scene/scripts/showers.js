/*
- open popup 
*/
(function(onComplete){
    var showerTemps = [7, 23, 59, 61];
    var showerFlows = [0,0,0,0];
    const MAX_FLOW = 4;
    const TARGET_TEMP = 38;

    function calcTemp() {
        var flows = showerFlows.reduce((a, b) => a + b);
        var weightedTemps = showerTemps
            .map((value, index) => value * showerFlows[index])
            .reduce((a, b) => a + b);
        return flows > 0 ? weightedTemps / flows : undefined;
    }

    function updateLights(temp) {
        console.log(`Update lights to ${temp}C`);
    }

    function updateFlows() {
        showerFlows.forEach((value, index) => {
            $(`#jet_${index}`)
                .removeClass('flow_0')
                .removeClass('flow_1')
                .removeClass('flow_2')
                .removeClass('flow_3')
                .addClass(`flow_${value}`);
        });
        console.log(`Update flows ${showerFlows}`);
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
        var temp = calcTemp();
        updateLights(temp);
        updateFlows();
        if (temp === TARGET_TEMP) {
            onComplete();
        }
    });
})(onShowerComplete);

function onShowerComplete() {
    console.log('Shower Puzzle Complete');
    $('#shower-popup').hide(1500);
    $('#shower-small').off('click');
}