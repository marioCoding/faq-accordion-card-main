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
let title1 = document.getElementById('h2Wrapper1');
let title2 = document.getElementById('h2Wrapper2');
let title3 = document.getElementById('h2Wrapper3');
let title4 = document.getElementById('h2Wrapper4');
let title5 = document.getElementById('h2Wrapper5');

// This function changes the visibility of the answer block
let displayAnswerBlock1 = function() {
    if(answerBlock1.style.display === 'block') {
        answerBlock1.style.display = 'none';
        title1.style.fontStyle = 'normal';
    } else {
        answerBlock1.style.display = 'block';
        title1.style.fontStyle = 'italic';
    }
}
let displayAnswerBlock2 = function() {
    if(answerBlock2.style.display === 'block') {
        answerBlock2.style.display = 'none';
        title2.style.fontStyle = 'normal';
    } else {
        answerBlock2.style.display = 'block'
        title2.style.fontStyle = 'italic';
    }
}
let displayAnswerBlock3 = function() {
    if(answerBlock3.style.display === 'block') {
        answerBlock3.style.display = 'none';
        title3.style.fontStyle = 'normal';
    } else
        answerBlock3.style.display = 'block';
        title3.style.fontStyle = 'italic';
}
let displayAnswerBlock4 = function() {
    if(answerBlock4.style.display === 'block') {
        answerBlock4.style.display = 'none';
        title4.style.fontStyle = 'normal';
    } else {
        answerBlock4.style.display = 'block';
        title4.style.fontStyle = 'italic';
    }
}
let displayAnswerBlock5 = function() {
    if(answerBlock5.style.display === 'block') {
        answerBlock5.style.display = 'none';
        title5.style.fontStyle = 'normal';
    } else {
        answerBlock5.style.display = 'block';
        title5.style.fontStyle = 'italic';
    }
}

button1.onclick = displayAnswerBlock1;
button2.onclick = displayAnswerBlock2;
button3.onclick = displayAnswerBlock3;
button4.onclick = displayAnswerBlock4;
button5.onclick = displayAnswerBlock5;


