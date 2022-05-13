var phrase = $('.phrase').text();
var wordCount = phrase.split(' ').length;
var lenghtPhrase = $("#lenghtPhrase");

lenghtPhrase.text(wordCount);
