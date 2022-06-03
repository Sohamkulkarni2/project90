p1name=localStorage.getItem("player1name");
p2name=localStorage.getItem("player2name");
p1score=0;
p2score=0;

document.getElementById("p1name").innerHTML=p1name+":";
document.getElementById("p2name").innerHTML=p2name+":";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("qturn").innerHTML="Question turn is: "+p1name;
document.getElementById("aturn").innerHTML="Answer turn is: "+p2name;

function sendq(){
    word=document.getElementById("word").value;
    document.getElementById("ques").innerHTML=word;
    console.log("hi");
    question="<h3>Q."+word+"</h3> <br>";
    inputtag="Answer <input type='text' id='ans' class='form-control design' > <br>" ;
    send="<button onclick='check()' id='checkbutton' class='btn btn-success'>Send</button> <br>";
    document.getElementById("output").innerHTML=question+inputtag+send;
}