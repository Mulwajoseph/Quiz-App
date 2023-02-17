function checkAnswer(){
    var answer =
    document.querySelector('input[name = "answer"]):checked').value;

    //checking if the answer is corrrect
    if (answer=== "Nairobi") {
        doccument.getElemenyById("result").innerHTML="Correct!";
    
    }else{
        document.getElementById("result").innerHTML=
        'Incorrect. The correct answer in Nairobi.';
    }
}