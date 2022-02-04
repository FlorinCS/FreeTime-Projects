
/*alert("dgdfggrth");
function setup(){
    noCanvas();
    let lang=navigator.language || "en-US";
    let speechRec= new p5.SpeechRec(lang, gotSpeech)
}
speechRec.start();
function gotSpeech(){

    console.log(speechRec);
}*/
/*let but=document.getElementById("but")

let p=document.getElementById("p")

function joc(){
let final="";
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// setup SpeechRecognation
const recognition = new SpeechRecognition();
recognition.interimResults = false;
recognition.continous=false
recognition.lang = 'en-US';
// waiting for speech results
recognition.addEventListener('result', event => {
    const transcript = event.results[0][0].transcript;
        
   final <= transcript
 
    console.log(transcript)
    p.innerHTML=final
  });
  recognition.addEventListener('end', recognition.start);
recognition.start();

}
*/
/*function buts(){

    
var speechElement = new webkitSpeechRecognition();
speechElement.lang = 'de-DE';
speechElement.interimResults = true;
speechElement.continuous = true;
var final_transcript = '';
var vanila=document.getElementById("vanila")
var cioco=document.getElementById("cioco")
console.log(cioco.innerHTML)
speechElement.start();

speechElement.onstart = function() {
}

speechElement.onresult = function(event) {
	var interim_transcript = '';
	for(var i = event.resultIndex; i < event.results.length; ++i) {
		if(event.results[i].isFinal) {
			final_transcript += event.results[i][0].transcript;
            
		} else {
			interim_transcript += event.results[i][0].transcript;
		}
	}
	document.getElementById('final').innerHTML = final_transcript;
	document.getElementById('interim').innerHTML = interim_transcript;
    if (final_transcript==cioco.innerHTML){
   let h1=document.getElementById('da').innerHTML = final_transcript;
    }
}
}
*/

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let unu=document.getElementById("unu");
let doi=document.getElementById("doi");
const recognition = new SpeechRecognition();
recognition.lang = 'de-DE';
recognition.onresult=function(event){

    const current=event.resultIndex;
    const transcript=event.results[current][0].transcript

    //let p2=document.getElementById('da').innerHTML = transcript;
    if (transcript=="1"){
    let mess=document.getElementById('mess').innerHTML = " Your Fries Medium have been added to the cart";
    let ord1=document.getElementById('ord1').style.display = "unset";
    let ord4=document.getElementById('num1').style.textAlign = "center";
   console.log(transcript)
    }else if (transcript=="2"){
        let mess=document.getElementById('mess').innerHTML = " Your Carrots Bag have been added to the cart";
        let ord2=document.getElementById('ord2').style.display = "unset";
        let ord3=document.getElementById('num2').style.textAlign = "center";
    }


}
function buts(){

    recognition.start()
}




