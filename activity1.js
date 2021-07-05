score=0
function updatescore(){
    score=score+1;
    document.getElementById("score").innerHTML="score "+score;
}
function save_score(){
    localStorage.setItem("serfectpcore",score);
}
function next_page(){
    window.location="activity_2.html";
}