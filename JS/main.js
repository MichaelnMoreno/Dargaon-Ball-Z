document.querySelector("#goku").addEventListener("mouseenter", goku)
document.querySelector("#gohan").addEventListener("mouseenter", gohan)
document.querySelector("#vegeta").addEventListener("mouseenter", vegeta)
document.querySelector("#android17").addEventListener("mouseenter", android17)
document.querySelector("#android18").addEventListener("mouseenter", android18)
document.querySelector("#trunks").addEventListener("mouseenter", trunks)

function goku () {
  document.querySelector('#video').style.backgroundImage = 'url(../img/8gokuWalking.gif)'
  document.querySelector("#video").style.border = "1rem solid black"
  document.querySelector('#video').style.backgroundSize = 'cover'
  document.querySelector('#video').style.backgroundRepeat = 'no-repeat'
}

function gohan() {
  document.querySelector('#video').style.backgroundImage ="url(../img/9gohanCharging.gif)"
  document.querySelector("#video").style.border = "1rem solid black"
  document.querySelector('#video').style.backgroundSize = 'cover'
  document.querySelector('#video').style.backgroundRepeat = 'no-repeat'
}

function vegeta() {
  document.querySelector('#video').style.backgroundImage = "url(../img/10vegetaCharging.gif)"
  document.querySelector("#video").style.border = "1rem solid black"
  document.querySelector('#video').style.backgroundSize = 'cover'
  document.querySelector('#video').style.backgroundRepeat = 'no-repeat'
}

function android17() {
  document.querySelector('#video').style.backgroundImage = 'url(../img/11android17Charging.gif)'
  document.querySelector("#video").style.border = "1rem solid black"
  document.querySelector('#video').style.backgroundSize = 'cover'
  document.querySelector('#video').style.backgroundRepeat = 'no-repeat'
}

function android18() {
  document.querySelector('#video').style.backgroundImage = 'url(../img/12android18Moving.gif)'
  document.querySelector("#video").style.border = "1rem solid black"
  document.querySelector('#video').style.backgroundSize = 'cover'
  document.querySelector('#video').style.backgroundRepeat = 'no-repeat'
}

function trunks() {
  document.querySelector('#video').style.backgroundImage = 'url(../img/13TrunksSword.gif)'
  document.querySelector("#video").style.border = "1rem solid black"
  document.querySelector('#video').style.backgroundSize = 'cover'
  document.querySelector('#video').style.backgroundRepeat = 'no-repeat'
}
