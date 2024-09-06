// Jacket
function getJacket() {
  var number = Math.floor(Math.random()*randomJacket.length);
  document.getElementById("jacketDisplay").innerHTML =('<img src="'+randomJacket[number]+'" />');
}

var randomJacket = new Array();
randomJacket[0] = "https://photos.google.com/share/AF1QipP20ERqpL6Ky4qIAAYsfm0qMF6qca39zLoFjRXn7e8aBLAGYNxzskEWRwYikbZl6g/photo/AF1QipMB4e-KcuuSvh1QC2A0u6gAVelukPAhgelWYjKV?key=OC1aRUEyLV9uVXA2LTZCbGxsRzdPZGx0YWx3cTJ3";
randomJacket[1] = "https://photos.google.com/share/AF1QipP20ERqpL6Ky4qIAAYsfm0qMF6qca39zLoFjRXn7e8aBLAGYNxzskEWRwYikbZl6g/photo/AF1QipMB4e-KcuuSvh1QC2A0u6gAVelukPAhgelWYjKV?key=OC1aRUEyLV9uVXA2LTZCbGxsRzdPZGx0YWx3cTJ3";
randomJacket[2] = "https://s7d5.scene7.com/is/image/Anthropologie/4133380630020_090_b";
