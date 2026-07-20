// --- 1. SELEKSI ELEMEN DOM ---
const elDadu = document.getElementById("visual-dadu");
const elStatus = document.getElementById("txt-status");
const btnRoll = document.getElementById("btn-roll");

// --- 2. DICTIONARY MAPS SIMBOL DADU UNICODE LOKAL ---
// Menggunakan karakter unicode dadu asli agar tidak memerlukan aset gambar eksternal
const SIMBOL_DADU = {
    1: "⚀",
    2: "⚁",
    3: "⚂",
    4: "⚃",
    5: "⚄",
    6: "⚅"
};

// --- 3. FUNGSI LOGIKA UTAMA: LEMPAR DADU ---
function lemparDadu() {
    // Kunci tombol sementara proses kocok berjalan agar user tidak melakukan spam klik
    btnRoll.disabled = true;
    elStatus.innerText = "Mengocok dadu... 🎲";

    // Pasang kelas animasi CSS putar ke boks dadu
    elDadu.classList.add("kocok-animasi");

    // Gunakan setTimeout asinkronus untuk menunggu animasi putar CSS selesai (500 milidetik / 0.5 detik)
    setTimeout(() => {
        // A. Rumus Mengacak Angka Integer antara 1 sampai 6
        const angkaAcak = Math.floor(Math.random() * 6) + 1;

        // B. Update Simbol Tampilan Dadu Berdasarkan Angka Hasil Acak
        elDadu.innerText = SIMBOL_DADU[angkaAcak];

        // C. Tampilkan Pesan Informasi Hasil Angka ke Papan Status
        elStatus.innerText = `Kamu mendapatkan angka: ${angkaAcak}! 🎉`;

        // D. Cabut kembali kelas animasi CSS agar bisa dipicu ulang di kocokan berikutnya
        elDadu.classList.remove("kocok-animasi");

        // E. Buka kembali kunci tombol kocok
        btnRoll.disabled = false;
    }, 500);
}

// --- 4. BINDING EVENT LISTENERS ---
btnRoll.addEventListener("click", lemparDadu);
