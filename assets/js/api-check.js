//resetApiKey();
function resetApiKey() {
  localStorage.removeItem('valApiKey');
}
function saveData1() {
  var input = document.getElementById('saveApiKey1').value;
    fetch("https://api.hypixel.net/key?key=" + input)
       .then((response) => {
         return response.json();
       })
       .then((data) => {
         console.log(data.success)
         if (data.success == true) {
          localStorage.setItem('valApiKey', input);
          location.reload();
         }
         else {
          localStorage.removeItem('valApiKey');
          location.reload();
         }
       });
}
function saveData2() {
  var input = document.getElementById('saveApiKey2').value;
  fetch("https://api.hypixel.net/key?key=" + input)
       .then((response) => {
         return response.json();
       })
       .then((data) => {
         console.log(data.success)
         if (data.success == true) {
          localStorage.setItem('valApiKey', input);
          location.reload();
         }
         else {
          localStorage.removeItem('valApiKey');
          location.reload();
         }
       });
}
if (localStorage.getItem("valApiKey") === null) {
  $(".apikey-sOn").show();
  $(".apikey-sOk").hide();
}
else {
  $(".apikey-sOn").hide();
}