
const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const jumlahKarakter = document.getElementById("jumlahKarakter");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesan = document.getElementById("pesan");

// Fungsi 1: Penghitung karakter nama
nama.addEventListener("input", function () {
    jumlahKarakter.textContent = nama.value.length;
});

// Fungsi 2: Ringkasan sesi secara langsung
sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        ringkasanSesi.textContent = "Belum ada sesi dipilih.";
    } else {
        ringkasanSesi.textContent =
            "Sesi yang dipilih: " + sesi.value;
    }
});

// Fungsi 3: Validasi form pendaftaran
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const sesiValue = sesi.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesan.className = "message";

    if (namaValue.length < 3) {
        tampilkanPesan(
            "Nama harus diisi minimal 3 karakter.",
            "error"
        );
    } else if (!polaEmail.test(emailValue)) {
        tampilkanPesan(
            "Masukkan alamat email yang valid.",
            "error"
        );
    } else if (sesiValue === "") {
        tampilkanPesan(
            "Silakan pilih sesi workshop terlebih dahulu.",
            "error"
        );
    } else {
        tampilkanPesan(
            "Pendaftaran berhasil! " +
            "Nama: " + namaValue +
            ". Email: " + emailValue +
            ". Sesi: " + sesiValue + ".",
            "success"
        );
    }
});

// Fungsi untuk menampilkan pesan
function tampilkanPesan(teks, jenis) {
    pesan.textContent = teks;
    pesan.className = "message " + jenis;
}

// Fungsi 4: Reset form
form.addEventListener("reset", function () {
    pesan.textContent = "";
    pesan.className = "message";

    jumlahKarakter.textContent = "0";
    ringkasanSesi.textContent = "Belum ada sesi dipilih.";
});
