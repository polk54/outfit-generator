// Shoes
function getShoes() {
  var number = Math.floor(Math.random()*randomShoes.length);
  document.getElementById("shoesDisplay").innerHTML =('<img src="'+randomShoes[number]+'" />');
}
var randomShoes = new Array();
randomShoes[0] = "https://s7d5.scene7.com/is/image/Anthropologie/56852692_029_b2";
randomShoes[1] = "https://s7d5.scene7.com/is/image/Anthropologie/57995920_006_b2";
randomShoes[2] = "https://s7d5.scene7.com/is/image/Anthropologie/55380059_001_b2";
