app.controller('portfolioController',$scope=>{

  $scope.projects = [];

  $scope.init = ()=>{
    $scope.getProjects();
  };

  $scope.getProjects = ()=>{
    $scope.projects = [];

    db.collection('projects').get()
      .then(querySnapshot=>{
	
	querySnapshot.forEach(doc=>{
	  var project = doc.data();
	  $scope.projects.push(project);
	});
	  
	$scope.$apply();

      })
      .catch(e=>{console.log(e);});
  };

});
