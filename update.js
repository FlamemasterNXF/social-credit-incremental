let creditImages = document.getElementsByClassName("image")
function updateHTML(){
    document.getElementById("creditScore").innerHTML = `Your Social Credit Score is ${format(socialCredit)} (*${format(sMax)})`
    for (let i=0; i<creditImages.length; i++){
        checkImages(i)
    }
}
function checkImages(i){
    if (random === i){
        creditImages[i].style.display = 'flex'
    }
    else{
        creditImages[i].style.display = 'none'
    }
}