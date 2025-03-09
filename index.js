// Logotip
document.getElementById("mobil_logotip").innerHTML = "Uralbek UZ";
document.getElementById("medium_logotip").innerHTML = "Uralbek UZ";
document.getElementById("desktop_logotip").innerHTML = "Uralbek UZ";

// Display eslatmasi
document.getElementById("mobil_eslatma").innerHTML = "Veb-sahifaning mobil versiyasidan foydalanyapsiz,<br>medium yoki desktop versiyani ko‘rish uchun ekran o‘lchamini o‘zgartiring!";
document.getElementById("medium_eslatma").innerHTML = "Veb-sahifaning medium (planshet uchun) versiyasidan foydalanyapsiz,<br>mobil yoki desktop versiyani ko‘rish uchun ekran o‘lchamini o‘zgartiring!";
document.getElementById("desktop_eslatma").innerHTML = "Veb-sahifaning desktop (katta ekranli) versiyasidan foydalanyapsiz,<br>mobil yoki medium versiyani ko‘rish uchun ekran o‘lchamini o‘zgartiring!";





/
function ochish() {
  document.getElementById("mySidebar").style.display = "block";
}
function yopish() {
  document.getElementById("mySidebar").style.display = "none";
}