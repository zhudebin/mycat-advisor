/*TMODJS:{"version":1,"md5":"981f01dbbf6e0116bf0ad85f53f754b1"}*/
template('table/dyna-tree-lines',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,pid=$data.pid,$out='';$each(list,function($value,$index){
$out+=' <tr id="';
$out+=$escape($value.id);
$out+='" pid="';
$out+=$escape(pid);
$out+='" hasChild="true"> <td> <label class="checkbox checkbox-inline"> <input class="chk-line" type="checkbox" value="';
$out+=$escape($value.id);
$out+='"> <i class="input-helper"></i> ';
$out+=$escape($value['名称']);
$out+=' </label> </td> <td>';
$out+=$escape($value['类型']);
$out+='</td> <td>';
$out+=$escape($value['大小']);
$out+='</td> </tr> ';
});
return new String($out);
});