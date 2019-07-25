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
   //      '"Month": "' + strMonth + '",' +
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
            if (response == "True") {
                //refresh the screen
                // SiteChanged();
                // setMessageDivVisibility("EncounterSuccessResult");
            } else {
                // setMessageDivVisibility("EncounterErrorResult");
            }

            // get all Groups records based on the returned doc_id
            recs = 0;
            // if no records returned, indicate "No values"
           if (recs == 0) {
               var e_lblStatus = document.getElementById("lblStatus");
                if (e_lblStatus)
                {
                    e_lblStatus.innerHTML = "This Document currently does not have any content.";
                }
           }
        },

        error: function (xhr) {
            alert("ERROR");
        }
    });
}