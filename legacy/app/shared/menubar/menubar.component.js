angular.module('menubar',['fixedbar']).component('menubar',{
    templateUrl:'app/shared/menubar/menubar.template.html',
    controller: function menubarController(){
        
        this.list = window.data.menu;
        this.currentPage = window.data.currentPage;
        
    }
});