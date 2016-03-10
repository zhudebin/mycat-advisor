/*TMODJS:{"version":2,"md5":"f07a5bdbb81c1f84212182f7e95cb8d4"}*/
template('notice/index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,pagination=$data.pagination,$out='';$out+='<div class="container"> ';
include('../public/breadcrumbs');
$out+=' <div class="card"> <div class="listview lv-bordered lv-lg"> <div class="lv-header-alt clearfix"> <h2 class="lvh-label hidden-xs">公告列表</h2> <div class="lvh-search"> <input type="text" placeholder="查询..." class="lvhs-input"> <i class="lvh-search-close">&times;</i> </div> <ul class="lv-actions actions"> <li> <a href="#" class="lvh-search-trigger"> <i class="zmdi zmdi-search"></i> </a> </li> <li> <a href="#_data/notice/new.json?tpl=notice/editM" class="btn-modal" data-size="modal-lg"> <i class="zmdi zmdi-plus"></i> </a> </li> <li class="dropdown"> <a href="" data-toggle="dropdown" aria-expanded="true"> <i class="zmdi zmdi-more-vert"></i> </a> <ul class="dropdown-menu dropdown-menu-right"> <li> <a href="void(0)">Refresh</a> </li> </ul> </li> </ul> </div> <div class="lv-body"> ';
$each(list,function($value,$index){
$out+=' <div class="lv-item media"> <div class="media-body"> <div class="lv-title">';
$out+=$escape($value.title);
$out+='</div> <ul class="lv-attrs"> <li>时间: ';
$out+=$escape($helpers. dateFormat($value.DateTime ));
$out+='</li> </ul> <div class="lv-actions actions dropdown"> <a href="" data-toggle="dropdown" aria-expanded="true"> <i class="zmdi zmdi-more-vert"></i> </a> <ul class="dropdown-menu dropdown-menu-right"> <li> <a href="#_data/notice/view.json?tpl=notice/view&target=notice/index" class="btn-nav">查看</a> </li> <li> <a href="#_data/notice/edit.json?tpl=notice/editM" class="btn-modal" data-size="modal-lg">编辑</a> </li> <li> <a href="void(0)">删除</a> </li> </ul> </div> </div> </div> ';
});
$out+=' </div> </div> ';
$out+=$string(pagination);
$out+=' </div> </div>';
return new String($out);
});