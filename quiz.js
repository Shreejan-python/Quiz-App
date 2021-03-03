console.log("Welcome to the quiz app")

let start = document.getElementById("startquiz");
let submit = document.getElementById("Submit_Your_reslts")
let full_marks = 3;
let scores = new Array();
let names = new Array();

start.addEventListener("click", function(){
    window.location.replace("http://127.0.0.1:5500/index.html?#")
    
})
submit.addEventListener("click", function(){
    let choice = prompt("Have you taken the quiz")
    if (choice == "yes" || choice == "Yes") {
        let name = prompt("Give Your Name")
        let marks_scored = prompt("How many marks have you scored ? ")
        if (marks_scored == full_marks) {
            alert("You have scored full marks. Congratulations !!")
            scores.push(marks_scored)
            names.push(name)
            localStorage.setItem("scores", scores);
            localStorage.setItem("names", names)
        }
        if (marks_scored < full_marks) {
            alert(`You have scored lesser than the full marks which is ${full_marks} and you are less by ${full_marks - marks_scored}`)
            scores.push(marks_scored)
            names.push(name)
            localStorage.setItem("scores", scores);
            localStorage.setItem("names", names)
        }}
    
    else{
        alert(`Take the quiz now`)
    }
    
})

let high_score = localStorage.getItem("scores")
var largest = high_score[0];

for (var i = 0; i < high_score.length; i++) {
    if (largest < high_score[i]) {
        largest = high_score[i];
    }
}

alert(`The largest score is ${largest}`)