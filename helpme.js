let socialCredit = 0
let random = -1
let sMax = 1
function gamble(min, max){
    let falseRandom
    let displayed
    random = Math.floor(Math.random()*(max-min)+min)
    falseRandom = Math.random()*(max-min)+min
    displayed = data.random * ((1000 * falseRandom)*sMax)
    socialCredit = displayed
}
function increaseMax(min, max){
    let maxMultiplier
    maxMultiplier = Math.random()*(max-min)+min
    sMax *= maxMultiplier
}
function mainLoop(){
    updateHTML()
}
window.setInterval(function(){
    mainLoop()
}, 10);