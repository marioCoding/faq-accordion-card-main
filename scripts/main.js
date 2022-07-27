let answerBlock1 = document.getElementById('accordion1');
let answerBlock2 = document.getElementById('accordion2');
let answerBlock3 = document.getElementById('accordion3');
let answerBlock4 = document.getElementById('accordion4');
let answerBlock5 = document.getElementById('accordion5');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');

// This function changes the visibility of the answer block
let displayAnswerBlock1 = function() {
    if(answerBlock1.style.display === 'none')
        answerBlock1.style.display = 'block';
    else
        answerBlock1.style.display = 'none'
}
let displayAnswerBlock2 = function() {
    if(answerBlock2.style.display === 'none')
        answerBlock2.style.display = 'block';
    else
        answerBlock2.style.display = 'none'
}
let displayAnswerBlock3 = function() {
    if(answerBlock3.style.display === 'none')
        answerBlock3.style.display = 'block';
    else
        answerBlock3.style.display = 'none'
}
let displayAnswerBlock4 = function() {
    if(answerBlock4.style.display === 'none')
        answerBlock4.style.display = 'block';
    else
        answerBlock4.style.display = 'none'
}
let displayAnswerBlock5 = function() {
    if(answerBlock5.style.display === 'none')
        answerBlock5.style.display = 'block';
    else
        answerBlock5.style.display = 'none'
}

button1.onclick = displayAnswerBlock1;
button2.onclick = displayAnswerBlock2;
button3.onclick = displayAnswerBlock3;
button4.onclick = displayAnswerBlock4;
button5.onclick = displayAnswerBlock5;


