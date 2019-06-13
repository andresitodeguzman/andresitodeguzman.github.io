angular.module('home',['menubar','fixedbar','footerbar']).component('home',{
  
  templateUrl: 'app/activity/home/home.template.html',
  controller: function homeController(){
      this.$onInit = ()=>{
        window.data.currentPage = "About Me";

	var tp = document.getElementById('faceTypewriter');
	var typewriter = new Typewriter(tp,{loop:true});

	typewriter.typeString('Human Biology')
	    .pauseFor(2500)
	    .deleteAll()
	    .typeString('Progressive Web App')
	    .pauseFor(2500)
	    .deleteAll()
	    .typeString('User Experience')
	    .pauseFor(2500)
	    .start();

      };
  }
    
});
