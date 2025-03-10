// Mobil DOM
document.getElementById("mobil_logotip").innerHTML = "Uralbek UZ";
document.getElementById("mobil_eslatma").innerHTML = "Veb-sahifaning mobil versiyasidan foydalanyapsiz.<br>Medium yoki desktop versiyani ko‘rish uchun ekran o‘lchamini o‘zgartiring!";


// Medium DOM
document.getElementById("medium_logotip").innerHTML = "Uralbek UZ";
document.getElementById("medium_eslatma").innerHTML = "Veb-sahifaning medium (planshet uchun) versiyasidan foydalanyapsiz.<br>Mobil yoki desktop versiyani ko‘rish uchun ekran o‘lchamini o‘zgartiring!";


//Desktop DOM
document.getElementById("desktop_logotip").innerHTML = "Uralbek UZ";
document.getElementById("desktop_eslatma").innerHTML = "Veb-sahifaning desktop (katta ekranli) versiyasidan foydalanyapsiz,<br>mobil yoki medium versiyani ko‘rish uchun ekran o‘lchamini o‘zgartiring!";





// Menyu Script
function ochish() {
  document.getElementById("mySidebar").style.display = "block";
}
function yopish() {
  document.getElementById("mySidebar").style.display = "none";
}