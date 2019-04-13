angular.module('portfolio',['menubar','footerbar']).component('portfolio',{
  
  templateUrl: 'app/activity/portfolio/portfolio.template.html',
  controller: function portfolioController(){
      this.$onInit = ()=>{
        window.data.currentPage = "Portfolio";
      };
  }
    
});