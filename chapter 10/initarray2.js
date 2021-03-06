//fig 10.6: initarray2.js
//initializing arrays with initializer lists.
function start()
{
    //initializer list specifies the number of elements and 
    //a value for each element.
    var colors = new Array( "cyan","magenta","yellow","black");
    var integers1 = [2, 4, 6, 8 ];
    var integers2 = [2, , ,8 ];

    outputArray( "Array colors contains", colors, 
    document.getElementById("output1"));
    outputArray( "Array intgers1 contains", integers1,
    document.getElementById( "output2" ));
    outputArray( "Array intgers contains", integers2,
    document.getElementById( "output3" ));
    
}//end function start

//output the heading followed by a two-column table
//containing indices and elements of array
function outputArray( heading, theArray, output )
{
    var content = "<h2>" + heading + "</h2><table>" +
    "<thead><th>Index</th><th>Value</th></thead><tbody>";

    //output the index and value of each array element
    var length = theArray.length;//get arrays length once before loop

    for ( var i = 0; i < length; ++i )
    {
        content += "<tr><td>" + i + "</td><td>" + theArray[ i ] +
    "</td></tr>";    
    }//end for

    content += "</tbody></table>";
    output.innerHTML = content;//place the table in the output element
}//end function outputarray
window.addEventListener("load", start, false);