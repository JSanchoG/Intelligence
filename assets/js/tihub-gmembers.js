let wbApiKey = localStorage.getItem("valApiKey");

$(document).ready(function () {
  // FETCHING DATA FROM JSON FILE
  var wbdApiKey = localStorage.getItem("valApiKey");
  $.getJSON("https://api.hypixel.net/guild?key="+wbdApiKey+"&id=5c56e3c277ce84ef6c2a30af",
  function (data) {
    const root = document.getElementById("gmemberslist")
    data.guild.members.forEach((member) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add('col-lg-3', 'col-md-6', 'col-sm-6', 'member-element');
      const newDiv2 = document.createElement("div");
      newDiv2.classList.add('card', 'card-stats');
      const newDiv3 = document.createElement("div");
      if (member.uuid === "4b71487207474374b7be97362d56fa17") {
        newDiv3.classList.add('card-header', 'card-header-danger', 'card-header-icon');
        newDiv2.classList.add('dev');
      }
      else {
        newDiv3.classList.add('card-header', 'card-header-info', 'card-header-icon');
      }
      const newDiv4 = document.createElement("div");
      newDiv4.classList.add('card-icon');
      const newImg = document.createElement("img");
      const newParag = document.createElement("p");
      newParag.classList.add('card-category');
      const newh3 = document.createElement("h3");
      newh3.classList.add('card-title', 'member-ign');
      const newDiv5 = document.createElement("div");
      newDiv5.classList.add('card-footer')
      const newDiv6 = document.createElement("div");
      newDiv6.classList.add('stats')
      const newParag2 = document.createElement("p");
      const newi = document.createElement("i");
      newi.classList.add('material-icons');
      newi.innerHTML = "date_range";
      const DivDropdown1 = document.createElement("div");
      DivDropdown1.classList.add('collapse')
      const newhr = document.createElement("hr");
      const newDiv7 = document.createElement("div");
      newDiv7.classList.add('card-footer');
      const newid = document.createElement("i");
      newid.classList.add('material-icons');
      newid.innerHTML = "account_box";
      const newid2 = document.createElement("i");
      newid2.classList.add('material-icons');
      newid2.innerHTML = "account_box";
      const newDiv8 = document.createElement("div");
      newDiv8.classList.add('stats', 'col-md-6')
      const newParag3 = document.createElement("p");
      newParag3.innerHTML = "Level: 0.00";
      const newDiv9 = document.createElement("div");
      newDiv9.classList.add('stats', 'col-md-6')
      const newParag4 = document.createElement("p");
      newParag4.innerHTML = "Rank: null";
      const newi2 = document.createElement("i");
      newi2.classList.add('btn', 'btn-white', 'btn-round', 'btn-just-icon');
      newi2.id = "tihub-circle-dropdown";
      const newi3 = document.createElement("i");
      newi3.classList.add('material-icons');
      newi3.id = "tihub-lineheight";
      newi3.innerHTML = "expand_more";
      const newDiv10 = document.createElement("div");
      newDiv10.classList.add('ripple-container');
      newi3.setAttribute("data-toggle", "collapse");
      newi3.setAttribute("aria-expanded", "false");


       fetch("https://api.ashcon.app/mojang/v2/user/" + member.uuid)
       .then((response) => {
         return response.json();
       })
       .then((data) => {
         newh3.innerHTML= data.username;
         console.log("\x1b[36m" + data.username + "\x1b[37m" + " joined the guild at " + "\x1b[33m" + s);
         newDiv7.id = "gmemc_" + data.username;
         DivDropdown1.id = "collapse_"+data.username;
         newi3.setAttribute("onclick", "maintenance()")
         console.log("\x1b[37mCollapse Player Statistics - Under Maintenance")
         //newi3.setAttribute("href", "#collapse_"+data.username)
         //newi3.setAttribute("aria-controls", "#collapse_"+data.username)
       });

      newParag.innerHTML = member.rank;

      var s = new Date(member.joined).toLocaleDateString("pl-PL")
      newParag2.innerHTML = 'Joined the guild at '+s;

      newImg.src = "https://mc-heads.net/avatar/" + member.uuid + "/64.png";

      /*
       fetch("https://api.hypixel.net/player?key="+wbdApiKey+"&uuid=" + member.uuid)
       .then((response) => {
         return response.json();
       })
       .then((datad) => {
         var networkLevel = (Math.sqrt(datad.player.networkExp + 15312.5) - 125/Math.sqrt(2))/(25*Math.sqrt(2));
         var networkLeveld = (Math.round(networkLevel * 100) / 100).toFixed(2);
         newParag3.innerHTML = "Level: " + networkLeveld;
         var networkRank = datad.player.newPackageRank;
         if (networkRank === "MVP_PLUS") {
           console.log("MVP+ " + datad.player.displayname);
           newParag4.innerHTML = "Rank: MVP+";
         }
         else {
          if (networkRank === "MVP") {
            newParag4.innerHTML = "Rank: MVP";
           }
           else {
            if (networkRank === "VIP_PLUS") {
              newParag4.innerHTML = "Rank: VIP+";
             }
             else {
              if (networkRank === "VIP") {
                newParag4.innerHTML = "Rank: VIP";
              }
              else {
                newParag4.innerHTML = "Rank: Non-Ranked";
              }
             }
           }
         }
       });
       */


      newDiv.appendChild(newDiv2);
      newDiv2.appendChild(newDiv3);
      newDiv3.appendChild(newDiv4);
      newDiv4.appendChild(newImg);
      newDiv3.appendChild(newParag);
      newDiv3.appendChild(newh3);
      newDiv2.appendChild(newDiv5);
      newDiv5.appendChild(newDiv6);
      newDiv6.appendChild(newi);
      newDiv6.appendChild(newParag2);
      newDiv2.appendChild(DivDropdown1);
      DivDropdown1.appendChild(newhr);
      DivDropdown1.appendChild(newDiv7)
      newDiv7.appendChild(newDiv8);
      newDiv8.appendChild(newid);
      newDiv8.appendChild(newParag3);
      newDiv7.appendChild(newDiv9);
      newDiv9.appendChild(newid2);
      newDiv9.appendChild(newParag4);
      newDiv5.appendChild(newi2);
      newi2.appendChild(newi3);
      newi2.appendChild(newDiv10);
      root.appendChild(newDiv);
    });
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

function maintenance() {
  Swal.fire(
    'Error',
    'Player Statistics Feature is currently Under Maintenance.<br>Reason: API Key Throttle.',
    'error'
  )
}