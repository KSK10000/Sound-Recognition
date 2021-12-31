function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dZErz09RX/model.json',modelloaded);
}
function modelloaded(){
    console.log("Your Model Is Successfully Loaded");
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.log("error");
    }
    else{
        console.log(results);
    }
}