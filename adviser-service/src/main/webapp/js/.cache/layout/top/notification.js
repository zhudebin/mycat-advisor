/*TMODJS:{"version":1,"md5":"5bc97d745a74d807da90f6db413ef4ca"}*/
template('layout/top/notification',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,notification=$data.notification,lang=$data.lang,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$out='';$out+='<a data-toggle="dropdown" class="tm-notification" href=""><i class="tmn-counts">';
$out+=$escape(notification.num);
$out+='</i></a> <div class="dropdown-menu dropdown-menu-lg pull-right"> <div class="listview" id="notifications"> <div class="lv-header"> ';
$out+=$escape(lang.menu.notification);
$out+=' </div> <div class="lv-body"> ';
$each(notification.list,function($value,$index){
$out+=' <a class="lv-item" href="#"> <div class="media"> <div class="pull-left"> <i class="zmdi zmdi-caret-right"></i> </div> <div class="media-body"> <div class="lv-title">';
$out+=$escape($value.title);
$out+='</div> <small class="lv-small">';
$out+=$escape($value.text);
$out+='</small> </div> </div> </a> ';
});
$out+=' </div> <a class="lv-footer" href="#">';
$out+=$escape(lang.btn.viewAll);
$out+='</a> </div> </div>';
return new String($out);
});