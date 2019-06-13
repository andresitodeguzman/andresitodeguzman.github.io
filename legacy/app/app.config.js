angular.module('andresitoApp').config([
  '$routeProvider',
  function config($routeProvider){
      $routeProvider
      	.when('/',{template:"<home></home>"})
      	.when('/portfolio',{template:"<portfolio></portfolio>"})
      	.when('/journal',{template:"<journal></journal>"})
      	.when('/read',{template:"<read></read>"})
      	.when('/featured',{template:"<featured></featured>"})
     	.when('/motion',{template:"<motion></motion>"})
      	.when('/404',{template:"<notfound></notfound>"})
      	.otherwise('/404');
  }
]);
