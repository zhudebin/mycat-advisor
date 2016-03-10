/*TMODJS:{"version":1,"md5":"0db3575b798d349fa83e9f920aeeb5e6"}*/
template('list/alert',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,pagination=$data.pagination,$out='';$out+='<div class="container"> ';
include('../public/breadcrumbs');
$out+=' <div class="card"> <div class="listview lv-bordered lv-lg"> <div class="lv-header-alt clearfix"> <h2 class="lvh-label hidden-xs">告警信息</h2> <div class="lvh-search"> <input type="text" placeholder="查询..." class="lvhs-input"> <i class="lvh-search-close">&times;</i> </div> <ul class="lv-actions actions"> <li> <a href="#" class="lvh-search-trigger"> <i class="zmdi zmdi-search"></i> </a> </li> <li class="dropdown"> <a href="#" data-toggle="dropdown" aria-expanded="true"> <i class="zmdi zmdi-sort"></i> </a> <ul class="dropdown-menu dropdown-menu-right"> <li> <a href="void(0)">发生时间</a> </li> <li> <a href="void(0)">修改时间</a> </li> <li> <a href="void(0)">地点</a> </li> </ul> </li> <li class="dropdown"> <a href="" data-toggle="dropdown" aria-expanded="true"> <i class="zmdi zmdi-more-vert"></i> </a> <ul class="dropdown-menu dropdown-menu-right"> <li> <a href="void(0)">Refresh</a> </li> </ul> </li> </ul> </div> <div class="lv-body"> ';
$each(list,function($value,$index){
$out+=' <div class="lv-item media"> <div class="checkbox pull-left"> <label> <input type="checkbox" value=""> <i class="input-helper"></i> </label> </div> <div class="pull-left"> <img class="lv-img-sm" src="';
$out+=$escape($value.ico);
$out+='" alt=""> </div> <div class="media-body"> <div class="lv-title">';
$out+=$escape($value.title);
$out+='</div> <small class="lv-small">';
$out+=$escape($value.deltail);
$out+='</small> <ul class="lv-attrs"> <li>时间: ';
$out+=$escape($helpers. dateFormat($value.DateTime ));
$out+='</li> <li>电话: ';
$out+=$escape($value.tel);
$out+='</li> <li>编号: ';
$out+=$escape($value.no);
$out+='</li> </ul> <div class="lv-actions actions dropdown"> <a href="" data-toggle="dropdown" aria-expanded="true"> <i class="zmdi zmdi-more-vert"></i> </a> <ul class="dropdown-menu dropdown-menu-right"> <li> <a href="void(0)">去处理</a> </li> <li> <a href="void(0)">删除</a> </li> </ul> </div> </div> </div> ';
});
$out+=' </div> </div> ';
$out+=$string(pagination);
$out+=' </div> </div>';
return new String($out);
});