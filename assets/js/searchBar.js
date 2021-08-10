function searchBar() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('member-ign');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].closest('.member-element').style.display="none";
          //x[i].style.display="none";
          // Or this below (note each parentElement targets parent tag)
          // x[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display="none";
      }
      else {
          x[i].closest('.member-element').style.display="block"; 
          //x[i].style.display="flex";                 
      }
  }
}