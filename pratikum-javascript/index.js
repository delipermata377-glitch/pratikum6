// Data mahasiswa
let nama = "Alisya Khanza Alya";

// Nilai mahasiswa
let nilaiTugas = 80;
let nilaiUTS = 70;
let nilaiUAS = 90;

// Menghitung nilai akhir
let nilaiAkhir = (nilaiTugas * 30 / 100) +
                 (nilaiUTS * 30 / 100) +
                 (nilaiUAS * 40 / 100);

// Menentukan status kelulusan
let status;

if (nilaiAkhir >= 60) {
    status = "LULUS";
} else {
    status = "TIDAK LULUS";
}

// Menampilkan hasil
console.log("Nama Mahasiswa: " + nama);
console.log("Nilai Akhir: " + nilaiAkhir);
console.log("Status Kelulusan: " + status);