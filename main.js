SpeechRecognition = window.webkitSpeechRecognition;
recognition= new SpeechRecognition();

function starting(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}

recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;

if(content=="take my selfie"){
 speak();
 takesnapshot();

}
}

function speak(){
   synth=window.speechSynthesis;
   speechdata = "taking your selfie in 5 seconds"
   utterthis= new SpeechSynthesisUtterance(speechdata);
   synth.speak(utterthis);
   Webcam.attach("#camera");

   setTimeout(function(){
       takesnapshot();
   },5000);
  
}

Webcam.set({
    width:360,
    height:370,
    image_format:"jpg",
    jpg_quality:90
});

camera=document.getElementById("camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie_result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>";
        console.log("clicking your selfie in 5 seconds");
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById(selfie_result).scroll;
    link.href=image;
    link.click();
}