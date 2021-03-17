function addUser() {
    player1_name = document.getElementById("player_1name").value;
    player2_name = document.getElementById("player_2name").value;
  
      localStorage.setItem("player_1name", player1_name);
      localStorage.setItem("player_2name", player2_name);
  
      window.location = "Game.html";
   }