const generateBtn = document.getElementById("generate-btn");
const copyHex = document.getElementById('copy-btn');
const copyRgb = document.getElementById('copy-RGB');
const reset_Btn = document.getElementById('resetBtn');
const colorBox = document.getElementById('color-box');
const colorCode = document.getElementById('colorCode');

// let color_code = '';


// let text = document.getElementById('colorCode').innerHTML;
// const CopyHEX = async () =>{
//     try{
//         await navigator.clipboard.writeText(text);
//         console.log('Content copied to clipboard');
//     } catch (err) {
//         console.error('Failed to copy:',err);
//     }
// }

function CopyHEX() {
    var copyhexColor = document.getElementById("colorCode");
    colorCode.select();
    document.execCommand("copy");
    document.getElementById("colorCode").innerHTML ="Copied the text: " + colorCode
}


// function CopyHEX() {
//     var Text = document.getElementById('colorCode') 
//     // Text.select();
//     
//     document.getElementById("colorCode").innerHTML = Text.value;
    
//      if (colorCode == value) {
//         alert('Hex code has been copied')
//     console.log('copied')
//      }
//     // SelectionRange()
//     // execCommand('copy')
// }
function GenerateBtn() {
   const hexChar = "0123456789ABCDEF"
   let hexColor = '#';
   for (let i = 0; i < 6; i++) {
    hexColor += hexChar[Math.floor(Math.random()* 16)]
};
// displaying  the colors
colorBox.style.backgroundColor = hexColor
//    displaying the color code
colorCode.innerHTML = hexColor;
colorCode.style.color = hexColor
}
function RGB() {
    const colorText = colorBox.style.backgroundColor;
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = colorText;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Color copied to clipboard successfully: " + colorText);
};
function ResetBtn() {
    colorBox.style.backgroundColor = null;
    colorCode.style.color = null;
    colorCode.style.innerHTML = null;
}