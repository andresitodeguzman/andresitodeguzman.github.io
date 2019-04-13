app.controller('sayController',$scope=>{
  
  $scope.posts = [];

  $scope.init = ()=>{
    $scope.getSay();
  };

  $scope.getSay = ()=>{
    $scope.posts = [];

    db.collection('say').get().then(querySnapshot=>{
      querySnapshot.forEach(doc=>{
	
	var post = doc.data();
	var ts = post.timestamp.toDate();
	ts = new Date(ts);
	ts = `${ts.toDateString()} - ${ts.toLocaleTimeString()}`;

	var postData = {
	  "id": doc.id,
	  "content":post.content,
	  "author":post.author,
	  "author_email":post.author_email,
	  "timestamp":ts
	};

	$scope.posts.push(postData);

      });

      $scope.$apply();

    })
      .catch(error=>{
	console.log(error);
      });
    
  };

});
