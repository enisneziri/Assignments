//Fig. 10.12: randompicture2.js
//random image selection using arrays
var iconImg;
var pictures = [ "SEO", "ETP", "GPP", "GUI", "PERF", "PORT", "SEO"];
var descriptions = ["Common Programing error", "Error-Prevention Tip", "Good programming practice", "Look-and-feel Observation",
"Performance Tip", "Protability Tip", "Software Engineering Observation"];

//pick a random image and corresponding description then modify
//the img element in document's body
function pickImage()
{
    var index = Math.floor( Math.random()* 7);
    iconImg.setAttribute("src", pictures[index] +  ".png");
    iconImg.setAttribute("alt", descriptions[index]);
}//end function pick image

//registers iconImg's click event handler
function start()
{
    iconImg = document.getElementById("iconImg");
    window.addEventListener("click", pickImage, false);
}//end function start

window.addEventListener("load", start,false);