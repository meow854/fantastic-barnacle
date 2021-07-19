player1name= localStorage.getItem("Player 1");
player2name= localStorage.getItem("Player 2");
player1score= 0;
player2score= 0;
document.getElementById("player1").innerHTML= player1name + ":";
document.getElementById("player2").innerHTML= player2name + ":";
document.getElementById("player1score").innerHTML= player1score;
document.getElementById("player2score").innerHTML= player2score;
document.getElementById("playerquestion").innerHTML= "Questions Turn- " + player1name;
document.getElementById("playeranswer").innerHTML= "Answers Turn- " + player2name;

function sendword() {
    getword= document.getElementById("word").value;
    word= getword.toLowerCase();
    console.log("Word in lowercase " + word);
    char1= word.charAt(1);
    console.log(char1);
    divide2= Math.floor(word.length / 2);
    char2= word.charAt(divide2);
    console.log(char2);
    storeword= word.length-1;
    char3= word.charAt(storeword);
    console.log(char3);

    remove1= word.replace(char1, "_");
    remove2= remove1.replace(char2, "_");
    remove3= remove2.replace(char3, "_");
    questionword= "<h4 id='word_display'>Q." + remove3 + "</h4>";
    inputbox= "<br> Answer <input type='text' id='answerbox'>";
    checkbutton= "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    output= questionword + inputbox + checkbutton;
    document.getElementById("output").innerHTML= output;
    document.getElementById("word").value= "";
}
questionturn= "Player 1";
answerturn= "Player 2";

function check() {
    getanswer= document.getElementById("answerbox").value;
    answer= getanswer.toLowerCase();
    console.log(answer);
    if (answer == word) {
        if (answerturn == "Player 1") {
            player1score= player1score + 1;
            document.getElementById("player1score").innerHTML= player1score;
        }
        else {
            player2score= player2score + 1;
            document.getElementById("player2score").innerHTML= player2score;
        }
    }
    if (questionturn == "Player 1") {
        questionturn= "Player 2";
        document.getElementById("playerquestion").innerHTML= "Question Turn- " + player2name;
    }
    else {
        questionturn= "Player 1";
        document.getElementById("playerquestion").innerHTML= "Question Turn- " + player1name;
    }
    if (answerturn == "Player 1") {
        answerturn= "Player 2";
        document.getElementById("playeranswer").innerHTML= "Answer Turn- " + player2name;
    }
    else {
        answerturn= "Player 1";
        document.getElementById("playeranswer").innerHTML= "Answer Turn- " + player1name;
    }
    document.getElementById("output").innerHTML= "";
}