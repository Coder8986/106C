// https://teachablemachine.withgoogle.com/models/Kyd6SRbb8/ //

Dog = 0;
Cat = 0;
Cow = 0;
Horse = 0;

function Start() {
    navigator.mediaDevices.getUserMedia({audio:true});
     classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Kyd6SRbb8/model.json", modelready);
    }
    
    function modelready(){
        classifier.classify(gotresult);
    }

function gotresult(error, result){
    if (error) {
        console.log(error);
    }

    else {
console.log(result);

r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);

document.getElementById("Result").innerHTML = "I can also hear " + result[0].label;
document.getElementById("Accuracy").innerHTML = " Accuracy - " + (result[0].confidence * 100).toFixed(2) + " %";

document.getElementById("Result").style.color = "rgb(" + r + "," + g + "," + b + ")";
document.getElementById("Accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";

img_1 = document.getElementById(Barking);
img_2 = document.getElementById(Cat);
img_3 = document.getElementById(Cow);
img_4 = document.getElementById(Horse);

if ( result[0].label == "Barking") {
    img_1.src = "dog.jpg";
    Barking = Barking + 1;
    
}

else if( result[0].label == "Cat") {
    img_2.src = "Cat.jpg";
    Cat = Cat + 1;

}

else if( result[0].label == "Cow") {
    img_3.src = "cow.gif";
    Cow = Cow + 1;  
}

else  {
    img_4.src = "Cat.jpg";
    Horse =  Horse + 1;
}


}

}
