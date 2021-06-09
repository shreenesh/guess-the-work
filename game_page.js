player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1_score=0;
player2_score=0;
document.getElementById("player1name").innerHTML=player1_name+":";
document.getElementById("player2name").innerHTML=player2_name+":";
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;
document.getElementById("question").innerHTML="question turn:"+player1_name;
document.getElementById("answer").innerHTML="answer turn:"+player2_name;
function send(){
    getword=document.getElementById("word").value ;
    word =getword.toLowerCase();
    charAt1 = word.charAt(1); 
    console.log(charAt1);
     lenght_divide_2 = Math.floor(word.length/2);
     charAt2 = word.charAt(lenght_divide_2); 
    console.log(charAt2);
     lenght_minus_1 = word.length - 1; 
     charAt3 = word.charAt(lenght_minus_1); 
     console.log(charAt3); remove_charAt1 = word.replace(charAt1 , "_");
      remove_charAt2 = remove_charAt1.replace(charAt2, "_");
      remove_charAt3 = remove_charAt2.replace(charAt3, "_");
       console.log(remove_charAt3);
       question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
       input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
        row = question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
     document.getElementById("word").value = "";
}
qturn="player1";
aturn="player2";
function check(){
    getanswer=document.getElementById("input_check_box").value ;
    answer =getanswer.toLowerCase();
    if(answer==word){
if(aturn=="player1"){
    player1_score=player1_score+1;
    document.getElementById("player1score").innerHTML=player1_score;
}
else{
    player2_score=player2_score+1;
    document.getElementById("player1score").innerHTML=player1_score;
}
    }
    if(qturn=="player1")
    {
        qturn="player2";
        document.getElementById("question").innerHTML="question turn:"+player2_name;
    }
    else
    {
        qturn="player1";
        document.getElementById("question").innerHTML="question turn:"+player1_name;
    }
    if(aturn=="player1")
    {
        aturn="player2";
        document.getElementById("answer").innerHTML="answer turn:"+player2_name;
    }
    else
    {
        aturn="player1";
        document.getElementById("answer").innerHTML="answer turn:"+player1_name;
    }
    document.getElementById("output").innerHTML="";
}