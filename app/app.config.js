angular.module('andresitoApp').config([
  '$routeProvider',
  function config($routeProvider){
      $routeProvider
      	.when('/',{template:"<home></home>"})
      	.when('/portfolio',{template:"<portfolio></portfolio>"})
      	.when('/404',{template:"<notfound></notfound>"})
      	.otherwise('/404');
  }
]);