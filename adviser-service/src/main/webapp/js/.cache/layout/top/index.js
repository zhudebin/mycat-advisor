/*TMODJS:{"version":1,"md5":"5b6d7785b97ec5421107ecb97ed14203"}*/
template('layout/top/index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$escape=$utils.$escape,lang=$data.lang,$out='';$out+='<ul class="header-inner">  <li id="menu-trigger" data-trigger="#sidebar"> <div class="line-wrap"> <div class="line top"></div> <div class="line center"></div> <div class="line bottom"></div> </div> </li>  <li class="logo hidden-xs"> <a href="index.html">LOGO</a> </li> <li class="pull-right"> <ul class="top-menu">  <li id="toggle-width"> <div class="toggle-switch"> <input id="tw-switch" type="checkbox" hidden="hidden"/> <label for="tw-switch" class="ts-helper"></label> </div> </li>  <li id="top-search"> <a class="tm-search" href=""></a> </li>  <li id="top-email" class="dropdown"> ';
include('./email');
$out+=' </li>  <li id="top-notification" class="dropdown"> ';
include('./notification');
$out+=' </li>  <li id="top-task" class="dropdown hidden-xs"> ';
include('./task');
$out+=' </li>  <li class="dropdown"> <a data-toggle="dropdown" class="tm-settings" href="#"></a> <ul class="dropdown-menu dm-icon pull-right"> <li class="hidden-xs"> <a data-action="fullscreen" href="#"> <i class="zmdi zmdi-fullscreen"></i> ';
$out+=$escape(lang.menu.fullscreen);
$out+=' </a> </li> <li> <a data-action="clear-localstorage" href="#"> <i class="zmdi zmdi-delete"></i> ';
$out+=$escape(lang.menu.clearLocalstorage);
$out+=' </a> </li> </ul> </li> <li id="chat-trigger" data-trigger="#chat"> <a class="tm-chat" href="#"></a> </li> </ul> </li> </ul> <div id="top-search-wrap"> <input type="text"> <i id="top-search-close">&times;</i> </div>';
return new String($out);
});