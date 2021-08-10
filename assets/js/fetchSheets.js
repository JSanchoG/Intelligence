var submit_date = new Date().toLocaleDateString("pl-PL");
function valueMissing() {
  Swal.fire(
    'Error!',
    'You have to fill all the required fiels to submit your application.',
    'warning'
  )
  $("#submit_button").show();
}
function guildReqs() {
  Swal.fire({
    title: 'Guild Requirements',
    html: '<a>- Catacombs Skill Level 22</a><br><a>- 30 Average Skill Level</a><br><a>- 1500 Weight (according to </a><a href="https://sky.shiiyu.moe/" target="_blank">SkyCrypt</a>)<br><br><a>Join our </a><a href="https://discord.gg/8p5arZsHyg" target="_blank">Discord Server</a><a>.</a>',
    showConfirmButton: false
  })
}
function appSentSuc() {
  Swal.fire(
    'Good luck!',
    'Your application has been submitted!<br>Join our <a href="https://discord.gg/8p5arZsHyg" target="_blank">Discord Server</a>.',
    'success'
  )
}
function appSentErr() {
  Swal.fire(
    'Error!',
    'An Error occured while submitting your application!',
    'error'
  )
}
function fetchToSheets() {
$("#submit_button").hide();
var ign = document.getElementById("ign").value;
var age = document.getElementById("age").value;
var timezone = document.getElementById("timezone").value;
var rank = document.getElementById("rank").value;
var best_sword = document.getElementById("best_sword").value;
var best_armor = document.getElementById("best_armor").value;
var avg_skill = document.getElementById("avg_skill").value;
var cata_skill = document.getElementById("cata_skill").value;
var link = document.getElementById("link").value;
var discord_tag = document.getElementById("discord_tag").value;
var anything_else = document.getElementById("anything_else").value;
if (ign === "" || age === "" || timezone === "" || rank === "" || best_sword === "" || best_armor === "" || avg_skill === "" || cata_skill === "" || discord_tag === "") {
  valueMissing()
}else {
  fetch("https://api.apispreadsheets.com/data/15608/", {
    method: "POST",
    body: JSON.stringify({"data": {"ign":ign,"age":age,"timezone":timezone,"rank":rank,"best_sword":best_sword,"best_armor":best_armor,"avg_skill":avg_skill,"cata":cata_skill,"link":link,"discord_tag":discord_tag,"anything_else":anything_else,"submit_date":submit_date}}),
  }).then(res =>{
    if (res.status === 201){
      // SUCCESS
      console.log(res.status);
      appSentSuc();
      }else{
        // ERROR
        console.log(res.status);
        appSentErr();
        }
      }) // FETCH END
    }
  }
