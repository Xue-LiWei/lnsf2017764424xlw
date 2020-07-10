$(document).ready(() => {
  mob();
});
function mob() {
  $.ajax({
    url: "/mobile/shop/data",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      if(res.success){
        mobShop(res.wears);
      }else{
        console.log(res.msg);
      }
    },
    error: function (err) {
      console.log(err);
    },
  });
}
var mobShop = (huff) => {
  for (let i = 0; i < huff.length; i++) {
    proMob(huff[i]);
  }
};
function proMob(data) {
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${data.price}`);
  var li2 = $("<li></li>");
  li2.css('text-align','center');
  var li3 = $("<li></li>").addClass("add-cart-icon");
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", data.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3);
  $(".mobiles-block").append(ulTag);
}
