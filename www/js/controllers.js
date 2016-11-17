angular.module('starter.controllers', [])

.controller('UserController', function($scope, $http, $location) {
  $scope.conn = function() {
    $http({
      method: 'POST',
      url: '​http://remikel.fr/api.php?option=connexion',
      data: { 'password': $scope.password, 'email': $scope.mail}
      }).then( function success(response){
        console.log();
        $location.path('/user');
      });
      $location.path('/user'); // je fais la location ici car l'api ne fonctionne plus
  };

  $scope.send = function() {
    $http({
      method: 'POST',
      url: 'http://remikel.fr/api.php?option=inscription',
      data: { 'password': $scope.password, 'email': $scope.mail}
      }).then( function success(response){
        $location.path('/connexion');
      });
      $location.path('/connexion'); // je fais la location ici car l'api ne fonctionne plus
    };

  $scope.go = function ( path ) {
    $location.path( path );
    console.log('test');
  };

});

