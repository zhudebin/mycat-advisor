/*TMODJS:{"version":1,"md5":"8750e072f4b8acbcd721a6dc03cfb099"}*/
template('table/base',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,pagination=$data.pagination,$out='';$out+='<div class="container"> ';
include('../public/breadcrumbs');
$out+=' <div class="card"> <div class="card-header"> <h2>普通表格 <small>包含斑马线和悬浮高亮</small> </h2> </div> <div class="table-responsive"> <table class="table table-striped table-hover"> <thead> <tr> <th>#</th> <th>First Name</th> <th>Last Name</th> <th>Username</th> <th>Nickname</th> <th>DateTime</th> <th>Date</th> </tr> </thead> <tbody> ';
$each(list,function($value,$index){
$out+=' <tr> <td>';
$out+=$escape($index+1);
$out+='</td> <td>';
$out+=$escape($value.firstName);
$out+='</td> <td>';
$out+=$escape($value.lastName);
$out+='</td> <td>';
$out+=$escape($value.userName);
$out+='</td> <td>';
$out+=$escape($value.nickName);
$out+='</td> <td>';
$out+=$escape($helpers. dateFormat($value.DateTime ));
$out+='</td> <td>';
$out+=$escape($helpers. dateFormat($value.DateTime , 'YYYY/MM/DD'));
$out+='</td> </tr> ';
});
$out+=' </tbody> </table> </div> ';
$out+=$string(pagination);
$out+=' </div> </div> ';
return new String($out);
});