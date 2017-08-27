
// creates angular on the whole of this tag in html - body /////

var app = angular.module("myApp", []);

// usually in a seperate file, it creates an entire piece of 

app.controller('firstCtrl', function($scope){

  //name var
  $scope.myName = 'Brian';

  //change name function
  $scope.logChanges = function(x){
    console.log(x);
  }

  $scope.nameArr = ['brian', 'chris', 'nick', 'matt', 'sam', 'isaac'];



// $scope.namePets = ['dog', 'cat', 'mouse', 'snake']

var brian = {
	name: 'brian',
	job: 'bottlewasher',
}
var tom = {
	name: 'tom',
	job: 'sweeper',
}
var matt = {
	name: 'matt',
	job: 'porter',
}

$scope.objArr = [brian, tom, matt];

})