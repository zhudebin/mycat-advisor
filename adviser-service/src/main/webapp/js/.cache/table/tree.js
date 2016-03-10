/*TMODJS:{"version":1,"md5":"4e3d4e3d85601c83e8761ab10f7f9dfc"}*/
template('table/tree',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,pagination=$data.pagination,$out='';$out+='<div class="container"> ';
include('../public/breadcrumbs');
$out+=' <div class="card"> <div class="card-header"> <h2>树形表格 <small>静态数据demo</small> </h2> </div> <div class="table-responsive"> <table class="table table-striped table-hover"> <thead> <tr> <th>名称</th> <th>类型</th> <th>大小</th> <th>操作</th> </tr> </thead> <tbody class="tbl-tree tree-single" data-lvl="2"> ';
$each(list,function($value,$index){
$out+=' <tr id="';
$out+=$escape($value.id);
$out+='" pid="';
$out+=$escape($value.pid);
$out+='"> <td> <label class="checkbox checkbox-inline"> <input class="chk-line" type="checkbox" value="';
$out+=$escape($value.id);
$out+='"> <i class="input-helper"></i> ';
$out+=$escape($value['名称']);
$out+=' </label> </td> <td>';
$out+=$escape($value['类型']);
$out+='</td> <td>';
$out+=$escape($value['大小']);
$out+='</td> <td> <button type="button" class="btn btn-xs btn-icon command-edit" data-row-id="10234"> <span class="zmdi zmdi-edit"></span> </button> <button type="button" class="btn btn-xs btn-danger btn-icon btn-del" data-id="';
$out+=$escape($value.id);
$out+='" data-url="_data/error.json"> <span class="zmdi zmdi-delete"></span> </button> </td> </tr> ';
});
$out+=' </tbody> </table> </div> ';
$out+=$string(pagination);
$out+=' </div> </div>';
return new String($out);
});