window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
       document.getElementById("cornerBtn").style.display = "block";
     } else {
       document.getElementById("cornerBtn").style.display = "none";
     }
   }

   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }


window.onload=function () {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();
}