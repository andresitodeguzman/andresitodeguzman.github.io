angular.module('featured',['menubar','fixedbar','footerbar']).component('featured',{
  
  templateUrl: 'app/activity/featured/featured.template.html',
  controller: function featuredController(){
      this.$onInit = ()=>{
        window.data.currentPage = "Featured";
      };
  }
    
});