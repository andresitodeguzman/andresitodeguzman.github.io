angular.module('journal',['menubar','footerbar']).component('journal',{
  
  templateUrl: 'app/activity/journal/journal.template.html',
  controller: function journalController(){
            
      this.$onInit = ()=>{
        window.data.currentPage = "Journal";
          
        window.db.collection('blog').get().then(querySnapshot=>{
           $(".blogContainer").html("");
           var a = [];
           querySnapshot.forEach(doc=>{
              var d = doc.data();
              a.push(d);
	       });
            
           (a.reverse()).forEach(obj=>{
               var d = obj;
               var tpl = `
                <div class="card">
	                <p class="title">${d.title}</p>
    	            <p>${d.content.slice(0,180)}...</p>
					<p>Filed under '${d.category}'</p><br>
	                <a href="#!/read?resource=${encodeURIComponent(d.title)}">Read More</a>
                </div>
                `;
               $(".blogContainer").append(tpl);

           });
        });
          
      };
            
  } 
    
});