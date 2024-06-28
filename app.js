let num = prompt("Ders qiymetinizi daxil edin")
num = Number(num);
let herf;
if (num >= 90 && num <= 100) {
    herf = 'A';
} else if (num >= 80 && num <= 89) {
   herf = 'B';
} else if (num >= 70 && num <= 79) {
    herf = 'C';
} else if (num >= 60 && num <= 69) {
    herf = 'D';
} else if (num >= 0 && num <= 59) {
    herf = 'F';
}
console.log("Istifadecinin aldigi qiymet " + num + " - " + herf + ".");

