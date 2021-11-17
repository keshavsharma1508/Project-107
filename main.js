//https://teachablemachine.withgoogle.com/models/w7si4kaG5/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HkOaav7Vi/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log(error) ;
}