var canvas = document.getElementById("main");
var circle = canvas.getContext("2d");
var ekkusu = canvas.getContext("2d");
var masu = canvas.getContext("2d");

canvas.width = window.innerWidth*1
canvas.height = window.innerHeight*1

var blocksize = window.innerHeight*(1/5);
var blockcenter = window.innerWidth*(1/2);
var arcx =blockcenter;
var arcy =blockcenter;
var ekkusux =0;
var ekkusuy =0;

function createmasu(){
    masu.beginPath();
    masu.moveTo(blockcenter+blocksize*0.5,blocksize);
    masu.lineTo(blockcenter+blocksize*0.5,blocksize*4);
    masu.strokeStyle = "#000";
    masu.lineWidth = 3;
    masu.stroke();

    masu.beginPath();
    masu.moveTo(blockcenter-blocksize*0.5,blocksize);
    masu.lineTo(blockcenter-blocksize*0.5,blocksize*4);
    masu.strokeStyle = "#000";
    masu.lineWidth = 3;
    masu.stroke();

    masu.beginPath();
    masu.moveTo(blockcenter+blocksize*1.5,blocksize*2);
    masu.lineTo(blockcenter-blocksize*1.5,blocksize*2);
    masu.strokeStyle = "#000";
    masu.lineWidth = 3;
    masu.stroke();

    masu.beginPath();
    masu.moveTo(blockcenter+blocksize*1.5,blocksize*3);
    masu.lineTo(blockcenter-blocksize*1.5,blocksize*3);
    masu.strokeStyle = "#000";
    masu.lineWidth = 3;
    masu.stroke();
}

function drwcir(){
    circle.beginPath();
    circle.arc(arcx,arcy-blocksize*0.8,blocksize*0.4,0*Math.PI/180,360*Math.PI/180,false);
    circle.strokeStyle="red";
    circle.lineWidth=blocksize*0.03;
    circle.stroke();
}

function drwx(){
    ekkusu.beginPath();
    ekkusu.moveTo(blockcenter+blocksize*0.4+arcx,blockcenter+blocksize*0.4-blocksize*0.8+arcy);
    ekkusu.lineTo(blockcenter-blocksize*0.4+arcx,blockcenter-blocksize*0.4-blocksize*0.8+arcy);
    ekkusu.strokeStyle= "blue";
    ekkusu.lineWidth = blocksize*0.03;
    ekkusu.stroke();

    ekkusu.beginPath();
    ekkusu.moveTo(blockcenter+blocksize*0.4+arcx,blockcenter-blocksize*0.4-blocksize*0.8+arcy);
    ekkusu.lineTo(blockcenter-blocksize*0.4+arcx,blockcenter+blocksize*0.4-blocksize*0.8+arcy);
    ekkusu.strokeStyle= "blue";
    ekkusu.lineWidth = blocksize*0.03;
    ekkusu.stroke();
}

function startGame(){
    createmasu();

    
}

startGame();
drwx();
drwcir();
