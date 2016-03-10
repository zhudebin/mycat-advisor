/*TMODJS:{"version":1,"md5":"310bb623ccca5f9cf4c0d3fa92330c46"}*/
template('public/error',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,status=$data.status,msg=$data.msg,$out='';$out+='<div class="container" style="position: relative"> <div class="four-zero"> <h2>';
$out+=$escape(status);
$out+='</h2> <small>';
$out+=$escape(msg);
$out+='</small> <footer> <a href="javascript:window.history.back();"><i class="zmdi zmdi-arrow-back"></i></a> <a href="#"><i class="zmdi zmdi-home"></i></a> </footer> </div> </div>';
return new String($out);
});