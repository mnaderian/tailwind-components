function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("hidden");
}

window.onclick = function(event) {
  if (event.target.matches('.toggle')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('hidden')) {
        openDropdown.classList.remove('hidden');
      }
    }
  }
}
