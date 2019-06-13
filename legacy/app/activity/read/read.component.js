angular.module('read',['menubar','footerbar']).component('read',{
  
  templateUrl: 'app/activity/read/read.template.html',
  controller: function readController(){
            
      this.$onInit = ()=>{
        window.data.currentPage = "Journal";        
        var id = decodeURIComponent(window.location.hash.substr(17));
          
        if(!id){
            window.location.replace('#!/404');
        }
          
        var docRef = window.db.collection('blog').where("title","==",id);
          
        docRef.get().then(doc=>{
           
            doc.forEach(qs=>{
                if(qs.exists){
                    var post = qs.data();
                    $("#title").html(post.title);
                    $("#content").html(post.content);
                    $("#category").html(post.category);
                    $("#tags").html(post.tags.join(', '));
                    
                    $("meta[property='og:title']").attr("content",post.title);
                    $("meta[property='og:description']").attr("content",post.content.slice(0,100));
                } else {
                    window.location.replace("#!/404");
                }
            });
            
        });

      };
      
      
            
  } 
    
});