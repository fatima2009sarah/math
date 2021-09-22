function addUser(){
    player1 = document.getElementById("player1_name_input").value;
    player2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1" , player1);
    localStorage.setItem("player2" , player2);
    window.location = "quizpage.html";
}

function send(){
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    actual_answer=parseInt(number1) * parseInt(number2);

    question="<h4>" + number1 + "X" + number2;
    input_box="<br> Answer : <input type='text' id='input_answer_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'> Ckeck </button>";
    row=question + input_box + check_button;
    document.getElementById("output").value=row;
}