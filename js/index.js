$('.btn').click(function() {
  
	$('.text').text('got it !!');
  $.ajax({
    type:"POST",
    url:"http://192.168.0.104/?xx=111-111-111",
    success: function(data) {
      $('.text').text("Got it!!");
      
    },
    dataType: 'jsonp',
  });
  
});

$('h4').click(function() {
	var x='rgb';
var  color= $('.ff-active').css('background-color');  

console.log(color);
console.log(color == x );

if(typeof color === "undifined" ){
console.log("chutia");
}
else
	{
	
	var arr=color.split("(");
	var  arr1=arr[1].split(")");
	var rgb=arr1[0].split(",");
	console.log(rgb[0]);
	console.log(rgb[1]);
	console.log(rgb[2]);
	
	 $.ajax({
		    type:"POST",
		    url:"http://192.168.0.104/?xx="+rgb[0].trim()+"-"+rgb[1].trim()+"-"+rgb[2].trim(),
		    success: function(data) {
		      $('.text').text("Got it!!");
		      
		    },
		    dataType: 'jsonp',
		  });
	
	}
});
