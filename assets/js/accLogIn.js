// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAL-m0Xqjovg6HZt4caGtVq07NOV2q4XlU",
  authDomain: "iq-project-131a3.firebaseapp.com",
  projectId: "iq-project-131a3",
  storageBucket: "iq-project-131a3.appspot.com",
  messagingSenderId: "162035384152",
  appId: "1:162035384152:web:c3418bee90499f63beef2d",
  measurementId: "G-DPB8ZCJ9EH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

/* ADMIN

$(".admAcc-3").show();
  $(".admAcc-5").css('display', 'flex');
  $(".admAcc_NOPERM").hide();
  $("#appsDiv").show();

ADMIN END*/


/* Account - Create New Account */
/* Account - Create New Account */
function accNewAcc() {
  Swal.fire({
    title: 'Sign Up',
    html: `<input type="email" id="acc-email" class="swal2-input" placeholder="E-Mail">
    <input type="password" id="acc-password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign Up',
    allowOutsideClick: false,
    focusConfirm: false,
    preConfirm: () => {
      const email = Swal.getPopup().querySelector('#acc-email').value
      const password = Swal.getPopup().querySelector('#acc-password').value
      return { email: email, password: password }
    }
  }).then((result) => {
    createNewAcc();
  });
}
function createNewAcc() {
  const email = Swal.getPopup().querySelector('#acc-email').value
  const password = Swal.getPopup().querySelector('#acc-password').value

  const promise = auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // SUCCESS
    $(".admAcc-1").hide();
    $(".admAcc-2").hide();
    $(".admAcc-3").hide();
    setTimeout(() => {
      location.reload();
    }, 2250);
    Swal.fire(
      'Success!',
      'Account for <b>'+email+'</b> was created.',
      'success',
    );
  })
  // ERROR
  .catch((error) => {
    Swal.fire(
      'Error!',
      error.message,
      'error',
    )
  });
}
/* Account - Create New Account END */
/* Account - Create New Account END */

/* Account - Log In to existing Account */
/* Account - Log In to existing Account */
function accLoginAcc() {
  Swal.fire({
    title: 'Log In',
    html: `<input type="email" id="acc-email" class="swal2-input" placeholder="E-Mail">
    <input type="password" id="acc-password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Log In',
    allowOutsideClick: false,
    focusConfirm: false,
    preConfirm: () => {
      const email = Swal.getPopup().querySelector('#acc-email').value
      const password = Swal.getPopup().querySelector('#acc-password').value
      return { email: email, password: password }
    }
  }).then((result) => {
    loginToAcc();
  })
}
function loginToAcc() {
  const email = Swal.getPopup().querySelector('#acc-email').value
  const password = Swal.getPopup().querySelector('#acc-password').value

  const promise = auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // SUCCESS
    $(".admAcc-1").hide();
    $(".admAcc-2").hide();
    $(".admAcc-3").hide();
    setTimeout(() => {
      location.reload();
    }, 2250);
    Swal.fire(
      'Success!',
      'Logged In as <b>'+email+'</b>.',
      'success',
    );
  })
  // ERROR
  .catch((error) => {
    Swal.fire(
      'Error!',
      error.message,
      'error',
    )
  });
}
/* Account - Log In to existing Account END */
/* Account - Log In to existing Account END */

/* Account - Log Out */
/* Account - Log Out */
function accLogOut() {
  auth.signOut();
  Swal.fire(
    'Success!',
    'Logged Out successfully.',
    'success',
  );
  $(".admAcc-4").hide();
  $("#ac_0_0").hide();
  setTimeout(() => {
    location.reload();
  }, 1750);
}
/* Account - Log Out END */
/* Account - Log Out END */

function resetPassword() {
  const curemail = auth.currentUser.email;
  auth.sendPasswordResetEmail(curemail)
  .then(() => {
    // SUCCESS
    Swal.fire(
      'Success!',
      'Password Reset Email was sent to <b>'+curemail+'</b>.',
      'success',
    )
  })
  .catch(error => {
    // ERROR
    Swal.fire(
      'Error!',
      error.message,
      'error',
    )
  })
}

auth.onAuthStateChanged(function(user) {
  if(user) {
    $(".admAcc-4").show();
    const ac_0_0 = document.getElementById("ac_0_0");
    const ac_1_1 = document.createElement("div");
    ac_1_1.classList.add('dropdown-divider');
    const ac_1_2 = document.createElement("a");
    ac_1_2.classList.add('dropdown-item');
    ac_1_2.href = "javascript:;";
    ac_1_2.setAttribute("onclick", "userMenu()");
    const ac_1_3 = document.createElement("div");
    ac_1_3.classList.add('ripple-container');
    const ac_1_4 = document.createElement("div");
    ac_1_4.classList.add('ripple-decorator', 'ripple-on', 'ripple-out');
    const ac_1_5 = document.createElement("p");
    ac_1_5.innerHTML = "Logged In as "
    const ac_1_6 = document.createElement("b");
    const uemail = user.email;
    ac_1_6.innerHTML = uemail;
    ac_1_5.appendChild(ac_1_6);
    ac_1_2.appendChild(ac_1_5);
    ac_1_2.appendChild(ac_1_3);
    ac_1_2.appendChild(ac_1_4);
    ac_0_0.appendChild(ac_1_1);
    ac_0_0.appendChild(ac_1_2);
  }else {
    console.log("No User Signed In");
    $(".admAcc-1").show();
    $(".admAcc-2").show();
    $(".admAcc-3").show();
    $(".admAcc_NOPERM").show();
  }
  fetch('https://iq-project-131a3-default-rtdb.europe-west1.firebasedatabase.app/.json?download=iq-project-131a3-default-rtdb-export.json')
  .then(response =>
    response.json()
  )
  .then((data) => {
    globalThis.UsrRlN = data[user.uid];
    if (data[user.uid] == "staff") {
      const gaBroot = document.getElementById("getAppsToID");
      if (gaBroot) {
        // Get Applications Button
        const gaBli1 = document.createElement("li");
        gaBli1.classList.add("nav-item", "active");
        gaBli1.setAttribute("style", "margin-top:35px");
        const gaBa1 = document.createElement("a");
        gaBa1.classList.add("nav-link");
        gaBa1.href = "javascript:;";
        gaBa1.setAttribute("onclick", "getAppsTo()");
        const gaBi1 = document.createElement("i");
        gaBi1.classList.add("material-icons");
        gaBi1.innerHTML = "file_download";
        const gaBp1 = document.createElement("p");
        gaBp1.innerHTML = "Get Applications";
        gaBli1.appendChild(gaBa1);
        gaBa1.appendChild(gaBi1);
        gaBa1.appendChild(gaBp1);
        gaBroot.appendChild(gaBli1);
        // Get Applications Button END
      }
      const ra_root = document.getElementById("ra_root");
      if (ra_root) {
        const ra_btn = document.createElement("a");
        ra_btn.classList.add("btn", "btn-outline-primary", "btn-round");
        ra_btn.innerHTML = "Review Applications";
        ra_btn.href = "../applications/";
        ra_btn.setAttribute("style", "color:#9c27b0");
        ra_btn.id = "rwAppBtn";
        const ra_rippleDiv = document.createElement("div");
        ra_rippleDiv.classList.add("ripple-container");
        ra_btn.appendChild(ra_rippleDiv);
        ra_root.appendChild(ra_btn);
      }
    }else {
      $(".admAcc_NOPERM").show();
    }
  });
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function userMenu() {
  const cuser = auth.currentUser;
  Swal.fire({
    title: 'Account Menu',
    html: '<div><a>Email: <b>'+cuser.email+'</b><a href="javascript:;" id="NotVEm"></a><br></a><a>Role:</a><a href="javascript:;" id="UsrRl"></a></div><br><div><a href="javascript:;" onclick="resetPassword()" style="font-weight:500">Reset Password</a></div>',
    showConfirmButton: false,
  })
  if (cuser.emailVerified == false) {
    document.getElementById("NotVEm").innerHTML = " (Not Verified)";
  }
  if (globalThis.UsrRlN == "admin", "staff", "reviewer") {
    document.getElementById("UsrRl").innerHTML = " " + capitalizeFirstLetter(globalThis.UsrRlN);
  }
}
