let time = 1500;
let timerInterval;

function startTimer() {

clearInterval(timerInterval);

timerInterval = setInterval(function(){

time--;

let minutes = Math.floor(time / 60);
let seconds = time % 60;

seconds = seconds < 10 ? "0" + seconds : seconds;

document.getElementById("timer").innerText = minutes + ":" + seconds;

if(time <= 0){
clearInterval(timerInterval);
alert("Time for break!");
}

},1000);

}

function resetTimer(){

clearInterval(timerInterval);
time = 1500;
document.getElementById("timer").innerText = "25:00";

}

function startBreak(){

clearInterval(timerInterval);

time = 300;

timerInterval = setInterval(function(){

time--;

let minutes = Math.floor(time / 60);
let seconds = time % 60;

seconds = seconds < 10 ? "0" + seconds : seconds;

document.getElementById("timer").innerText = minutes + ":" + seconds;

if(time <= 0){
clearInterval(timerInterval);
alert("Break finished! Back to study!");
}

},1000);

}

async function searchProjects(){

const query = document.getElementById("projectSearch").value;

if(query.trim() === ""){
document.getElementById("projectResult").innerHTML =
"Please enter a search term.";
return;
}

const response = await fetch(
"https://api.github.com/search/repositories?q=" + query
);

const data = await response.json();

if(data.items.length === 0){
document.getElementById("projectResult").innerHTML =
"No projects found.";
return;
}

const repo = data.items[0];

document.getElementById("projectResult").innerHTML =
"<h5>" + repo.name + "</h5>" +
"<p>" + repo.description + "</p>" +
"<a href='" + repo.html_url + "' target='_blank'>View Repository</a>";

}
