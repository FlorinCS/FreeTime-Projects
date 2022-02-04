let foto=document.getElementById("imaginea")
let nume=document.getElementById("AMG")
let putere=document.getElementById("cai")
let pachet=document.getElementById("pachet")
let emisii=document.getElementById("emisii")
let tip=document.getElementById("tip")
let S=document.getElementById("Su")
let C=document.getElementById("C")
let E=document.getElementById("E")
let amg=document.getElementById("amg")
S.onmouseover=function(){
    nume.innerHTML="S-Class 500"
    putere.innerHTML="220 HP"
    pachet.innerHTML="Pachet Comfort"
    emisii.innerHTML="CO2 ridicat"
    tip.innerHTML="Plug-In Hybrid"
    foto.src="mercedes-c-klasse-limousine-2021.JPG"
 }
 C.onmouseover=function(){
    nume.innerHTML="C-Class 360"
    putere.innerHTML="150 HP"
    pachet.innerHTML="Pachet Comfort"
    emisii.innerHTML="CO2 mediu"
    tip.innerHTML="Diesel"
    foto.src="image.MQ6.8.20200909152933.JPEG"
 }
 
 E.onmouseover=function(){
    nume.innerHTML="Electric PF12"
    putere.innerHTML="320 HP"
    pachet.innerHTML="Pachet Comfort"
    emisii.innerHTML="Fara Poluare"
    tip.innerHTML="Full Electric"
    foto.src="exteriorImage.MQ6.12.20201215205444.webp"
 }
 
 
 amg.onmouseover=function(){
    nume.innerHTML="AMG XXF"
    putere.innerHTML="360 HP"
    pachet.innerHTML="Pachet AMG"
    emisii.innerHTML="CO2 Redus"
    tip.innerHTML="Hybrid"
    foto.src="mertan.png"
    foto.style.width="450px"
    
 }
 