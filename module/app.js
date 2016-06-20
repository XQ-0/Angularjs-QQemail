var app = angular.module('myApp', ['ngRoute']);
// 定义路由表
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/sy',{
		templateUrl:'views/sy.html',
	}).when('/WL',{
		templateUrl:'views/writeLetter.html',
	}).when('/SL',{
		templateUrl:'views/receiveLetter.html',
		controller:'emailCtr'
	}).when('/TX',{
		templateUrl:'views/contact.html',
		controller:'contactCtr'
	}).otherwise({redirectTo:'/sy'})
}]);

app.controller('emailCtr', function($scope,$http) {
    $http.get('data/emailCon.json').success(function(data,status){
    		// console.log(data)
			$scope.emailCon=data;
		})
})

app.controller('contactCtr', function($scope,$http) {
    $http.get('data/contactCon.json').success(function(data,status){
			$scope.contactCon=data;
		})
})

