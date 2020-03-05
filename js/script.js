/* global $ */
console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$(".searchBtn").click(function() {
  var searchInput = $('input').val();
  var requestUrl = 'https://api.giphy.com/v1/gifs/search?q=' + searchInput + '&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY';
  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var gif =  data.data[0].images.original.url;
      $('body').append('<img src ='+ gif + '>');
    });
});

$(".randomBtn").click(function() {
  var requestRandomUrl = 'https://api.giphy.com/v1/gifs/random?api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY'
  fetch(requestRandomUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var gifTwo = data.data.images.original.url
      console.log(gifTwo);
      $('body').append('<img src=' + gifTwo + '>');
    });
});