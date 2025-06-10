// ==================================================================
// LATIHAN JAVASCRIPT
// ==================================================================

// 1. Logika Kondisional
// Fungsi untuk menentukan grade berdasarkan nilai ujian
function tentukanGrade(nilai) {
  if (nilai >= 90 && nilai <= 100) {
    return "A";
  } else if (nilai >= 80 && nilai <= 89) {
    return "B";
  } else if (nilai >= 70 && nilai <= 79) {
    return "C";
  } else if (nilai >= 60 && nilai <= 69) {
    return "D";
  } else if (nilai >= 0 && nilai <= 59) {
    return "E";
  } else {
    return "Nilai tidak valid";
  }
}

// Contoh penggunaan logika kondisional
console.log("--- Logika Kondisional ---");
console.log(tentukanGrade(85));
console.log(tentukanGrade(50));
console.log(tentukanGrade(101));

// 2. Logika Looping
// Fungsi untuk mencetak bilangan ganjil dari 1 hingga angka tertentu
function cetakBilanganGanjil(angka) {
  console.log("--- Logika Looping ---");
  for (let i = 1; i <= angka; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// Contoh penggunaan logika looping
cetakBilanganGanjil(15);

// 3. Logika Fungsi
// Fungsi untuk perkalian
function kali(a, b) {
  return a * b;
}

// Fungsi untuk menghitung kuadrat (menggunakan fungsi kali)
function kuadrat(angka) {
  return kali(angka, angka);
}

// Contoh penggunaan logika fungsi
console.log("--- Logika Fungsi ---");
console.log(kali(5, 3));
console.log(kuadrat(4));

// 4. Logika Operasional
// Fungsi untuk menjumlahkan semua angka dalam array
function jumlahkanArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Contoh penggunaan logika operasional
const angka = [1, 2, 3, 4, 5];
console.log("--- Logika Operasional ---");
console.log(jumlahkanArray(angka));

// ==================================================================
// PROYEK: KALKULATOR SEDERHANA (dengan HTML terintegrasi)
// ==================================================================

// Fungsi-fungsi operasi matematika
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    return "Tidak bisa dibagi dengan 0";
  }
  return a / b;
}

// Fungsi utama untuk menghitung hasil
function hitung() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  const operator = document.getElementById("operator").value;
  let hasil = 0;

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil").textContent = "Input tidak valid";
    return;
  }

  switch (operator) {
    case "+":
      hasil = tambah(angka1, angka2);
      break;
    case "-":
      hasil = kurang(angka1, angka2);
      break;
    case "*":
      hasil = kali(angka1, angka2);
      break;
    case "/":
      hasil = bagi(angka1, angka2);
      break;
    default:
      document.getElementById("hasil").textContent = "Operator tidak valid";
      return;
  }

  document.getElementById("hasil").textContent = "Hasil: " + hasil;
}

// HTML untuk kalkulator sederhana (ditempatkan di dalam tag <body>)
document.body.innerHTML = `
  <h1>Kalkulator Sederhana</h1>

  <input type="number" id="angka1" placeholder="Angka 1">
  <select id="operator">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>
  <input type="number" id="angka2" placeholder="Angka 2">

  <button onclick="hitung()">Hitung</button>

  <p id="hasil"></p>
`;

// Catatan:
// - Kode ini menggabungkan semua latihan dan proyek kalkulator ke dalam satu file JavaScript.
// - Untuk menjalankan proyek kalkulator, Anda perlu menyertakan file JavaScript ini dalam file HTML.
// - Bagian HTML untuk kalkulator ditambahkan secara dinamis ke dalam body menggunakan JavaScript.
