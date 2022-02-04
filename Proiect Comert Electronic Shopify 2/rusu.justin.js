
let unu=document.getElementById("unu1")
let doi=document.getElementById("doi1")
let trei=document.getElementById("trei1")
let patru=document.getElementById("patru1")
let foto1=document.getElementById("foto1")
let unu1=document.getElementById("unu")
let doi1=document.getElementById("doi")
let trei1=document.getElementById("trei")
let patru1=document.getElementById("patru")
let cinci1=document.getElementById("cinci")
let sase1=document.getElementById("sase")
let sapte1=document.getElementById("sapte")
let opt1=document.getElementById("opt")
let noua1=document.getElementById("noua")

let desc=document.getElementById("descrescator")

unu.onmouseover=function(){

    foto1.src="images/4.png"
}

doi.onmouseover=function(){

foto1.src="images/2.JPG";

}
trei.onmouseover=function(){

    foto1.src="images/3.PNG";
    
    }
    patru.onmouseover=function(){

        foto1.src="images/5.jpg";
        
        }

    //         desc.onchange=function() {
    //         doi1.style.gridArea="h1";
    //         unu1.style.gridArea = "h2";
    //       }
    function testul(){

        let select=document.getElementById("tablete")
         let current=select.options[select.selectedIndex].text;
      if (current=="Pret descrescator"){
        sapte1.style.gridArea = "h1";
        unu1.style.gridArea = "h2";
        noua1.style.gridArea = "h3";
        trei1.style.gridArea = "h4";
        patru1.style.gridArea = "h5";
        sase1.style.gridArea = "h6";
        cinci1.style.gridArea = "h7";
        doi1.style.gridArea = "h8";
        opt1.style.gridArea = "h9";
      } else if(current=="Pret crescator"){
        sapte1.style.gridArea = "h9";
        unu1.style.gridArea = "h8";
        noua1.style.gridArea = "h7";
        trei1.style.gridArea = "h6";
        patru1.style.gridArea = "h5";
        sase1.style.gridArea = "h4";
        cinci1.style.gridArea = "h3";
        doi1.style.gridArea = "h2";
        opt1.style.gridArea = "h1";

      }else{

        sapte1.style.gridArea = "h1";
        unu1.style.gridArea = "h3";
        noua1.style.gridArea = "h9";
        trei1.style.gridArea = "h7";
        patru1.style.gridArea = "h5";
        sase1.style.gridArea = "h4";
        cinci1.style.gridArea = "h8";
        doi1.style.gridArea = "h2";
        opt1.style.gridArea = "h6";

      }
    }
          
          