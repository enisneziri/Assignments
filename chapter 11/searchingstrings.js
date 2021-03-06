//Fig. 11.7: searchingstrings.js
//searching strings with indexof and last indexof
var letters = "abcdefghijklmnopqrstuvwyzabcdefghijklm";

function buttonPressed()
{
    var inputFeild = document.getElementById("inputFeild");

    document.getElementById("results").innerHTML = "<p>First occurrence is located at index " +
    letters.indexOf( inputFeild.value ) + "</p>" + 
    "<p>Last occurrence is located at index " +
    letters.lastIndexOf( inputFeild.value ) + "</p>" +
    letters.indexOf( inputFeild.value, 12 ) + "</p>" +
    "<p>Last occurrence from index 12 is located at index " +
    letters.indexOf( inputFeild.value, 12 ) + "</p>";
}//end function buttonpressed

//register clic even handler for search button
function start()
{
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", buttonPressed, false);
}//end function start

window.addEventListener("load", start, false);