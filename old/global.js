const app = angular.module('andreApp',[]);
const db = firebase.firestore();

db.settings({
  timestampsInSnapshots:true
});

var getUser = ()=>{
  try {
    return JSON.parse(localStorage.getItem('firebase-user'));
  } catch(e){
    return {};
  }
};

var setUser = (user)=>{
  try {
    localStorage.setItem('firebase-user',JSON.stringify(user));
  } catch(e){
    console.log(e);
  }
};

var destroySession = ()=>{
  localStorage.clear();
  firebase.auth().signOut();
  M.toast({html:"Signed out successfully",durationLength:2000});
};

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


$(document).ready(function(){
  $('.sidenav').sidenav();

  showActivity('spotlight');

  if(getUrlParameter('page')){
    var page = getUrlParameter('page');
    showActivity(page);
  }

  $(".splashscreen").fadeOut('slow');

});  

var clear = ()=>{
  $('.activity').hide();
};

var showActivity = (activity)=>{
  clear();
  $(`#${activity}Activity`).fadeIn();
  $('.sidenav').sidenav('close');
};



