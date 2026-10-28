// 1
const judul = document.getElementById("judul"); 
const pesan = document.getElementById("pesan"); 
judul.textContent = "Belajar JavaScript DOM"; 
pesan.textContent = "Konten berhasil diubah oleh JavaScript."; 

// 2
const tombol = document.getElementById("tombolAksi"); 
const pesan2 = document.getElementById("pesan2s"); 
tombol.addEventListener("click", function () { 
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString(); 
}); 

// 3
const tombolGaya = document.getElementById("tombolGaya"); 
const teksGaya = document.getElementById("teksGaya"); 
tombolGaya.addEventListener("click", function () { 
  teksGaya.classList.toggle("highlight"); 
  teksGaya.classList.toggle("teks-besar"); 
});

// 4
const namaInput = document.getElementById("namaInput"); 
const jumlahKarakter = document.getElementById("jumlahKarakter"); 
namaInput.addEventListener("input", function () { 
  jumlahKarakter.textContent = namaInput.value.length; 
}); 

// 5s
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
        pesanForm.style.color = "red";

    } else if (nama.length < 3) {
        pesanForm.textContent =
            "Nama harus terdiri dari minimal 3 karakter!";
        pesanForm.style.color = "red";

    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
        pesanForm.style.color = "red";

    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent =
            "Usia harus berupa bilangan bulat 17–100.";
        pesanForm.style.color = "red";

    } else {
        pesanForm.textContent =
            "Validasi berhasil. Form siap diproses.";
        pesanForm.style.color = "green";

        form.reset();
    }
});

// 6
const tambahTugas = document.getElementById("tambahTugas"); 
const daftarTugas = document.getElementById("daftarTugas"); 
const pesanTugas = document.getElementById("pesanTugas"); 
 
tambahTugas.addEventListener("click", function () { 
  const teks = inputTugas.value.trim(); 
  if (teks === "") { 
    pesanTugas.textContent = "Tulis tugas terlebih dahulu."; 
    return; 
  } 
  const item = document.createElement("li"); 
  const label = document.createElement("span");
  const tombolHapus = document.createElement("button");
  const selesai = document.createElement("button"); 
  label.textContent = teks + " "; 
    tombolHapus.type = "button";
    tombolHapus.textContent = "Hapus";
    tombolHapus.className = "btn-secondary";

    tombolHapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas berhasil dihapus.";
    });

  item.append(label, tombolHapus);
  selesai.type = "button"; 
  selesai.textContent = "Tandai selesai"; 
  selesai.addEventListener("click", function () { 
    item.classList.toggle("selesai"); 
    selesai.textContent = item.classList.contains("selesai") 
      ? "Batalkan selesai" : "Tandai selesai"; 
  }); 
  item.append(label, selesai); 
  daftarTugas.appendChild(item); 
  inputTugas.value = ""; 
  pesanTugas.textContent = "Tugas ditambahkan."; 
  inputTugas.focus(); 
});

// Eksperimen 4

const paragrafToggle = document.getElementById("paragrafToggle");
const tombolToggle = document.getElementById("tombolToggle");

tombolToggle.addEventListener("click", function () {
    paragrafToggle.classList.toggle("sembunyi");

    if (paragrafToggle.classList.contains("sembunyi")) {
        tombolToggle.textContent = "Tampilkan Paragraf";
    } else {
        tombolToggle.textContent = "Sembunyikan Paragraf";
    }
});
