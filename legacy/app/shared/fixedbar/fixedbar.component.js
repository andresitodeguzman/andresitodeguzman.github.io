angular.module('fixedbar',[]).component('fixedbar',{
    templateUrl:'app/shared/fixedbar/fixedbar.template.html',
    controller: function menubarController(){
        
        this.list = window.data.menu;
        this.currentPage = window.data.currentPage;
        
        this.$onInit = ()=>{
            var sc = 0;
            window.addEventListener('scroll',(e)=>{                
				if(window.scrollY < sc && window.scrollY > 160){
                    $(".fixedbar").show();
                } else {
                    $(".fixedbar").hide();
                }
                sc = window.scrollY;
            });  

        };
        
    }
});