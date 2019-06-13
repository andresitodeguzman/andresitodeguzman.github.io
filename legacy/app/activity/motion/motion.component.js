angular.module('motion',['menubar','fixedbar','footerbar']).component('motion',{
  
  templateUrl: 'app/activity/motion/motion.template.html',
  controller: function motionController(){
      this.$onInit = ()=>{
        window.data.currentPage = "Motion";
      };
  }
    
});