/*TMODJS:{"version":1,"md5":"5a69b7278f5d92fce8a3ba142fb6c761"}*/
template('search/editM',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,no=$data.no,date=$data.date,x=$data.x,y=$data.y,lang=$data.lang,$out='';$out+='<div class="modal-header"> <h4 class="modal-title">';
$out+=$escape(title);
$out+='</h4> </div> <form class="form-horizontal form-validate" action="_data/success.json" role="form"> <div class="modal-body"> <div class="form-group"> <label for="no" class="col-sm-2 control-label">编号</label> <div class="col-sm-10"> <div class="fg-line"> <input type="text" class="form-control input-sm validate[required]" id="no" name="no" placeholder="编号" value="';
$out+=$escape(no);
$out+='"> </div> <small class="help-block">&nbsp;</small> </div> </div> <div class="form-group"> <label for="date" class="col-sm-2 control-label">生产日期</label> <div class="col-sm-10"> <div class="dtp-container fg-line"> <input type="text" class="form-control input-sm date-picker validate[required]" id="date" name="date" placeholder="生产日期" value="';
$out+=$escape(date);
$out+='"> </div> <small class="help-block">&nbsp;</small> </div> </div> <div class="form-group"> <label for="x" class="col-sm-2 control-label">坐标</label> <div class="col-sm-5"> <div class="fg-line"> <input type="text" class="form-control input-sm validate[required]" id="x" name="x" placeholder="x轴" value="';
$out+=$escape(x);
$out+='"> </div> <small class="help-block">&nbsp;</small> </div> <div class="col-sm-5"> <div class="fg-line"> <input type="text" class="form-control input-sm validate[required]" id="y" name="y" placeholder="y轴" value="';
$out+=$escape(y);
$out+='"> </div> <small class="help-block">&nbsp;</small> </div> </div> </div> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> <div class="modal-footer"> <button type="button" class="btn btn-primary btn-save">';
$out+=$escape(lang.btn.save);
$out+='</button> <button type="button" class="btn btn-default" data-dismiss="modal">';
$out+=$escape(lang.btn.close);
$out+='</button> </div> </form>';
return new String($out);
});