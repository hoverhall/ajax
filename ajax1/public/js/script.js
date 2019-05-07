$("#send").click(function(e) {
    e.preventDefault();
    var str = {};

    str[$("#inptut").attr("name")] = $("#inptut").val();
    str[$("#inptat").attr("name")] = $("#inptat").val();

    $.getJSON("./data.json", function( data ) {
        $.each( data, function( key, val ) {
        console.log(key[0].val)
        console.log( "<li id='" + key + "'>" + val + "</li>" );
        });
        console.log(data);
    });

    $.ajax({
      type: "POST",
      data: str,
      url: "/index",
      dataType: "JSON",
      success: function(msg) {
        response = "name: "+msg.email + "\npassword: " + msg.password;
        alert(response);
      },
      fail: function(msg) {
        alert("obijaeh " + msg);
      }
    });
});