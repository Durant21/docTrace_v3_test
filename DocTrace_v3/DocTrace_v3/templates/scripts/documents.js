function saveEncounters() {

    // gather input values
    var myElement = document.getElementById("ddlContractor");
    strContractorIDs = myElement.ContractorID;

    var strSiteIDs = $("#ddlSite option:selected").val();
    var strYear = $("#ddlContractYears option:selected").val();

    // create the POST BODY

   var text4 = '{' +
        '"CCCNumber": "' + strSiteIDs + '",' +
        '"InfoType": "' + strinfoType + '",' +
        '"Year": "' + strYear + '",' +
        '"Month": "' + strMonth + '",' +
        '"txtLOO_SelfPay": "' + removeAllCommas(document.getElementById("txtLOO_SelfPay").value) + '",' + '"}';

    $.ajax({
        type: "POST",
        url: getUrlBase() + "/api/Encounters/EncountersCreate",
        data: text4,
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        beforeSend: function () {
            turnBothOff("EncounterSuccessResult", "EncounterErrorInSummation");
        },

        success: function (response) {
            if (response == "True") {
                //refresh the screen
                SiteChanged();
                setMessageDivVisibility("EncounterSuccessResult");
            } else {
                setMessageDivVisibility("EncounterErrorResult");
            }
        },

        error: function (xhr) {
            //alert("ERROR");
        }
    });
}