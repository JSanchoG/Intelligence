$(document).ready(function () {
  // FETCHING DATA FROM JSON FILE
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1osAEm_NtDB6FCSO5MZNhyHKb2EyM1R2QFRtJ1Bjiw7Y/1/public/full?alt=json",
  function (data) {
    data.feed.entry.forEach((line) => {
      console.log(line.content.$t)
      console.log(line.gs$cell.row)
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.innerHTML = line.content.$t;
    });
  });
});