function getUrlBase() {
    return "http://localhost:6543"
}

function create_document() {
    //alert('inside create_doc()')
    // gather input values
    // var myElement = document.getElementById("ddlContractor");
    // strContractorIDs = myElement.ContractorID;
    //
    // var strSiteIDs = $("#ddlSite option:selected").val();
    // var strYear = $("#ddlContractYears option:selected").val();

    var element1 = document.getElementById("txtDocName");
    if (element1)
    {
        strDocName = element1.value;
    }
    // var strDocName =  $("#txtDocName").val();
    // alert(strDocName.value)
    // create the POST BODY
   //
   // var text4 = '{' +
   //      '"CCCNumber": "' + strSiteIDs + '",' +
   //      '"InfoType": "' + strinfoType + '",' +
   //      '"Year": "' + strYear + '",' +
   //      '"Month": "' + strMonth + '",' +v
   //      '"txtLOO_SelfPay": "' + removeAllCommas(document.getElementById("txtLOO_SelfPay").value) + '",' + '"}';
    var new_doc = '{' +
        	'"doc_name": "' + strDocName + '"}';

    $.ajax({
        type: "POST",
        url: getUrlBase() + "/api/documents",
        data: new_doc,
        // dataType: "json",
        contentType: "text/plain",

        beforeSend: function () {
            // turnBothOff("EncounterSuccessResult", "EncounterErrorInSummation");
            // alert(getUrlBase() + "/api/Documents")
        },

        success: function (response) {
            var lblDocName = document.getElementById("lblDocName");
            lblDocName.innerHTML = response;

            // get the doc and set the lblDocName to 'doc_name'
           var e_hdnDoc_id = document.getElementById("txt_doc_id");
           if (e_hdnDoc_id) {
               // e_btnAddContent.style.visibility = "visible";
               e_hdnDoc_id.value = response;
           }

            recs = 0;
            // if no records returned, indicate "No values"
           if (recs == 0) {
               var e_lblStatus = document.getElementById("lblStatus");
                if (e_lblStatus)
                {
                    e_lblStatus.innerHTML = "This Document currently does not have any content.";
                }
           }

           var e_btnAddContent = document.getElementById("btnAddContent");
           if (e_btnAddContent) {
               // e_btnAddContent.style.visibility = "visible";
               e_btnAddContent.style.display = "block";
           }
        },

        error: function (xhr) {
            alert("ERROR");
        }
    });
}

function create_content() {

    var element1 = document.getElementById("txt_doc_id");
    if (element1)
    {
        str_doc_id = element1.value;
    }

    var elementNewContent = document.getElementById("txt_new_content");
    if (elementNewContent)
    {
        str_new_content = elementNewContent.value;
    }
    var d = new Date();
    var n = d.toLocaleDateString();
    var new_content = '{' +
        '"doc_id": "' + str_doc_id + '",' +
        '"sec_date_in": "' + n + '",' +
        '"sec_text": "' + str_new_content + '"' +
        '}';

    $.ajax({
        type: "POST",
        url: getUrlBase() + "/api/sections",
        data: new_content,
        // dataType: "json",
        contentType: "text/plain",

        beforeSend: function () {
            // turnBothOff("EncounterSuccessResult", "EncounterErrorInSummation");
            // alert(getUrlBase() + "/api/Documents")
        },

        success: function (response) {
            var lblDocName = document.getElementById("lblDocName");
            lblDocName.innerHTML = response;

            recs = 0;
            // if no records returned, indicate "No values"
            if (recs == 0) {
                var e_lblStatus = document.getElementById("lblStatus");
                if (e_lblStatus) {
                    e_lblStatus.innerHTML = "Added content...";
                }
            }

            //generateSectionsDiv();

        },

        error: function (xhr) {
            alert("ERROR");
        }
    });

}

function getSectionsByDoc(str_doc_id) {

    // var element1 = document.getElementById("txt_doc_id");
    // if (element1)
    // {
    //     str_doc_id = element1.value;
    // }

    var elementNewContent = document.getElementById("txt_new_content");
    if (elementNewContent)
    {
        str_new_content = elementNewContent.value;
    }
    var d = new Date();
    var n = d.toLocaleDateString();
    var new_content = '{' +
        '"doc_id": "' + str_doc_id + '",' +
        '"sec_date_in": "' + n + '",' +
        '"sec_text": "' + str_new_content + '"' +
        '}';

    $.ajax({
        type: "GET",
        url: getUrlBase() + "/api/sections/" + str_doc_id,
        data: new_content,
        // dataType: "json",
        contentType: "text/plain",

        beforeSend: function () {
            // turnBothOff("EncounterSuccessResult", "EncounterErrorInSummation");
            // alert(getUrlBase() + "/api/Documents")
        },

        success: function (response) {
            var lblDocName = document.getElementById("lblDocName");
            lblDocName.innerHTML = response;

            recs = 0;
            // if no records returned, indicate "No values"
            // if (recs == 0) {
            //     var e_lblStatus = document.getElementById("lblStatus");
            //     if (e_lblStatus) {
            //         e_lblStatus.innerHTML = "Added content...";
            //     }
            // }
            //
            // generateSectionsDiv();

        },

        error: function (xhr) {
            alert("ERROR");
        }
    });

}

function generateSectionsDiv(sec_text) {

            // grab the main container
            var outerDiv = document.getElementById("outerDiv");
            // div1.className = "container-fluid text-center";
            //
            // var div1a = document.createElement("div")
            // div1a.className = "row content\"";

            // create an inner-div
            var innerDiv1 = document.createElement("div")
            innerDiv1.className = "col-sm-12 col-xs-12";


            var innerDiv2 = document.createElement("div")
            innerDiv2.className="panel-footer panelColor uuu"
            //innerDiv1b.className="row1a text-center";//"row1a"
            var text1 = document.createElement("text")
            text1.innerHTML=sec_text;//headline;
            innerDiv2.appendChild(text1);



            outerDiv.appendChild(innerDiv1)
            innerDiv1.appendChild(innerDiv2)
            // innerDiv1a.appendChild(innerDiv1b_a)
            // innerDiv1a.appendChild(innerDiv1b)
            // innerDiv1a.appendChild(innerDiv1b_b)
            // innerDiv1a.appendChild(innerDiv1c)
            // innerDiv1a.appendChild(innerDiv1cc)
            // innerDiv1a.appendChild(innerDiv1d)


}

function clear_outer_div() {
    var list = document.getElementById("outerDiv");
    //alert(list.childNodes.length);
    var i;
    for (i = 0; i < list.childNodes.length; i++) {
        list.removeChild(list.childNodes[i]);
    }

}


function set_not_visible(aDocName) {
     t =  document.getElementById(aDocName);
     t.style.display = "none";
}

function set_visible(aDocName) {
     t =  document.getElementById(aDocName);
     t.style.display = "block";
}


function open_doc_sections(strDoc_id) {
    //alert(aDocName);
    clear_outer_div();
    set_not_visible("divCurrentContent");
    set_not_visible('divCreateDocument');
    set_visible("outerDiv");
    $.ajax({
        type: "GET",
        url: getUrlBase() + "/api/group/" + strDoc_id,
        //data: new_content,
        // dataType: "json",
        contentType: "text/plain",

        beforeSend: function () {
            // turnBothOff("EncounterSuccessResult", "EncounterErrorInSummation");
            // alert(getUrlBase() + "/api/Documents")
        },

        success: function (response) {
            var list = document.getElementById("outerDiv");
            //alert(list.childNodes.length);
            var i;
            for (i = 0; i < list.childNodes.length; i++) {
                list.removeChild(list.childNodes[i]);
            }

            var lblDocName = document.getElementById("lblDocName");
            lblDocName.innerHTML = response;
            var arrayLength = response.length;
            for (var i = 0; i < arrayLength; i++) {
                console.log(response[i].doc_name);
                //Do something
                sec_text = response[i].sec_text;
                generateSectionsDiv(sec_text)
            }
            recs = 0;
            // if no records returned, indicate "No values"
            if (recs == 0) {
                var e_lblStatus = document.getElementById("lblStatus");
                if (e_lblStatus) {
                    e_lblStatus.innerHTML = "Added content...";
                }
            }

        },

        error: function (xhr) {
            alert("ERROR");
        }
    });

   // http://localhost:6543/api/group/6331d581-a87d-4818-bbea-069184d3e085
}