let button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest() {
    let result = 0;

    let answer1 = document.getElementById("q1").value;
    if (answer1 == "6") {
        result++;
    }

    let answer2 = document.getElementById("q2").value;
    if (answer2 == "8") {
        result++;
    }

    let answer3 = document.getElementById("q3").value;
    if (answer3 == "5") {
        result++;
    }

    let answer4 = document.getElementById("q4").value;
    if (answer4 == "4") {
        result++;
    }

    let answer5 = document.getElementById("q5").value;
    if (answer5 == "0") {
        result++;
    }

    alert("Правильных ответов: " + result);
}