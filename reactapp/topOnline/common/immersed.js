(function(w){

document.addEventListener('plusready',function(){
//	console.log("Immersed-UserAgent: "+navigator.userAgent);
},false);

var immersed = 0;
var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
if(ms&&ms.length>=3){
	immersed=parseFloat(ms[2]);
}
w.immersed=immersed;

if(!immersed){
	return;
}
var t=document.getElementById('header');
t&&(t.style.paddingTop=immersed+'px',t.style.background='#43cbdb',t.style.color='#FFF');
t=document.getElementById('content');
t&&(t.style.marginTop=immersed+'px');
t=document.getElementById('dcontent');
t&&(t.style.marginTop=immersed+'px');
t=document.getElementById('map');
t&&(t.style.marginTop=immersed+'px');

//var temp = document.getElementById("wrapper");
//var str = temp.style.top;
//var pattern = "px";
//str = str.replace(new RegExp(pattern), "");
//alert(str);
//str = new Number(str);
//str = str + immersed;
//alert(str);
//temp.style.top = str+'px';
//alert(temp.style.top);

//t=document.getElementsByClassName('mui-content');
//	alert(JSON.stringify(t.style));
//if(t && t.length>0){
//	for (var i = 0; i < t.length; i++) {
//		alert(t[i].style.top);
//	   t[i].style.top=immersed+'px';
//	   t[i].style.top='100px';
//			alert(t[i].style.top);
//	}
//}
//	
})(window);