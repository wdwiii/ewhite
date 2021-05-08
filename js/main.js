// $(document).ready(function(){
//     $('#menu-toggle').click(function(){
//         $('nav').toggleClass('active')
//     })
// })
//
// $(document).ready(function(){
//     $('#menu-toggle').click(function(){
//         $('#page-content').toggleClass('active')
//     })
// })

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("menuToggle").style.display = "none";
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("pageContent").style.opacity = "0";
    //document.getElementById("thumbnailContainer").style.opacity = "0";
    //document.getElementById("googleForm").style.opacity = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menuToggle").style.display = "block";
    document.getElementById("closeBtn").style.display = "none";
    document.getElementById("pageContent").style.opacity = "revert";
    //document.getElementById("thumbnailContainer").style.opacity = "revert";
    //document.getElementById("googleForm").style.opacity = "revert";
}

openNav.addEventListener()
