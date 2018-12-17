app.controller('userController',$scope=>{
 
  $scope.setDefault = ()=>{
    $scope.uid = "";
    $scope.displayName = "Welcome Guest!";
    $scope.photoUrl = "https://loremflickr.com/320/240/dog";
    $scope.email = "";
    $scope.signInStatus = "Sign In";
  };

  $scope.init = ()=>{
    $scope.setDefault();
    firebase.auth().onAuthStateChanged(user=>{
      setUser(user);
      $scope.setUserView(user);
      $scope.$apply();
    });
  };

  $scope.setUserView = (user)=>{
    if(user){
      $scope.uid = user.uid;
      $scope.displayName = user.displayName;
      $scope.photoUrl = user.photoURL;
      $scope.email = user.email;
      $scope.signInStatus = "Sign Out";
    }

  };

  
  $scope.toggleSignIn = ()=>{
    if(getUser()){
    
	localStorage.clear();
	firebase.auth().signOut();
	M.toast({html:"Signed out successfully",durationLength:2000}); 
	$scope.setDefault();
	$scope.$apply();
    } else {
    
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result=>{
      setUser(result.user);
      M.toast({html:`Successfully signed in as ${result.user.displayName}`});
      $scope.signInStatus = "Sign Out";
      $scope.$apply();
  }).catch(e=>{
    alert(e);
    M.toast({html:"That didn't went through.",durationLength:2000});
  });


    
    }
    
  };

});
