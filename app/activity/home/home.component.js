angular.module('home',['menubar','fixedbar','footerbar']).component('home',{
  
  templateUrl: 'app/activity/home/home.template.html',
  controller: function homeController(){
      this.$onInit = ()=>{
        window.data.currentPage = "About Me";
      };
  }
    
});