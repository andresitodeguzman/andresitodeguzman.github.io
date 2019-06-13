angular.module('portfolio',['menubar','footerbar']).component('portfolio',{
  
  templateUrl: 'app/activity/portfolio/portfolio.template.html',
  controller: function portfolioController(){
            
      this.$onInit = ()=>{
        window.data.currentPage = "Portfolio";
          
        try{
            window.db.collection('projects').get().then(querySnapshot=>{
               $(".projectsContainer").html("");
               querySnapshot.forEach(doc=>{
                   var d = doc.data();
                   var ab = "";
                   if(d.action){
                       ab = `<a href="${d.action[1]}">${d.action[0]}</a>`;
                   }
                   var tpl = `
                    <div class="card">
                        <div class="picture">
                            <img src="${d.previewImg}">
                        </div>
                        <div class="content">
                            <p class="title">
                                ${d.title}
                            </p>
                            <p>${d.description}</p>
                            ${ab}
                        </div>
                    </div>
                    `;
                   $(".projectsContainer").append(tpl);
               });
            }).catch(e=>{
                $(".projectsContainer").html("<p>An Error Occurred</p>");
            });
        } catch(e){
            $(".projectsContainer").html("<p>An Error Occurred</p>");
        }
      };
            
  } 
    
});