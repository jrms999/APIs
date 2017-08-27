
// creates angular on the whole of this tag in html - body /////

var app = angular.module("myApp", []);

// usually in a seperate file, it creates an entire piece of 

app.controller('firstCtrl', function($scope, $http){


// new york times api key /////////////////
// https://developer.nytimes.com//////////
$http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=ham&api-key=fbb07d1a4e4f6f90c4509b27c2bc6938:9:73594931').then(function(response){
  
  console.log(response.data.response.docs);
});

})


// https://stackoverflow.com/questions/35347054/how-to-create-youtube-search-through-api /////////////////////
$(function() {
  $('#search-term').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm) {
  var params = {
    part: 'snippet',
    key: '',
    q: query
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data) {
    showResults(data.Search);
  });
}

function showResults(results) {
  var html = "";
  $.each(results, function(index, value) {
    html += '<p>' + video.snippet.title + '</p>';
    console.log(video.snippet.title);
  });
  $('#search-results').html(html);
}

// second form for working snippet search API engine ///////////
$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyDAKDaBy_JDwcScSHqDQimOOLjdPImLanc',
        q: searchTerm
    };
  
    $.getJSON(url, params, function (searchTerm) {
        showResults(searchTerm);
    });
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    
    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var thumbnail = value.snippet.thumbnails.default.url;
        html += '<p>' + title + '</p>';
        html += '<img src="' + thumbnail + '">';
    }); 
    
    $('#search-results').html(html);
}



