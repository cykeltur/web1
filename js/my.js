//____________


function focusornot() {
    var amuntfeild = document.getElementById("userInput");
    amuntfeild.onfocus = function () {
    //alert("focus");
        if (amuntfeild.value == "Ange antalet pajer..."){
            amuntfeild.value = "";
        } 
    };
    amuntfeild.onblur = function () {
    //alert("onblur");
        if (amuntfeild.value == "") {
            amuntfeild.value = "Ange antalet pajer...";
            }
        };
    }

//------------

function newDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0 and so on!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("date").innerHTML = today;
    //d.toDateString();
}

//____________


            var glogalnumberofpies = 1;            
            updatechart(glogalnumberofpies);
        function displayOutput() {
            var input = document.getElementById("userInput").value;
            if (input.length < 1 ) {
                alert("Var vänlig att ange antalet pajer");
                return;
            }
            var thenumber = Number(input);
            if (isNaN(thenumber) ){
                alert("Ange ett antal i siffror");
            }   else{
                if (thenumber>10 ){
                    alert("alldeles för många pajer!");
                }
                else if (thenumber<1 ){
                    alert("Vill du inte ens försöka baka en?!");
                }
                else{
                    glogalnumberofpies = thenumber;
                    //animation out :-)
                    //$("ul").hide(1000);
                    $('.hideOrNot').hide(500);
                    //do the calc
                    updatechart(thenumber);
                    //animation in :-)
                    //$("ul").show(1000);
                    $('.hideOrNot').show(500);
                    document.getElementById("numberofpaj").innerHTML = input + " pajer";                    
                    }
            }   
        }
            
        function calcamount ( onepievalue,iditem ) {
            var theonepievalue = Number(onepievalue);
            var result = glogalnumberofpies * theonepievalue;
            console.log(result);            
            document.getElementById(iditem).innerHTML = result ;
            
        }
        
        function calcamountfirst ( onepievalue ) {
            var theonepievalue = Number(theonepievalue);
            var result = glogalnumberofpies * theonepievalue;
            console.log(result);            
            return result;
        }
        
        function updatechart ( amount ) {            
            var multiplyer = amount;
            calcamount ( 2.5 , "pajSemper" );
            calcamount ( 0.5 , "pajKokosmjöl" );
            calcamount ( 150 , "pajsmör" );
            calcamount ( 0.5 , "pajsalt" );
            calcamount ( 0.5 , "pajströsocker" );
            calcamount ( 2 , "pajvatten" );   
            
            calcamount ( 2 , "fyllsemper" );
            calcamount ( 125 , "fyllsmör" );
            calcamount ( 1.5 , "fyllströsocker" );
            calcamount ( 0.5 , "fyllsalt" );
            calcamount ( 3 , "fyllsirap" );
            calcamount ( 2 , "fyllägg" );
            calcamount ( 1 , "fyllvaniljsocker" );
            calcamount ( 150 , "pecannotter" );
            
        }
            
            
            
//___________
function loadXLMData(){
    
var theRequest;
if (window.XMLHttpRequest) {
    theRequest = new XMLHttpRequest();
    alert("firefox/crome/safari");
} else if (window.ActiveXObject) {
    theRequest = new ActiveXObject("Microsoft.XMLHTTP");   
    alert("IE");    
}       
var counter = 0;

    //var webPath = //"https://dl.dropboxusercontent.com/s/tsvriw11l8yansj/recepts.xml";
//theRequest.open("GET", "https://dl.dropboxusercontent.com/s/tsvriw11l8yansj/recepts.xml", true); 
//theRequest.open("GET", webPath, true);

//theRequest.open("GET", "recepts.xml", true);
//try {theRequest.responseType="msxml-document"} catch(err) {} // Helping IE
//theRequest.send("");//"null");
//alert("send?");
    
    
 theRequest.onreadystatechange = function() {
    alert("onreadystatechange.. no: " + ++counter);
    if (theRequest.readyState == 4 && theRequest.status == 200) {
        alert("in the state4 :-)");
        //document.getElementById("XMLTest").innerHTML = theRequest.responseText;
        //TheXMLFunction(theRequest);
    }
};
return theRequest;
}


function loadData (theElement) {   
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "recepts.xml",
            cache: false,
            dataType: "xml",
            success: function(xml) {
                $(xml).find(theElement).each(function(){
                    var items = $(this).find('item').text();
                    var names = $(this).find('name').text();
                    var values = $(this).find('value').text();
                    var units = $(this).find('unit').text();
                    alert(names); 
                   // $("<li></li>").html(names + ", " + //values).appendTo("#dvContent ul");
                });
//                var array = $(xml).find(theElement).map(function() {
//                    return this.outerHTML; // to get the techjob
//                }).get();
                
                
            }
        });
    });
    
}

function extractElements(array) {   
    
        $(array).find('name').each(function(){
                    var names = $(this).text();
                    alert("name: " + names);                     
                });
    var values = $(array).find('value').map(function() {
                    return this.outerHTML; // to get the techjob
                }).get(); 
    var units = $(array).find('unit').map(function() {
                    return this.outerHTML; // to get the techjob
                }).get(); 
    
    
    //alert(values);
    //alert(units);
}

function getNodeValue(obj,tag)
{
	return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}


window.onload = function() {
    alert("in onload");
    focusornot ();
    loadData('pajskal');
    loadData('fyllning');
    /* 
    var x=loadXLMData();
    var xml=x.responseXML;
    var path="/bookstore/book/title";
    // code for IE
if (window.ActiveXObject || xhttp.responseType=="msxml-document")
{
xml.setProperty("SelectionLanguage","XPath");
nodes=xml.selectNodes(path);
for (i=0;i<nodes.length;i++)
  {      
  document.write(nodes[i].childNodes[0].nodeValue);
  document.write("<br>");
  }
}
// code for Chrome, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
{
var nodes=xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
var result=nodes.iterateNext();

while (result)
  {
  document.write(result.childNodes[0].nodeValue);
  document.write("<br>");
  result=nodes.iterateNext();
  }
}

*/
    

}