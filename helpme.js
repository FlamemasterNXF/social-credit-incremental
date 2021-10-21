let random = new Decimal(-1)
function gamble(min, max){
    let falseRandom = new Decimal(0)
    let displayed = new Decimal(0)
    random = new Decimal(Math.floor(Math.random()*(max-min)+min))
    falseRandom = Math.random()*(max-min)+min
    displayed = data.random.times((new Decimal(1000).times(falseRandom)).times(data.sMax))
    data.socialCredit = new Decimal(displayed)
}
function increaseMax(min, max){
    let maxMultiplier
    maxMultiplier = Math.random()*(max-min)+min
    data.sMax = data.sMax.times(maxMultiplier)
}
function mainLoop(){
    updateHTML()
}
window.setInterval(function(){
    mainLoop()
}, 10);
//msuic
function sound(src) {
    //what is this its all from w3 schools help
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
let china
function music(){
    china = new sound("Red_Sun_in_the_Sky.mp3");
    china.play()
    document.getElementById("musicTrigger").innerHTML = "there is no going back...中共的荣耀"
}