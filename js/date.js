
//____________
var alert, siteVote = 2, chrome;

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
    //document.getElementById("date").innerHTML = today;
    $("#date").text(today);
    //d.toDateString();
}

//____________
window.onload = function () {
    'use strict';
    //alert("in onload");
    newDate();
    
};