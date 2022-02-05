function addUser() {
    player1_name = document.getElementById("number1").value;
    player2_name = document.getElementById("number2").value;
    localStorage.setItem("number1", number1);
    localStorage.setItem("number2", number2);
    window.location = "part2.html";
}