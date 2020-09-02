// Accessory
function getAccessory() {
  var number = Math.floor(Math.random()*randomAccessory.length);
  document.getElementById("accessoryDisplay").innerHTML =('<img src="'+randomAccessory[number]+'" />');
}

var randomAccessory = new Array();
randomAccessory[0] = "https://s7d5.scene7.com/is/image/Anthropologie/58261918_011_b3";
randomAccessory[1] = "https://s7d5.scene7.com/is/image/Anthropologie/58045840_005_b";
randomAccessory[2] = "https://s7d5.scene7.com/is/image/Anthropologie/57992166_066_b";
