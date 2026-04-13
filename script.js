function start(){
document.getElementById("s1").style.display="none"
document.getElementById("s2").style.display="flex"

let music=document.getElementById("music")
music.volume=0.6
music.play()

}

let scenes=[

{
img:"sylus1.png",
lines:[
"You came.",
"I wasn't sure you would.",
"It's quiet today.",
"...Your birthday, isn't it?",
"Karthika."
]
},

{
img:"sylus2.png",
lines:[
"You're older now.",
"Don't worry.",
"I won't mention the number.",
"You still look the same.",
"Troublesome… but familiar."
]
},

{
img:"sylus3.png",
lines:[
"Sweety asked me to tell you this.",
"She talks about you often.",
"More than necessary.",
"I suppose you're important.",
"I can see why."
]
},

{
img:"sylus4.png",
lines:[
"I don't usually do this.",
"Birthdays aren't interesting.",
"But yours…",
"is different.",
"Stay with me another year…? Karthika."
]
}

]

let scene=0
let line=0

function nextDialogue(){

let s=scenes[scene]

if(line < s.lines.length){
typeWriter(s.lines[line])
line++
}else{
showWish()
}

}

function changeImage(src){
let img=document.getElementById("sylus")
img.style.opacity=0
setTimeout(()=>{
img.src=src
img.style.opacity=1
},400)
}

function typeWriter(text){

let box=document.getElementById("dialogue")
box.innerHTML=""

let speed=70

if(text.includes("Stay with me another year")){
speed=120
box.classList.add("final-line")
}else{
box.classList.remove("final-line")
}

let i=0

let typing=setInterval(()=>{
box.innerHTML+=text[i]
i++
if(i>=text.length){
clearInterval(typing)
}
},speed)
}

function showWish(){
document.getElementById("dialogue").innerHTML="Happy Birthday, Karthika."
setTimeout(()=>{ nextScene() },1500)
}

function nextScene(){
scene++
line=0

if(scene < scenes.length){
changeImage(scenes[scene].img)
}else{
finalScene()
}
}

function finalScene(){

document.getElementById("sylus").style.display="none"
document.getElementById("heartbeat").play()

let box=document.getElementById("dialogue")
box.innerHTML=""

let img1=document.createElement("img")
img1.src="photo1.jpg"
img1.style.width="120px"
img1.style.opacity="0"
img1.style.transition="1s"
img1.style.margin="5px"
img1.style.borderRadius="10px"

let img2=document.createElement("img")
img2.src="photo2.jpg"
img2.style.width="120px"
img2.style.opacity="0"
img2.style.transition="1s"
img2.style.margin="5px"
img2.style.borderRadius="10px"

box.appendChild(img1)

setTimeout(()=>{
img1.style.opacity="1"
},300)

setTimeout(()=>{
box.appendChild(img2)
img2.style.opacity="1"
},1500)

setTimeout(()=>{
box.innerHTML+="<br><br>Happy Birthday Karthika ❤️<br>— Sweety"
},2800)

}