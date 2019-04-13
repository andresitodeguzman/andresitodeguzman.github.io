app.controller('blogController',$scope=>{
  
  $scope.title = "Hang on tight!";
  $scope.content = "You'll be reading my journal entry in no time. Just some Firebase thing going in the background.";
  $scope.category = "Uncategorized";
  $scope.tags = ["Welcome","Andresito"];
  $scope.timestamp = "Timestamp";

  $scope.init = ()=>{
    $scope.setPage();
  };

  $scope.setPage = ()=>{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

    var id = getUrlParameter('identify');

    if(!id){
      location.replace('/');
    }
    var docRef = db.collection('blog').doc(id);


    docRef.get().then((doc)=>{
      
      if(doc.exists){
	
	var post = doc.data();
	var ts = new Date(post.timestamp);
	ts = `${ts.toDateString()} - ${ts.toLocaleTimeString()}`;
	
	$scope.title = post.title;
	$scope.content = post.content;
	$scope.category = post.category;
	$scope.tags = post.tags;
	$scope.timestamp = ts;

	$scope.$apply();

      } else {
	location.replace('/?page=404');
      }

    }).catch(e=>{
      location.replace('/?page=500');
    });
  }

});
