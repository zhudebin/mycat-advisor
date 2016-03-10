/*TMODJS:{"version":1,"md5":"0382c007bf65d564a8283d8af284dcfc"}*/
template('table/checkbox',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,pagination=$data.pagination,$out='';$out+='<div class="container"> ';
include('../public/breadcrumbs');
$out+=' <div class="card"> <div class="card-header"> <h2>带复选框表格 <small>包含斑马线和悬浮高亮</small> </h2> </div> <div class="table-responsive"> <table class="table table-striped table-hover"> <thead> <tr> <th> <label class="checkbox checkbox-inline"> <input class="chk-all" type="checkbox"> <i class="input-helper"></i> </label> </th> <th>First Name</th> <th>Last Name</th> <th>Username</th> <th>Nickname</th> <th>DateTime</th> <th>操作</th> </tr> </thead> <tbody> ';
$each(list,function($value,$index){
$out+=' <tr> <td> <label class="checkbox checkbox-inline"> <input class="chk-line" type="checkbox" name="chkTest" value="';
$out+=$escape($index);
$out+='"> <i class="input-helper"></i> </label> </td> <td>';
$out+=$escape($value.firstName);
$out+='</td> <td>';
$out+=$escape($value.lastName);
$out+='</td> <td>';
$out+=$escape($value.userName);
$out+='</td> <td>';
$out+=$escape($value.nickName);
$out+='</td> <td>';
$out+=$escape($helpers. dateFormat($value.DateTime ));
$out+='</td> <td> <button type="button" class="btn btn-xs btn-icon command-edit" data-row-id="10234"> <span class="zmdi zmdi-edit"></span> </button> <button type="button" class="btn btn-xs btn-danger btn-icon btn-del" data-id="';
$out+=$escape($index);
$out+='" data-url="_data/error.json"> <span class="zmdi zmdi-delete"></span> </button> </td> </tr> ';
});
$out+=' </tbody> </table> </div> ';
$out+=$string(pagination);
$out+=' </div> </div> ';
return new String($out);
});