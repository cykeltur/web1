
//____________
var alert,siteVote;

function focusornot() {
    'use strict';
    var amuntfeild = document.getElementById("userInput");
    amuntfeild.onfocus = function () {
        //alert("focus");
        if (amuntfeild.value === "Ange antalet pajer...") {
            amuntfeild.value = "";
        }
    };
    amuntfeild.onblur = function () {
        //alert("onblur");
        if (amuntfeild.value === "") {
            amuntfeild.value = "Ange antalet pajer...";
        }
    };
}

//------------
var glogalnumberofpies = 1;
function calcamount(onepievalue, iditem) {
    'use strict';
    //var theonepievalue = Number(onepievalue);
    //var result = glogalnumberofpies * theonepievalue;
    var result = glogalnumberofpies * Number(onepievalue);
    //console.log(result);
    document.getElementById(iditem).innerHTML = result;
}

function calcamountfirst(onepievalue) {
    'use strict';
    //var theonepievalue = Number(theonepievalue);
    //var result = glogalnumberofpies * theonepievalue;
    //console.log(result);
    var result = glogalnumberofpies * Number(onepievalue);
    return result;
}

function updatechart(amount) {
    'use strict';
    var multiplyer = amount;
    calcamount(2.5, "pajSemper");
    calcamount(0.5, "pajKokosmjöl");
    calcamount(150, "pajsmör");
    calcamount(0.5, "pajsalt");
    calcamount(0.5, "pajströsocker");
    calcamount(2, "pajvatten");
    calcamount(2, "fyllsemper");
    calcamount(125, "fyllsmör");
    calcamount(1.5, "fyllströsocker");
    calcamount(0.5, "fyllsalt");
    calcamount(3, "fyllsirap");
    calcamount(2, "fyllägg");
    calcamount(1, "fyllvaniljsocker");
    calcamount(150, "pecannotter");
}

function newDate() {
    'use strict';
    var today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth() + 1,//January is 0 and so on!
        yyyy = today.getFullYear();
    
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

glogalnumberofpies = 1;
updatechart(glogalnumberofpies);
function displayOutput() {
    'use strict';
    var input = document.getElementById("userInput").value,
        thenumber = Number(input);
    if (input.length < 1) {
        alert("Var vänlig att ange antalet pajer");
        return;
    }
    
    if (isNaN(thenumber)) {
        alert("Ange ett antal i siffror");
    } else {
        if (thenumber > 10) {
            alert("alldeles för många pajer!");
        } else if (thenumber < 1) {
            alert("Vill du inte ens försöka baka en?!");
        } else {
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




//___________
function loadXLMData() {
    'use strict';
    var theRequest, counter = 0;
    if (window.XMLHttpRequest) {
        theRequest = new XMLHttpRequest();
        alert("firefox/crome/safari");
    } else if (window.ActiveXObject) {
        theRequest = new ActiveXObject("Microsoft.XMLHTTP");
        alert("IE");
    }
    
    //var webPath = //"https://dl.dropboxusercontent.com/s/tsvriw11l8yansj/recepts.xml";
    //theRequest.open("GET", "https://dl.dropboxusercontent.com/s/tsvriw11l8yansj/recepts.xml", true); 
    //theRequest.open("GET", webPath, true);
    //theRequest.open("GET", "recepts.xml", true);
    //try {theRequest.responseType="msxml-document"} catch(err) {} // Helping IE
    //theRequest.send("");//"null");
    //alert("send?");
    theRequest.onreadystatechange = function () {
        if (theRequest.readyState === 4 && theRequest.status === 200) {
            alert("in the state4 :-)");
            //document.getElementById("XMLTest").innerHTML = theRequest.responseText;
            //TheXMLFunction(theRequest);
        }
    };
    return theRequest;
}


function loadData(theElement) {
    'use strict';
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "recepts.xml",
            cache: false,
            dataType: "xml",
            success: function (xml) {
                $(xml).find(theElement).each(function () {
                    var items = $(this).find('item').text(),
                        names = $(this).find('name').text(),
                        values = $(this).find('value').text(),
                        units = $(this).find('unit').text();
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
    'use strict';
    $(array).find('name').each(function () {
        var names = $(this).text();
        alert("name: " + names);
    });
    var values = $(array).find('value').map(function () {
        return this.outerHTML; // to get the techjob
    }).get(),
        units = $(array).find('unit').map(function () {
            return this.outerHTML; // to get the techjob
        }).get();    //alert(values);
    //alert(units);
}

function getNodeValue(obj, tag) {
    'use strict';
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

//______________ Ratings..
//hover the stares; section id = ratings


var s1 = document.getElementById("star1"),
    s2 = document.getElementById("star2"),
    s3 = document.getElementById("star3"),
    s4 = document.getElementById("star4"),
    s5 = document.getElementById("star5");

var theStar;

function lightStar(number) {
    'use strict';
    if (number === 1) {
        s1.style.color = "red";
        s2.style.color = "silver";
        s3.style.color = "silver";
        s4.style.color = "silver";
        s5.style.color = "silver";
    }
    if (number === 2) {
        s1.style.color = "red";
        s2.style.color = "red";
        s3.style.color = "silver";
        s4.style.color = "silver";
        s5.style.color = "silver";
    }
    if (number === 3) {
        s1.style.color = "red";
        s2.style.color = "red";
        s3.style.color = "red";
        s4.style.color = "silver";
        s5.style.color = "silver";
    }
    if (number === 4) {
        s1.style.color = "red";
        s2.style.color = "red";
        s3.style.color = "red";
        s4.style.color = "red";
        s5.style.color = "silver";
    }
    if (number === 5) {
        s1.style.color = "red";
        s2.style.color = "red";
        s3.style.color = "red";
        s4.style.color = "red";
        s5.style.color = "red";
    }
}
function starHover(theStar) {
    'use strict';
    if (theStar === s1) {
        lightStar(1);
        //alert("star1");        
    }
    if (theStar === s2) {
        lightStar(2);
    }
    if (theStar === s3) {
        lightStar(3);
    }
    if (theStar === s4) {
        lightStar(4);
    }
    if (theStar === s5) {
        lightStar(5);
    }
}

function setSiteRating(RatingScoreResult, NumberOfRatingsResult) {
    'use strict';
    var theRScoreId = "RatingScore",//RatingScore ID
        theNOfRsId = "NumberOfRatings";//NumberOfReitings ID
    document.getElementById(theRScoreId).innerHTML = RatingScoreResult;
    document.getElementById(theNOfRsId).innerHTML = NumberOfRatingsResult;
    alert("i setRating : " + RatingScoreResult)
    if (RatingScoreResult == 1) {
        lightStar(1);
    }
    if (RatingScoreResult == 2) {
        lightStar(2);
    }
    if (RatingScoreResult == 3) {
        lightStar(3);
    }
    if (RatingScoreResult == 4) {
        lightStar(4);
    }
    if (RatingScoreResult == 5) {
        lightStar(5);
    }
}

function loadRatingPointsStart() {
    'use strict';
    //alert("here shoult the reiting be loaded");
    var demoRatingScore = 3,
        demoNumberOfRatings = 30;
    setSiteRating(demoRatingScore, demoNumberOfRatings);
}

function starOut(theStar) {
    'use strict';
    if (theStar === s1) {
        //alert("star1");
        s1.style.color = "silver";
        s2.style.color = "silver";
        s3.style.color = "silver";
        s4.style.color = "silver";
        s5.style.color = "silver";
    }
    if (theStar === s2) {
        s1.style.color = "silver";
        s2.style.color = "silver";
        s3.style.color = "silver";
        s4.style.color = "silver";
        s5.style.color = "silver";
    }
    if (theStar === s3) {
        s1.style.color = "silver";
        s2.style.color = "silver";
        s3.style.color = "silver";
        s4.style.color = "silver";
        s5.style.color = "silver";
    }
    if (theStar === s4) {
        s1.style.color = "silver";
        s2.style.color = "silver";
        s3.style.color = "silver";
        s4.style.color = "silver";
        s5.style.color = "silver";
    }
    if (theStar === s5) {
        s1.style.color = "silver";
        s2.style.color = "silver";
        s3.style.color = "silver";
        s4.style.color = "silver";
        s5.style.color = "silver";
    }
    loadRatingPointsFromServer(siteVote);
}

function starLight(TheStar) { //mousedownClick
    'use strict';
    if (theStar === s1) {
        s1.style.color = "gold";
    }
    if (theStar === s2) {
        s2.style.color = "gold";
    }
    if (theStar === s3) {
        s3.style.color = "gold";
    }
    if (theStar === s4) {
        s4.style.color = "gold";
    }
    if (theStar === s5) {
        s5.style.color = "gold";
    }
}

function loadRatingPointsFromServer(vote) {
    'use strict';
    siteVote = vote;
    setSiteRating(vote, 31);
}

function sendVote(userVote) {
    'use strict';
    //update the vote on server..
    alert(userVote);
    loadRatingPointsFromServer(userVote);
}


function starClick(theStar) {
    'use strict';
    var vote;
    if (theStar === s1) {
        vote = 1;
    }
    if (theStar === s2) {
        vote = 2;
    }
    if (theStar === s3) {
        vote = 3;
    }
    if (theStar === s4) {
        vote = 4;
    }
    if (theStar === s5) {
        vote = 5;
    }
    sendVote(vote);
    loadRatingPointsFromServer();
}



//function starHover() {
//    'use strict';
 /*   s1.style.color = 'red';
    s2.style.color = 'red';
    s3.style.color = 'red';
    s4.style.color = 'red';
    s5.style.color = 'red';*/
//    alert("hover");
//}
//function starOut() {
//    'use strict';
/*    s1.style.color = 'silver';
    s2.style.color = 'silver';
    s3.style.color = 'silver';
    s4.style.color = 'silver';
    s5.style.color = 'silver';*/
//}


window.onload = function () {
    'use strict';
    alert("in onload");
    focusornot();
    loadData('pajskal');
    loadData('fyllning');
    loadRatingPointsStart();
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
    
};