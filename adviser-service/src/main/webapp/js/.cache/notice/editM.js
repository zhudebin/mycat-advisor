/*TMODJS:{"version":1,"md5":"fe8b78979820be9f7ce169cbd2dfc779"}*/
template('notice/editM',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,nTitle=$data.nTitle,$string=$utils.$string,nTxt=$data.nTxt,lang=$data.lang,$out='';$out+='<div class="modal-header"> <h4 class="modal-title">';
$out+=$escape(title);
$out+='</h4> </div> <form class="form-horizontal form-validate" action="_data/success.json" role="form"> <div class="modal-body"> <div class="form-group"> <label for="nTitle" class="col-sm-2 control-label">标题</label> <div class="col-sm-10"> <div class="fg-line"> <input type="text" class="form-control input-sm validate[required]" id="nTitle" name="nTitle" placeholder="标题" value="';
$out+=$escape(nTitle);
$out+='"> </div> <small class="help-block">&nbsp;</small> </div> </div> <div class="form-group"> <label for="nTxt" class="col-sm-2 control-label">内容</label> <div class="col-sm-10"> <div class="dtp-container fg-line"> <input type="hidden" id="nTxt" name="nTxt"> </div> <small class="help-block">&nbsp;</small> </div> <div id="txtNotice" class="html-editor">';
$out+=$string(nTxt);
$out+='</div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-primary btn-save" data-fn-pre="preHandle">';
$out+=$escape(lang.btn.save);
$out+='</button> <button type="button" class="btn btn-default" data-dismiss="modal">';
$out+=$escape(lang.btn.close);
$out+='</button> </div> </form> <script> function preHandle(){ var html = $(\'#txtNotice\').code(); console.log(html); $(\'#nTxt\').val(html); } </script>';
return new String($out);
});