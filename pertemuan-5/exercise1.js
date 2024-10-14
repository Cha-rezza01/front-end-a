// //Buatlah fungsi untuk menghitung BMI (body mass Index)
// Rumus : BMI = berat / (tinggi * tinggi),
// berat dalam kg dan tinggi dalam meter
// 170 cm= 1.7 m
// Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
// Dan mengembalikan output berupa BMI

//cara 1
//                   parameter
function hitungBMI1(berat, tinggi){
    return berat / (tinggi * tinggi);
}
//                         argument
let output1 = hitungBMI1(40, 1.5);
console.log("BMI Anda adalah:", output1);

//cara 2
let hitungBMI2 = function (berat, tinggi){
    return berat / (tinggi * tinggi);
};
let output2 = hitungBMI2(40, 1.5);
console.log("BMI Anda adalah:", output2);