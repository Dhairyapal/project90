function add_player()
{
    player_1_name=document.getElementById("ip_1").value;
    player_2_name=document.getElementById("ip_2").value;
    
    localStorage.setItem("Player 1" , player_1_name);
    localStorage.setItem("Player 2" , player_2_name);

    window.location="game_page.html";

}