
// creates angular on the whole of this tag in html - body /////

var app = angular.module("myApp", []);

// usually in a seperate file, it creates an entire piece of 

app.controller('firstCtrl', function($scope, $http){


// new york times api key /////////////////
$http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=ham&api-key=fbb07d1a4e4f6f90c4509b27c2bc6938:9:73594931').then(function(data){
  
  console.log(response.data.response.docs);
});

})



