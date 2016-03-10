/*TMODJS:{"version":1,"md5":"20637b2d47e37381f75d3987bbde6f8c"}*/
template('notice/view',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$escape=$utils.$escape,nTitle=$data.nTitle,DateTime=$data.DateTime,$string=$utils.$string,nTxt=$data.nTxt,$out='';$out+='<div class="container"> ';
include('../public/breadcrumbs');
$out+=' <div class="card"> <div class="card-header"> <h2>';
$out+=$escape(nTitle);
$out+='<small>';
$out+=$escape($helpers. dateFormat(DateTime ));
$out+='</small></h2> </div> <div class="card-body card-padding"> ';
$out+=$string(nTxt);
$out+=' </div> </div> </div>';
return new String($out);
});