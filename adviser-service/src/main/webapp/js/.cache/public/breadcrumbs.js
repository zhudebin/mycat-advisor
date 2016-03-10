/*TMODJS:{"version":1,"md5":"7a24f51952e787f4faf860edeb072781"}*/
template('public/breadcrumbs',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,breadcrumbs=$data.breadcrumbs,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="block-header"> <h2> <ol class="breadcrumb"> ';
$each(breadcrumbs,function($value,$index){
$out+=' ';
if($value.href){
$out+=' <li><a href="';
$out+=$escape($value.href);
$out+='">';
$out+=$escape($value.title);
$out+='</a></li> ';
}else{
$out+=' <li class="active">';
$out+=$escape($value.title);
$out+='</li> ';
}
$out+=' ';
});
$out+=' </ol> </h2> <ul class="actions"> <li> <a href="javascript:mycatui.page.reload()"> <i class="zmdi zmdi-refresh-alt"></i> </a> </li> </ul> </div>';
return new String($out);
});