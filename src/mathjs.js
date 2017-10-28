var playing = false;
var score = 0;
var timeremaing;
var action;
var correctAnswer;
document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
    } else{//not playing mode
        hide("gameover");
        playing = true;
        score = 0;
        document.getElementById("score_value").innerHTML = score;
        
        show("time");
        timeremaing = 60;
        document.getElementById("timeremaining").innerHTML = timeremaing;
        
        document.getElementById("startreset").innerHTML = "Reset";
        
        timecountdown();
        getQuestion();
        
    }  
}


for(i=1;i<5;i++){
   
    document.getElementById("box"+i).onclick = function(){
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            score++;
            document.getElementById("score_value").innerHTML=score;
            
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000)
            getQuestion();
        }else{
            score--;
            document.getElementById("score_value").innerHTML=score;
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000) 
        }
    }
}
    
}



function timecountdown(){
    action = setInterval(function(){
        timeremaing -=1;
        if(timeremaing == 0){
            stopcountdown();
            show("gameover");
            document.getElementById("finalscore").innerHTML= score;
            hide("time");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start";
        }
        document.getElementById("timeremaining").innerHTML = timeremaing;
        
    },1000);
}

function stopcountdown(){
    clearInterval(action);
}

function hide(id){
    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}

function getQuestion(){
    var x = 10+Math.round(90*Math.random());
    var y = 10+Math.round(90*Math.random());
    correctAnswer = x+y;
    
    document.getElementById("question").innerHTML = x + "+" + y;
    
    var correctPosition = 1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    
    var answers = [correctAnswer];
    
    for(i=1 ; i<5; i++){
        if(i!=correctPosition){
            var wrongAnswer;
            do{
             wrongAnswer = (10+Math.round(90*Math.random()))+(10+Math.round(90*Math.random()));
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            }while(answers.indexOf(wrongAnswer)>-1)
        }
        answers.push(wrongAnswer);
    }
    
}