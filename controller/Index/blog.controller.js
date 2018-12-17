app.controller('blogController',$scope=>{

  //Constant and Default Values
  $scope.posts = [];

  //Functions to initialize 
  $scope.init = ()=>{
    $scope.getPosts();
  }

  $scope.getPosts = ()=>{
      
      $scope.posts = [];

      db.collection('blog').get().then(querySnapshot=>{
	querySnapshot.forEach(doc=>{
	  var post = doc.data();
	  var ts = post.timestamp.toDate();
	  ts = new Date(ts);
	  ts = ts.toDateString();
	  var postData = {
	    "id":doc.id,
	    "title":post.title,
	    "content":post.content,
	    "category":post.category,
	    "tags":post.tags,
	    "timestamp":ts
	  };
	  $scope.posts.push(postData);
	});

	$scope.$apply();
      })
      .catch(error=>{console.log(error);});
  };

});
