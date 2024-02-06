let but = document.querySelectorAll("button");
but.forEach((val)=>{
    val.addEventListener("click",function() {
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);
    });
});

document.addEventListener("keypress",function(event) {
    makeSound(event.key);
    buttonAnimation(buttonClicked);
});

function makeSound(key) {
    switch(key) {
        case "w":
            var audio =new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        case "s":
            var audio2 = new Audio("sounds/snare.mp3");
            audio2.play();
            break;
        case "d":
            var audio3 = new Audio("sounds/tom-1.mp3");
            audio3.play();
            break;
        case "j":
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "k":
            var audio1 = new Audio("sounds/tom-3.mp3");
            audio1.play();
            break;
        case "l":
            var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    var button = document.querySelector("." + currentKey);
    button.classList.add("pressed");
    setTimeout (function(){
        button.classList.remove("pressed");
    },100);
}