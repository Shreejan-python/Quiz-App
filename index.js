console.log("Quiz started")

let firstquestion = document.getElementById("firstquestion");
let secondquestion = document.getElementById("secondquestion");
let thirdquestion = document.getElementById("thirdquestion");

let submit_1 = document.getElementById("1");
let submit_2 = document.getElementById("2");
let submit_3 = document.getElementById("3");

secondquestion.style.visibility = "hidden";
thirdquestion.style.visibility = "hidden";

let total_score = 0;


submit_1.addEventListener("click", function () {
    let first_answer = document.getElementById("1st")
    if (first_answer.value == "Rabindranath Tagore" || first_answer.value == "rabindranath tagore") {
        alert("Your answer is correct");
        firstquestion.style.visibility = "hidden";
        secondquestion.style.visibility = "visible";
        total_score = 1;
        submit_2.addEventListener("click", function () {
            let second_answer = document.getElementById("2nd")
            if (second_answer.value == "Japan" || second_answer.value == "japan") {
                alert("Your answer is correct");
                firstquestion.style.visibility = "hidden";
                secondquestion.style.visibility = "hidden";
                thirdquestion.style.visibility = "visible";
                total_score = 2;


                submit_3.addEventListener("click", function () {
                    let third_answer = document.getElementById("3rd")
                    if (third_answer.value == "WBC" || third_answer.value == "wbc" || third_answer.value == "White Blood Cells" || third_answer.value == "white blood cells") {
                        alert("Your answer is correct");
                        firstquestion.style.visibility = "hidden";
                        secondquestion.style.visibility = "hidden";
                        thirdquestion.style.visibility = "hidden";
                        total_score = 3;
                        alert(`Your total score is ${total_score}`)
                        window.location.replace("http://127.0.0.1:5500/quiz.html?#")
                    }
                    else{
                        alert("Your answer is wrong");
                        firstquestion.style.visibility = "hidden";
                        secondquestion.style.visibility = "hidden";
                        thirdquestion.style.visibility = "hidden";
                        total_score = 2;
                        alert(`Your total score is ${total_score}`)
                        window.location.replace("http://127.0.0.1:5500/quiz.html?#")
                    }
                })
            }
            else {
                firstquestion.style.visibility = "hidden";
                secondquestion.style.visibility = "hidden";
                thirdquestion.style.visibility = "visible";
                submit_3.addEventListener("click", function () {
                    let third_answer = document.getElementById("3rd")
                    if (third_answer.value == "WBC" || third_answer.value == "wbc" || third_answer.value == "White Blood Cells" || third_answer.value == "white blood cells") {
                        alert("Your answer is correct");
                        firstquestion.style.visibility = "hidden";
                        secondquestion.style.visibility = "hidden";
                        thirdquestion.style.visibility = "hidden";
                        total_score = 2;
                        alert(`Your total score is ${total_score}`)
                        window.location.replace("http://127.0.0.1:5500/quiz.html?#")
                    }
                    else {
                        alert("Your answer is wrong");
                        firstquestion.style.visibility = "hidden";
                        secondquestion.style.visibility = "hidden";
                        thirdquestion.style.visibility = "hidden";
                        total_score = 0;
                        alert(`Your total score is ${total_score}`)
                        window.location.replace("http://127.0.0.1:5500/quiz.html?#")
                    }
                })

            }
        })
    }
    else {
        firstquestion.style.visibility = "hidden";
        secondquestion.style.visibility = "visible";
        submit_2.addEventListener("click", function () {
            let second_answer = document.getElementById("2nd")
            if (second_answer.value == "Japan" || second_answer.value == "japan") {
                alert("Your answer is correct");
                firstquestion.style.visibility = "hidden";
                secondquestion.style.visibility = "hidden";
                thirdquestion.style.visibility = "visible";
                total_score = 1;


                submit_3.addEventListener("click", function () {
                    let third_answer = document.getElementById("3rd")
                    if (third_answer.value == "WBC" || third_answer.value == "wbc" || third_answer.value == "White Blood Cells" || third_answer.value == "white blood cells") {
                        alert("Your answer is correct");
                        firstquestion.style.visibility = "hidden";
                        secondquestion.style.visibility = "hidden";
                        thirdquestion.style.visibility = "hidden";
                        total_score = 2;
                        alert(`Your total score is ${total_score}`)
                        window.location.replace("http://127.0.0.1:5500/quiz.html?#")
                    }
                })
            }
            else {
                firstquestion.style.visibility = "hidden";
                secondquestion.style.visibility = "hidden";
                thirdquestion.style.visibility = "visible";
                submit_3.addEventListener("click", function () {
                    let third_answer = document.getElementById("3rd")
                    if (third_answer.value == "WBC" || third_answer.value == "wbc" || third_answer.value == "White Blood Cells" || third_answer.value == "white blood cells") {
                        alert("Your answer is correct");
                        firstquestion.style.visibility = "hidden";
                        secondquestion.style.visibility = "hidden";
                        thirdquestion.style.visibility = "hidden";
                        total_score = 1;
                        alert(`Your total score is ${total_score}`)
                        window.location.replace("http://127.0.0.1:5500/quiz.html?#")
                        
                    }
                    else {
                        alert("Your answer is wrong");
                        firstquestion.style.visibility = "hidden";
                        secondquestion.style.visibility = "hidden";
                        thirdquestion.style.visibility = "hidden";
                        total_score = 0;
                        alert(`Your total score is ${total_score}`)
                        window.location.replace("http://127.0.0.1:5500/quiz.html?#")
                    }
                })
            }
        })
    }
})