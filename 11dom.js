// Start HW1
// function colorChange(){
//     document.getElementById('body').style.backgroundColor = 'red';
// }
// End HW1

// Start HW2
document.getElementById('btn').style.with = '96px';
document.getElementById('btn').style.height = '48px';
document.getElementById('btn').style.fontSize = '24px';
let numberClick = 0;
function numberChange(){
    numberClick += 1;
    document.getElementById("btn").innerHTML = numberClick;
}
// End HW2