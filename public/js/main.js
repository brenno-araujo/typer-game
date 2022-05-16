var textArea = $('.textArea');
var digitationTime = '10';
var phrase = $(".phrase").text();

$(document).ready(function() {
    startCount();
    timeLeft();
    restart();
    isCorrect();
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
                textArea.addClass('text-area-disabled');
            }
        }, 1000);
    });
}

function isCorrect() {
    textArea.on('input', function() {
        var typed = textArea.val();
        var comparation = phrase.substring(0, typed.length);
        if (typed == comparation) {
            textArea.addClass('text-area-correct');
            textArea.removeClass('text-area-incorrect');
        } else {
            textArea.removeClass('text-area-correct');
            textArea.addClass('text-area-incorrect');
        }
    });
}

function restart() {
        textArea.val('');
        textArea.removeAttr('disabled');
        $("#digitationTime").text(digitationTime);
        $("#countCaracters").text("0");
        $("#lenghtPhrase").text("0");
        textArea.removeClass('text-area-disabled');
        textArea.removeClass('text-area-incorrect');
        textArea.removeClass('text-area-correct');
        timeLeft();
}


