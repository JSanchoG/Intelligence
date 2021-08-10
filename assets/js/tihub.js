let wbdApiKey = localStorage.getItem("valApiKey");

$(document).ready(function () {
  // FETCHING DATA FROM JSON FILE
  $.getJSON("https://api.hypixel.net/guild?key="+wbdApiKey+"&id=5c56e3c277ce84ef6c2a30af",
  function (data) {
    const aomembers = document.getElementById("aomembers");
    aomembers.innerHTML = data.guild.members.length + '/125';
    $(".apikey-sOk").show();
  }).fail(function(jqXHR) {
    if (jqXHR.status == 429) {
        $(".apikey-sOn").show();
        console.log("Error 429: Key Throttle")
    } else {
        //console.log("Unknown API Error");
    }
  });
});