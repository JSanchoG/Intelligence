//var date = new Date().toLocaleDateString("pl-PL");
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

function getAppsTo() {
  $("#getAppsToID").hide()
  $("#appsDiv").show();
  // FETCHING DATA FROM JSON FILE
  $.getJSON("https://api.apispreadsheets.com/data/15608/",
  function (data) {
    const root = document.getElementById("appsDiv")
    data.data.forEach((appout) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add('col-md-12');
      const newDiv2 = document.createElement("div");
      newDiv2.classList.add('card');
      const newDiv3 = document.createElement("div");
      const newDiv4 = document.createElement("div");
      newDiv4.classList.add('card-icon');
      newDiv4.setAttribute("style", "position:absolute;right:15px");
      const newImg = document.createElement("img");
      newImg.src = "https://mc-heads.net/avatar/" + appout.ign + "/64.png";
      const newh = document.createElement("h4");
      newh.classList.add('card-title');
      newh.innerHTML = "Guild Application";
      if (appout.if_accept == "yes") {
        newDiv3.classList.add('card-header', 'card-header-success');
        const accptSpan1 = document.createElement("span");
        accptSpan1.innerHTML = " accepted by ";
        const accptSpan2 = document.createElement("span");
        accptSpan2.classList.add('text-light');
        accptSpan2.setAttribute("style", "font-weight:400");
        accptSpan2.innerHTML = appout.reviewer;
        accptSpan1.appendChild(accptSpan2);
        newh.appendChild(accptSpan1);
        if (appout.during_reason !== "") {
          const accptSpan3 = document.createElement("span");
          accptSpan3.innerHTML = " (" + appout.during_reason + ")";
          accptSpan1.appendChild(accptSpan3);
        }
      }else {
        if (appout.if_accept == "no") {
          newDiv3.classList.add('card-header', 'card-header-danger');
          const accptSpan1 = document.createElement("span");
          accptSpan1.innerHTML = " rejected by ";
          const accptSpan2 = document.createElement("span");
          accptSpan2.classList.add('text-light');
          accptSpan2.setAttribute("style", "font-weight:400");
          accptSpan2.innerHTML = appout.reviewer;
          accptSpan1.appendChild(accptSpan2);
          newh.appendChild(accptSpan1);
          if (appout.during_reason !== "") {
            const accptSpan3 = document.createElement("span");
            accptSpan3.innerHTML = " (" + appout.during_reason + ")";
            accptSpan1.appendChild(accptSpan3);
          }
        }else {
          if (appout.if_accept == "during") {
            newDiv3.classList.add('card-header', 'card-header-warning');
            const accptSpan1 = document.createElement("span");
            accptSpan1.innerHTML = " currently being reviewed by ";
            const accptSpan2 = document.createElement("span");
            accptSpan2.classList.add('text-light');
            accptSpan2.setAttribute("style", "font-weight:400");
            accptSpan2.innerHTML = appout.reviewer;
            accptSpan1.appendChild(accptSpan2);
            newh.appendChild(accptSpan1);
            if (appout.during_reason !== "") {
              const accptSpan3 = document.createElement("span");
              accptSpan3.innerHTML = " (" + appout.during_reason + ")";
              accptSpan1.appendChild(accptSpan3);
            }
          }else {
            newDiv3.classList.add('card-header', 'card-header-primary');
          }
        }
      }
      const sumbit_date = new Date('1899-12-30').addDays(appout.submit_date).toLocaleDateString("pl-PL");
      const newParag = document.createElement("p");
      newParag.classList.add('card-category');
      newParag.innerHTML = "Application submitted at "+sumbit_date+".";
      const newDiv5 = document.createElement("div");
      newDiv5.classList.add('card-body');
      const form = document.createElement("form");
      form.setAttribute("name", "appForm");
      const newDiv6 = document.createElement("div");
      newDiv6.classList.add('row');
      // Application Form - Username
      const formelem_11 = document.createElement("div");
      formelem_11.classList.add('col-md-3');
      const formelem_12 = document.createElement("div");
      formelem_12.classList.add('form-group', 'bmd-form-group');
      const formelem_label_1 = document.createElement("label");
      formelem_label_1.classList.add('bmd-label-floating');
      formelem_label_1.innerHTML = "Username";
      const formelem_input_1 = document.createElement("input");
      formelem_input_1.classList.add('form-control');
      formelem_input_1.setAttribute("type", "text");
      formelem_input_1.setAttribute("name", "ign");
      formelem_input_1.value = appout.ign;
      // Application Form - Username END
      // Application Form - Age
      const formelem_21 = document.createElement("div");
      formelem_21.classList.add('col-md-1');
      const formelem_22 = document.createElement("div");
      formelem_22.classList.add('form-group', 'bmd-form-group');
      const formelem_label_2 = document.createElement("label");
      formelem_label_2.classList.add('bmd-label-floating');
      formelem_label_2.innerHTML = "Age";
      const formelem_input_2 = document.createElement("input");
      formelem_input_2.classList.add('form-control');
      formelem_input_2.setAttribute("type", "text");
      formelem_input_2.setAttribute("name", "age");
      formelem_input_2.value = appout.age;
      // Application Form - Age END
      // Application Form - Timezone
      const formelem_31 = document.createElement("div");
      formelem_31.classList.add('col-md-2');
      const formelem_32 = document.createElement("div");
      formelem_32.classList.add('form-group', 'bmd-form-group');
      const formelem_label_3 = document.createElement("label");
      formelem_label_3.classList.add('bmd-label-floating');
      formelem_label_3.innerHTML = "Timezone";
      const formelem_input_3 = document.createElement("input");
      formelem_input_3.classList.add('form-control');
      formelem_input_3.setAttribute("type", "text");
      formelem_input_3.setAttribute("name", "timezone");
      formelem_input_3.value = appout.timezone;
      // Application Form - Timezone END
      // Application Form - Rank
      const formelem_41 = document.createElement("div");
      formelem_41.classList.add('col-md-2');
      const formelem_42 = document.createElement("div");
      formelem_42.classList.add('form-group', 'bmd-form-group');
      const formelem_label_4 = document.createElement("label");
      formelem_label_4.classList.add('bmd-label-floating');
      formelem_label_4.innerHTML = "Rank";
      const formelem_input_4 = document.createElement("input");
      formelem_input_4.classList.add('form-control');
      formelem_input_4.setAttribute("type", "text");
      formelem_input_4.setAttribute("name", "rank");
      formelem_input_4.value = appout.rank;
      // Application Form - Rank END
      // Application Form - Best Sword
      const formelem_51 = document.createElement("div");
      formelem_51.classList.add('col-md-4');
      const formelem_52 = document.createElement("div");
      formelem_52.classList.add('form-group', 'bmd-form-group');
      const formelem_label_5 = document.createElement("label");
      formelem_label_5.classList.add('bmd-label-floating');
      formelem_label_5.innerHTML = "Best Sword (Outside and Inside a Dungeon)";
      const formelem_input_5 = document.createElement("input");
      formelem_input_5.classList.add('form-control');
      formelem_input_5.setAttribute("type", "text");
      formelem_input_5.setAttribute("name", "best_sword");
      formelem_input_5.value = appout.best_sword;
      // Application Form - Best Sword END
      // Application Form - Best Armor
      const formelem_61 = document.createElement("div");
      formelem_61.classList.add('col-md-4');
      const formelem_62 = document.createElement("div");
      formelem_62.classList.add('form-group', 'bmd-form-group');
      const formelem_label_6 = document.createElement("label");
      formelem_label_6.classList.add('bmd-label-floating');
      formelem_label_6.innerHTML = "Best Armor (Outside and Inside a Dungeon)";
      const formelem_input_6 = document.createElement("input");
      formelem_input_6.classList.add('form-control');
      formelem_input_6.setAttribute("type", "text");
      formelem_input_6.setAttribute("name", "best_armor");
      formelem_input_6.value = appout.best_armor;
      // Application Form - Best Armor END
      // Application Form - AVG Skill Level
      const formelem_71 = document.createElement("div");
      formelem_71.classList.add('col-md-2');
      const formelem_72 = document.createElement("div");
      formelem_72.classList.add('form-group', 'bmd-form-group');
      const formelem_label_7 = document.createElement("label");
      formelem_label_7.classList.add('bmd-label-floating');
      formelem_label_7.innerHTML = "Average Skill Level";
      const formelem_input_7 = document.createElement("input");
      formelem_input_7.classList.add('form-control');
      formelem_input_7.setAttribute("type", "text");
      formelem_input_7.setAttribute("name", "avg_skill");
      formelem_input_7.value = appout.avg_skill;
      // Application Form - AVG Skill Level END
      // Application Form - Catacombs Skill
      const formelem_81 = document.createElement("div");
      formelem_81.classList.add('col-md-2');
      const formelem_82 = document.createElement("div");
      formelem_82.classList.add('form-group', 'bmd-form-group');
      const formelem_label_8 = document.createElement("label");
      formelem_label_8.classList.add('bmd-label-floating');
      formelem_label_8.innerHTML = "Catacombs Skill Level";
      const formelem_input_8 = document.createElement("input");
      formelem_input_8.classList.add('form-control');
      formelem_input_8.setAttribute("type", "text");
      formelem_input_8.setAttribute("name", "cata_skill");
      formelem_input_8.value = appout.cata;
      // Application Form - Catacombs Skill END
      // Application Form - Link to SkyCrypt
      const formelem_91 = document.createElement("div");
      formelem_91.classList.add('col-md-3');
      const formelem_92 = document.createElement("div");
      formelem_92.classList.add('form-group', 'bmd-form-group');
      const formelem_label_9 = document.createElement("label");
      formelem_label_9.classList.add('bmd-label-floating');
      formelem_label_9.innerHTML = "Link to <b>sky.shiiyu.moe</b>";
      const formelem_input_9 = document.createElement("input");
      formelem_input_9.classList.add('form-control');
      formelem_input_9.setAttribute("type", "text");
      formelem_input_9.setAttribute("name", "link");
      formelem_input_9.value = appout.link;
      // Application Form - Link to SkyCrypt END
      // Application Form - Discord Tag
      const formelem_101 = document.createElement("div");
      formelem_101.classList.add('col-md-3');
      const formelem_102 = document.createElement("div");
      formelem_102.classList.add('form-group', 'bmd-form-group');
      const formelem_label_10 = document.createElement("label");
      formelem_label_10.classList.add('bmd-label-floating');
      formelem_label_10.innerHTML = "Discord Tag (User#0000)";
      const formelem_input_10 = document.createElement("input");
      formelem_input_10.classList.add('form-control');
      formelem_input_10.setAttribute("type", "text");
      formelem_input_10.setAttribute("name", "discord");
      formelem_input_10.value = appout.discord_tag;
      // Application Form - Discord Tag END
      // Application Form - Anything else
      const formelem_111 = document.createElement("div");
      formelem_111.classList.add('col-md-12');
      const formelem_112 = document.createElement("div");
      formelem_112.classList.add('form-group', 'bmd-form-group');
      const formelem_label_11 = document.createElement("label");
      formelem_label_11.classList.add('bmd-label-floating');
      formelem_label_11.innerHTML = "Anything else we should know? (can leave empty)";
      const formelem_input_11 = document.createElement("input");
      formelem_input_11.classList.add('form-control');
      formelem_input_11.setAttribute("type", "text");
      formelem_input_11.setAttribute("name", "anything_else");
      formelem_input_11.value = appout.anything_else;
      // Application Form - Anything else END




      newDiv3.appendChild(newDiv4);
      newDiv3.appendChild(newh);
      newDiv3.appendChild(newParag);
      newDiv4.appendChild(newImg);
      newDiv2.appendChild(newDiv3);
      newDiv.appendChild(newDiv2);
      newDiv2.appendChild(newDiv5);
      newDiv5.appendChild(form);
      form.appendChild(newDiv6)
      newDiv6.appendChild(formelem_11);
      formelem_11.appendChild(formelem_12);
      formelem_12.appendChild(formelem_label_1);
      formelem_12.appendChild(formelem_input_1);
      newDiv6.appendChild(formelem_21);
      formelem_21.appendChild(formelem_22);
      formelem_22.appendChild(formelem_label_2);
      formelem_22.appendChild(formelem_input_2);
      newDiv6.appendChild(formelem_31);
      formelem_31.appendChild(formelem_32);
      formelem_32.appendChild(formelem_label_3);
      formelem_32.appendChild(formelem_input_3);
      newDiv6.appendChild(formelem_41);
      formelem_41.appendChild(formelem_42);
      formelem_42.appendChild(formelem_label_4);
      formelem_42.appendChild(formelem_input_4);
      newDiv6.appendChild(formelem_51);
      formelem_51.appendChild(formelem_52);
      formelem_52.appendChild(formelem_label_5);
      formelem_52.appendChild(formelem_input_5);
      newDiv6.appendChild(formelem_61);
      formelem_61.appendChild(formelem_62);
      formelem_62.appendChild(formelem_label_6);
      formelem_62.appendChild(formelem_input_6);
      newDiv6.appendChild(formelem_71);
      formelem_71.appendChild(formelem_72);
      formelem_72.appendChild(formelem_label_7);
      formelem_72.appendChild(formelem_input_7);
      newDiv6.appendChild(formelem_81);
      formelem_81.appendChild(formelem_82);
      formelem_82.appendChild(formelem_label_8);
      formelem_82.appendChild(formelem_input_8);
      newDiv6.appendChild(formelem_91);
      formelem_91.appendChild(formelem_92);
      formelem_92.appendChild(formelem_label_9);
      formelem_92.appendChild(formelem_input_9);
      newDiv6.appendChild(formelem_101);
      formelem_101.appendChild(formelem_102);
      formelem_102.appendChild(formelem_label_10);
      formelem_102.appendChild(formelem_input_10);
      newDiv6.appendChild(formelem_111);
      formelem_111.appendChild(formelem_112);
      formelem_112.appendChild(formelem_label_11);
      formelem_112.appendChild(formelem_input_11);
      root.appendChild(newDiv);

      /*
      const appDropdown1 = document.createElement("div");
      appDropdown1.classList.add('collapse')
      appDropdown1.id = "collapse_"+appout.ign;
      const appFooter1 = document.createElement("div");
      appFooter1.classList.add('card-footer');
      appFooter1.id = "ftr_"+appout.ign;
      const appAccpt = document.createElement("div");
      appAccpt.classList.add('appAccept', 'col-md-6');
      const appAelem1 = document.createElement("a");
      appAelem1.classList.add('btn', 'btn-outline-success');
      appAelem1.setAttribute("role", "button");
      appAelem1.setAttribute("onclick", "setAccpt()");
      
      appAelem1.href = "#";
      appAelem1.id = "appAccpt";
      appAelem1.innerHTML = "Accept";
      const appAelem2 = document.createElement("a");
      appAelem2.classList.add('btn', 'btn-outline-danger');
      appAelem2.setAttribute("role", "button");
      appAelem2.setAttribute("onclick", "setDecln()");
      appAelem2.href = "#";
      appAelem2.id = "appDcln";
      appAelem2.innerHTML = "Decline";

      

      appDropdown1.appendChild(appFooter1);
      appFooter1.appendChild(appAccpt);
      appAccpt.appendChild(appAelem1);
      appFooter1.appendChild(appAelem2);
      


      const btnDrp = document.createElement("div");
      btnDrp.classList.add('col-md-12');
      btnDrp.setAttribute("style", "text-align:center");
      const btnDrp1 = document.createElement("i");
      btnDrp1.classList.add('btn', 'btn-white', 'btn-round', 'btn-just-icon');
      const btnDrp2 = document.createElement("i");
      btnDrp2.classList.add('material-icons');
      btnDrp2.setAttribute("data-toggle", "collapse");
      btnDrp2.setAttribute("aria-expanded", "false");
      btnDrp2.setAttribute("aria-controls", "#collapse_"+appout.ign);
      btnDrp2.setAttribute("href", "#collapse_"+appout.ign);
      btnDrp2.innerHTML = "expand_more";

      btnDrp1.appendChild(btnDrp2);
      btnDrp.appendChild(btnDrp1);
      */
    });

  });
};
