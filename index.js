const generateBtn = document.getElementById("generate-btn");
const copyHex = document.getElementById('copy-btn');
const copyRgb = document.getElementById('copy-RGB');
const reset_Btn = document.getElementById('resetBtn');
const colorBox = document.getElementById('color-box');
const colorCode = document.getElementById('colorCode');

// let color_code = '';

function CopyHEX() {
    
}
function GenerateBtn() {
   const hexChar = "0123456789ABCDEF"
   let hexColor = '#';
   for (let i = 0; i < 6; i++) {
    hexColor += hexChar[Math.floor(Math.random()* 16)]
    console.log('i');
};
// displaying  the colors
colorBox.style.backgroundColor = hexColor
//    displaying the color code
colorCode.innerHTML = hexColor;
colorCode.style.color = hexColor
}
function RGB() {
    
}
function ResetBtn() {
    colorBox.style.backgroundColor = null;
    colorCode.style.color = null;
    colorCode.style.innerHTML = null;
}