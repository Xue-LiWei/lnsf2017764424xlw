function loginSubmit() {
  const data = {};
  data.name = $("#name").val();
  data.password = $("#pwd").val();
  data.remember=$('#remember')[0].checked;
  //req to the router for log validation
  $.ajax({
    url: "/user/login",
    data: data,
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      if (data.success) {
        location.replace("./pages/user1.html");
      } else {
        alert("Login Failed please Check again");
      }
    },
    error: function (err) {
      console.log("You got error man!!!?");
    },
  });
}
function showHidePwd() {
  const currentType = $("#pwd").attr("type");
  if (currentType == "password") {
    $("#pwd").attr("type", "text");
  } else {
    $("#pwd").attr("type", "password");
  }
}
