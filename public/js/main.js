// var phrase = $('.phrase').text();
// var wordCount = phrase.split(/\S+/).length;
// var lenghtPhrase = $("#lenghtPhrase");

// lenghtPhrase.text(wordCount);

var textArea = $('.textArea');

textArea.on('input', function() {
    var content = textArea.val();
    var wordCount = content.split(/\S+/).length -1;

    $("#lenghtPhrase").text(wordCount);
    $("#countCaracters").text(content.length);
});

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
