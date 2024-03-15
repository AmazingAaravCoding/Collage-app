SpeechRecognition = window.webkitSpeechRecognition
recognition = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
    if (content=="Take my selfie.") {
        speak()        
    }
}
function speak() {
    syn = window.speechSynthesis
    speakdata = "taking your selfie in 5 seconds"
    utterthis = new SpeechSynthesisUtterance(speakdata)
    syn.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(function(){
        capture(1)
    },5000)
    setTimeout(function(){
        capture(2)
    },10000)
    setTimeout(function(){
        capture(3)
    },15000)
    setTimeout(function(){
        capture(4)
    },20000)
    setTimeout(function(){
        capture(5)
    },25000)
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera")
function capture(i){
    Webcam.snap(function(data){
        document.getElementById("result"+i).innerHTML="<img id='pic' src='"+data+"'>"
    })
}
