/*
- turn on the kettle to make the mirror damp, so that a hidden message appears
- ...
*/
var state = {
    isMirrorFoggy: false,
    isKettleOn: false,
    isTvOn: false,
    channel: 0,
    changeChannelTo: "",
    isRemoteControllerPickedUp: false
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
        if (state.isTvOn == true && state.changeChannelTo != "") {
            changeChannelTo();
        }
    })

    $("#remote_controller_small").click(function() {
        if (state.isRemoteControllerPickedUp == false) {
            state.isRemoteControllerPickedUp = true;
            pickUpRemoteController();
        } else {
            state.isRemoteControllerPickedUp = false;
            putDownRemoteController();
        }
    })


    $("#channel_0").click(function() {
        updateChangeChannelTo("0");
    })
    $("#channel_1").click(function() {
        updateChangeChannelTo("1");
    })
    $("#channel_2").click(function() {
        updateChangeChannelTo("2");
    })
    $("#channel_3").click(function() {
        updateChangeChannelTo("3");
    })
    $("#channel_4").click(function() {
        updateChangeChannelTo("4");
    })
    $("#channel_5").click(function() {
        updateChangeChannelTo("5");
    })
    $("#channel_6").click(function() {
        updateChangeChannelTo("6");
    })
    $("#channel_7").click(function() {
        updateChangeChannelTo("7");
    })
    $("#channel_8").click(function() {
        updateChangeChannelTo("8");
    })
    $("#channel_9").click(function() {
        updateChangeChannelTo("9");
    })

});

function updateChangeChannelTo(channelNumber) {
    if (state.isTvOn == true) {
        state.changeChannelTo += channelNumber;
        $("#change_channel_to").html(state.changeChannelTo);
    }
}

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

function pickUpRemoteController() {
    $("#remote_controller").css("-webkit-animation", "remote_controller_fade_in 1s forwards");
}

function putDownRemoteController() {
    $("#remote_controller").css("-webkit-animation", "remote_controller_fade_out 1s forwards");
}

function changeChannelTo() {
    state.channel = state.changeChannelTo;
    updateTvScreen();
}

function updateTvScreen() {
    state.changeChannelTo = "";
    $("#change_channel_to").html(state.changeChannelTo);

    if (state.isTvOn == false) {
        $("#tv").css("background-image", "url(black.png");
    } else {
        switch (state.channel) {
            case "12345":
                $("#tv").css("background-image", "url(channel_12345.gif");
                break;
            case "1":
                $("#tv").css("background-image", "url(channel_1.gif");
                break;
            case "2":
                $("#tv").css("background-image", "url(channel_2.gif");
                break;
            case "3":
                $("#tv").css("background-image", "url(channel_3.gif");
                break;
            case "4":
                $("#tv").css("background-image", "url(channel_4.gif");
                break;
            case "5":
                $("#tv").css("background-image", "url(channel_5.gif");
                break;
            case "6":
                $("#tv").css("background-image", "url(channel_6.gif");
                break;
            case "7":
                $("#tv").css("background-image", "url(channel_7.gif");
                break;
            case "8":
                $("#tv").css("background-image", "url(channel_8.gif");
                break;
            case "9":
                $("#tv").css("background-image", "url(channel_9.gif");
                break;
            default:
                $("#tv").css("background-image", "url(no_signal.gif");
        }
    }
}


