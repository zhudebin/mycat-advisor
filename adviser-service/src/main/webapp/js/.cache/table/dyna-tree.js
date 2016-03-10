/*TMODJS:{"version":1,"md5":"a5dae13a8318857699493e092e8b1646"}*/
template('table/dyna-tree',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$string=$utils.$string,pagination=$data.pagination,$out='';$out+='<div class="container"> ';
include('../public/breadcrumbs');
$out+=' <div class="card"> <div class="card-header"> <h2>树形表格 <small>动态加载数据demo</small> </h2> </div> <div class="table-responsive"> <table class="table table-striped table-hover"> <thead> <tr> <th>名称</th> <th>类型</th> <th>大小</th> </tr> </thead> <tbody id="demo" class="tbl-dyna-tree" data-url="_data/table/dyna-tree/#id#.json" data-tpl="table/dyna-tree-lines"> ';
include('./dyna-tree-lines');
$out+=' </tbody> </table> </div> ';
$out+=$string(pagination);
$out+=' </div> </div>';
return new String($out);
});