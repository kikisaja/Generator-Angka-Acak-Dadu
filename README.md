# 🎲 Random Dice Roller (CSS Keyframes Integration Module)

Aplikasi simulator generator pengacak angka dadu ($1$ sampai $6$) menggunakan **Vanilla JavaScript**. Aplikasi ini dirancang untuk mengajarkan pemula cara mengawinkan logika perhitungan matematika acak dengan manajemen *asynchronous timeout* dan animasi CSS keyframes.

Sangat direkomendasikan bagi siswa SMK Jurusan RPL kelas dasar untuk melatih pemanfaatan penundaan waktu eksekusi kode (*execution delay execution*).

---

## 🚀 Fitur Utama

* **Unicode Graphics Interface:** Menggunakan barisan teks unicode orisinal bawaan sistem komputer (`⚀` sampai `⚅`) sebagai representasi visual dadu, mengeliminasi beban muat file gambar eksternal.
* **Math Floor Random Range:** Mengolah manipulasi sebaran angka menggunakan `Math.random()` skala linier $6$, dipangkas ke bawah menggunakan `Math.floor()` dan digeser $+1$ demi memperoleh rentang bulat presisi $1-6$.
* **Asynchronous Animation Interceptor:** Memanfaatkan fungsi `setTimeout()` selama 500 milidetik untuk menahan pembaruan angka visual hingga putaran roda animasi keyframes CSS selesai bergulir.
* **Spam Anti-Pattern Lock:** Mengunci properti `.disabled = true` pada komponen tombol selama siklus dadu berputar guna menghindari penumpukan antrean fungsi (*function queue spamging*).

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur kontainer penampung dadu unicode, papan petunjuk, dan tombol pengocok
├── style.css        # Visualisasi pop art boks dadu, skema transisi rotasi derajat, dan efek keyframes
└── script.js        # Kamus peta simbol unicode dadu, rumus generator integer acak, dan kontrol timeout
