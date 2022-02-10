
let frage=document.getElementById("frage")
let button=document.getElementById("button")
let score=document.getElementById("score")
let tabel=document.getElementById("tabel")
let value=0
let arr=0;
let nr=document.getElementById("nr")
let nr2=0
let antwort=document.getElementById("antwort")
let ans=0
function  da(){
fetch("https://jservice.io/api/random")


.then(function(data){

 return arr= data.json()
 

})



.then (function(res){
    frage.innerHTML=res[0].question;
    ans=res[0].answer
    nr2+=1
    nr.innerHTML=nr2
    value+=res[0].value
   
    return ans

    





  
   


})
}
da()
function but(){
    antwort.value=""
    if (nr2+1==11){
        tabel.innerHTML="The Game is Over"
        frage.style.display="none"
        button.style.display="none"
        antwort.style.display="none"
    }else{
   

  da()
  if (antwort.value==ans){
     
     score.innerHTML=value

}
 
  //nr.innerHTML=nr2
    }
}



