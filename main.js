let masterBtn = document.querySelector("#master-button");
let masterMenu = document.getElementById("master-menu");
let dashboardButton = document.querySelector("#dashboard");
let dashboardMain = document.querySelector("#dashboard-main");
let userbutton = document.querySelector("#user");
let usermain = document.getElementById("user-main");
let pengumumanbutton = document.getElementById("pengumuman");
let pengumumanmain = document.getElementById("pengumuman-main");
let hamburger = document.getElementById("hamburger-button");
let sidenav = document.getElementById("sidenav");
let navbar = document.getElementById("navbar");
let profilesekolah = document.getElementById("profile-sekolah-main");
let buttonprofile = document.getElementById("profile-sekolah");
let tahunPelajaran = document.getElementById("tahun-pelajaran-main");
let buttonthnpelajaran = document.getElementById("data-tahun-pelajaran");
let buttonekstrakurikuler = document.getElementById("data-ekstrakurikuler");
let dataekstrakurikuler = document.getElementById("data-ekstrakurikuler-main");
let datamatapelajaran = document.getElementById("data-mata-pelajaran-main");
let buttonmatapelajaran = document.getElementById("data-mata-pelajaran");

buttonmatapelajaran.addEventListener("click", () => {
  datamatapelajaran.classList.remove("hidden");
  dataekstrakurikuler.classList.add("hidden");
  tahunPelajaran.classList.add("hidden");
  profilesekolah.classList.add("hidden");
  dashboardMain.classList.add("hidden");
  usermain.classList.add("hidden");
  pengumumanmain.classList.add("hidden");
  dashboardMain.classList.add("hidden");
});

buttonekstrakurikuler.addEventListener("click", () => {
  dataekstrakurikuler.classList.remove("hidden");
  tahunPelajaran.classList.add("hidden");
  profilesekolah.classList.add("hidden");
  dashboardMain.classList.add("hidden");
  usermain.classList.add("hidden");
  pengumumanmain.classList.add("hidden");
  datamatapelajaran.classList.add("hidden");
});

buttonthnpelajaran.addEventListener("click", () => {
  tahunPelajaran.classList.remove("hidden");
  profilesekolah.classList.add("hidden");
  dashboardMain.classList.add("hidden");
  usermain.classList.add("hidden");
  pengumumanmain.add("hidden");
  dataekstrakurikuler.classlist.add("hidden");
  datamatapelajaran.classList.add("hidden");
});
buttonprofile.addEventListener("click", () => {
  profilesekolah.classList.remove("hidden");
  dashboardMain.classList.add("hidden");
  usermain.classList.add("hidden");
  pengumumanmain.classList.add("hidden");
  tahunPelajaran.classList.add("hidden");
  dataekstrakurikuler.classlist.add("hidden");
  datamatapelajaran.classList.add("hidden");
});
hamburger.addEventListener("click", () => {
  sidenav.classList.toggle("hidden");
  navbar.classList.toggle("pl-56");
});
masterBtn.addEventListener("click", () => {
  masterMenu.classList.toggle("hidden");
});
dashboardButton.addEventListener("click", () => {
  dashboardMain.classList.remove("hidden");
  usermain.classList.add("hidden");
  pengumumanmain.classList.add("hidden");
  profilesekolah.classList.add("hidden");
  tahunPelajaran.classList.add("hidden");
  dataekstrakurikuler.classlist.add("hidden");
  datamatapelajaran.classList.add("hidden");
});
userbutton.addEventListener("click", () => {
  usermain.classList.remove("hidden");
  dashboardMain.classList.add("hidden");
  pengumumanmain.classList.add("hidden");
  profilesekolah.classList.add("hidden");
  tahunPelajaran.classList.add("hidden");
  dataekstrakurikuler.classlist.add("hidden");
  datamatapelajaran.classList.add("hidden");
});
pengumumanbutton.addEventListener("click", () => {
  pengumumanmain.classList.remove("hidden");
  dashboardMain.classList.add("hidden");
  usermain.classList.add("hidden");
  profilesekolah.classList.add("hidden");
  tahunPelajaran.classList.add("hidden");
  dataekstrakurikuler.classlist.add("hidden");
  datamatapelajaran.classList.add("hidden");
});
