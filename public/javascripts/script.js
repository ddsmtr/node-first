 (function(){
  // console.log("Hello");
  //alert("ddd");
  //let a = document.getElementById('goform');
  //a.addEventListener("click",function(){console.log("WORK");})
 })();
 function goLab1(){
    //console.log("work");
    const form = document.forms.data;
  	const fx = form.fx.value.replace(/[\s*]/g,"");
  	const a = Number(form.left_border.value);
  	const b = Number(form.right_border.value);

    let regFx = /[^\dx\*\-\+\^.]/ig;

    // валидация формы на клиенте

    $.ajax({
      type: "POST",
      url: "/solveLab1",
      data: JSON.stringify({fx: fx, a: a, b: b}),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
          $('#dih_n1').html(data);
          //alert(data);
          }
      });

 };
