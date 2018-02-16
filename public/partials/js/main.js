angular.module('dicegame',['ngRoute'])
    .config(function($routeProvider){
    
    $routeProvider.when('/game', {
		templateUrl: 'partials/game.html',
        controller: 'diceController'
	});
    
    $routeProvider.otherwise({redirectTo: '/game'});
})