/*
- turn on the kettle to make the mirror damp, so that a hidden message appears
- ...
*/
var state = {
    isMirrorFoggy: false,
    isKettleOn: false,
    isTvOn: false,
    channel: 0,
    changeChannelTo: 12345,
};

// kettle
$(document).ready(function(){
    $("#kettle").click(function(){
        toggleKettle();
        if(state.isMirrorFoggy == false) {
            $("#mirror").addClass("fog_on");
            state.isMirrorFoggy = true;
        }
    });

    $("#power_button").click(function() {
        toggleTv();
    })

    $("#ok_button").click(function() {
        if (state.isTvOn == true) {
            changeChannelTo();
        }
    })
});

function toggleKettle() {
    if (state.isKettleOn == true) {
        $("#steam").removeClass("steam_on");
        $("#steam").addClass("steam_off");
        state.isKettleOn = false;
    } else {
        $("#steam").removeClass("steam_off");
        $("#steam").addClass("steam_on");
        state.isKettleOn = true;
    }
}

function toggleTv() {
    if (state.isTvOn == true) {
        state.isTvOn = false;
    } else {
        state.isTvOn = true;
    }
    updateTvScreen();
}

function updateTvScreen() {
    if (state.isTvOn == false) {
        $("#tv").css("background-image", "url(black.png");
    } else {
        switch (state.channel) {
            case 12345:
                $("#tv").css("background-image", "url(channel_12345.png");
                break;
            default:
                $("#tv").css("background-image", "url(no_signal.gif");
        }
    }
}

function changeChannelTo() {
    state.channel = state.changeChannelTo;
    updateTvScreen();
}


