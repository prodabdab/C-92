player_1name = localStorage.getItem("player_1name");
player_2name = localStorage.getItem("player_2name");

var playerscore1= 0;
var playerscore2= 0;

document.getElementById("player_1name").innerHTML=player_1name + ":";
document.getElementById("player_2name").innerHTML=player_2name + ":";

document.getElementById("scccc").innerHTML=playerscore1;
document.getElementById("scccc1").innerHTML=playerscore2;

document.getElementById("Q").innerHTML="Question turn : " + player1;
document.getElementById("A").innerHTML="Answer turn : " + player2;

function check() {
    tword = document.getElementById("iput_of_q").value;

     sword = tword.toLowerCase();
     console.log(sword); 

     chartstorege = sword.charAt(1);
     console.log (chartstorege);
     lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = sword.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = sword.length - 1; 
    charAt3 = sword.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = sword.replace(chartstorege, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Send</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("iput_of_q").value = "";

}
var question_turn = "" ;
var answer_turn = "" ;

function check () {
    game_answer=document.getElementById('iput_of_q').value
    answer=game_answer.toLowerCase();
    console.log(answer);

    if (answer == sword) {
        if (answer_turn == 'player_1name') {
            playerscore1=playerscore1+1;
            document.getElementById("scccc").innerHTML=playerscore1;
        }
        else {
            playerscore2=playerscore2+1;
            document.getElementById("scccc1").innerHTML=playerscore2;
        }


    }
    if (question_turn == "player_1name") {
            question_turn="player_2name";
            document.getElementById("Q").innerHTML="Question turn : " + player_2name;
    }
    else{
        question_turn="player_1name";
        document.getElementById("Q").innerHTML="Question turn : " + player_1name;  
    }

    if (answer_turn == "player_2name"){
        answer_turn="player_1name";
        document.getElementById("A").innerHTML="Question turn : " + player_1name;
    }
    else{
        answer_turn="player_2name";
        document.getElementById("A").innerHTML="Question turn : " + player_2name;
    }
}
