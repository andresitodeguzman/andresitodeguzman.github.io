angular.module('notfound',['menubar','footerbar']).component('notfound',{
  
  templateUrl: 'app/activity/notfound/notfound.template.html',
  controller: function notfoundController(){
      this.$onInit = ()=>{
        window.data.currentPage = null;
      };
  }
    
});