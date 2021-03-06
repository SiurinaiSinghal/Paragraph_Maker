function changeToPara1() {
 var inputs = [];
 for(var i = 1; i <= 6; i++){
     inputs.push(document.getElementById("p1_L"+ i).value);
 }
document.getElementById("Paragraph_1_div").innerHTML = inputs.join(". ");
}

function changeToPara2() {
    var inputs = [];
    for(var i = 1; i <= 6; i++){
        inputs.push(document.getElementById("p2_L"+ i).value);
    }
   document.getElementById("Paragraph_2_div").innerHTML = inputs.join(". ");
   }
