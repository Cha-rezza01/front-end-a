//Ubah or Modifikasi Exercise 1
//mengunakan
//1. IIFE
//2. Callback Function

function hitungBMI(callback) {
    return callback(40, 1.5);
  }
  
  let output = hitungBMI(function (berat, tinggi) {
    return berat / (tinggi * tinggi);
  });
  
  console.log("BMI Anda adalah:", output);