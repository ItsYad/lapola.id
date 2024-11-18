document.addEventListener("DOMContentLoaded", function () {
  // Simulasi delay loading
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000); // Misalnya 2 detik

  document
    .getElementById("back-to-landing")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("main-content").style.display = "none";
      document.getElementById("loading-screen").style.display = "flex";
      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000); // Durasi animasi loading
    });
});

document
  .getElementById("foto-input")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("foto-preview").src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

document
  .getElementById("filter-select")
  .addEventListener("change", function () {
    const filter = this.value;
    const preview = document.getElementById("foto-preview");
    if (filter === "monochrome") {
      preview.style.filter = "grayscale(100%)";
    } else if (filter === "sepia") {
      preview.style.filter = "sepia(100%";
    } else if (filter === "auto") {
      // Implementasikan logika filter otomatis sesuai kebutuhan
      preview.style.filter = "contrast(150%) brightness(120%)"; // Contoh filter otomatis
    } else {
      preview.style.filter = "none";
    }
  });

document
  .getElementById("jumlah-input")
  .addEventListener("input", updateTotalHarga);
const hargaPerItem = 15000; // Harga per item dalam Rupiah
function updateTotalHarga() {
  const jumlah = parseInt(document.getElementById("jumlah-input").value);
  const totalHarga = (jumlah > 0 ? jumlah : 1) * hargaPerItem;
  document.getElementById(
    "harga-total"
  ).textContent = `Rp ${totalHarga.toLocaleString("id-ID")}`;
}

// Inisialisasi harga total saat halaman dimuat
updateTotalHarga();
