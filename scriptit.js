

$(document).ready(function(){
    $('.sidenav').sidenav();
    
    $(".dropdown-trigger").dropdown(
        { 
            hover: true, 
            coverTrigger: false,
            alignment: "left",
        }        
    );

    $('.tooltipped').tooltip();    
         
    $('.materialboxed').materialbox();

    $('.scrollspy').scrollSpy();
 
});


 
