var textArea = $('.textArea');
var digitationTime = $("#digitationTime").text();

$(document).ready(function() {
    startCount();
    timeLeft();
    restart();
    $("#restart").on('click', function() {
        restart();
    });
});

function startCount() {
    textArea.on('input', function() {
        var content = textArea.val();
        var wordCount = content.split(/\S+/).length -1;
    
        $("#lenghtPhrase").text(wordCount);
        $("#countCaracters").text(content.length);
    });
}

function timeLeft() {  
    var timeLeft = $("#digitationTime").text();
    textArea.one('focus', function() {
        var id = setInterval(function() {
            timeLeft--;
            $("#digitationTime").text(timeLeft);
            if (timeLeft == 0) {
                textArea.attr('disabled', 'disabled');
                clearInterval(id);
            }
        }, 1000);
    });
}

function restart() {
        textArea.val('');
        textArea.removeAttr('disabled');
        $("#digitationTime").text(digitationTime);
        $("#countCaracters").text("0");
        $("#lenghtPhrase").text("0");
        timeLeft();
}


