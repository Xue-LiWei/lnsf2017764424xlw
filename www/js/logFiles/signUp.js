function submitUserData() {
  const data = {};
  data.name = $("#name").val();
  data.password = $("#pwd").val();
  data.cpassword = $("#cpwd").val();
  data.email = $("#email").val();
  console.log(data);
  if(data.name==''||data.password==''||data.cpassword==''||data.email==''){
    alert('请填写完整')
  }else{
    if(data.password==data.cpassword){
      $.ajax({
        url: "/user/register",
        data: data,
        method: "POST",
        dataType: "JSON",
        success: function (data) {
          //console.log(data);
          location.replace("./loginPage.html");
        },
        error: function (err) {
          console.log("Got error " + err);
        },
      });
    }else{
      alert('两次密码不一致');
    }
  }
}
//  password show n hide functionality
function showHidePwd() {
  const currentType = $(".pwd").attr("type");
  if (currentType == "password") {
    $(".pwd").attr("type", "text");
  } else {
    $(".pwd").attr("type", "password");
  }
}
