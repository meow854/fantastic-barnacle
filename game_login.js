function adduser() {
    var player1;
    var player2;
    player1= document.getElementById("player1input").value;
    player2= document.getElementById("player2input").value;
    localStorage.setItem("Player 1", player1);
    localStorage.setItem("Player 2", player2);
    window.location= "game.html";
}