/*
 * @弹出提示层 ( 加载动画(load), 提示动画(tip), 成功(success), 错误(error), )
 * @method  tipBox
 * @description 默认配置参数 
 * @time    2015-11-23   wqx
 * @param {Number} width -宽度
 * @param {Number} height -高度		
 * @param {String} str -默认文字
 * @param {String} link_str -跳转路径
 * @param {Object} windowDom -载入窗口 默认当前窗口
 * @param {Number} setTime -定时消失(毫秒) 默认为0 不消失
 * @param {Boolean} hasMask -是否显示遮罩
 * @param {Boolean} hasMaskWhite -显示白色遮罩 
 * @param {Boolean} clickDomCancel -点击空白取消
 * @param {Function} callBack -回调函数 (只在开启定时消失时才生效)
 * @param {String} type -动画类型 (加载,成功,失败,提示)
 * @param {String} btn 按钮类型 代表不同的用法  默认short,(have，double)
 * @example new TipBox(); 
 * 			new TipBox({type:'load',setTime:1000,callBack:function(){ alert(..) }}); 
*/
function TipBox(cfg){
	this.config = { 
		width          : 300,
		height         : 200,
		windowDom      : window, 
		setTime        : 0,   
		hasMask        : true,  
		hasMaskWhite   : false, 
		clickDomCancel : false,  
		callBack       : null,
		type           : 'success',
		sureHandler    : null,
		closeHandler   : null,
		color		   : "#2ad7e6", //error的颜色   #cc3333
		str            : '正在处理',
		small_str      : "请输入描述信息",
		link_str	   : 'index.html',
		btn			   : "short",
		btnMsg		   : "确定"
	}
	$.extend(this.config,cfg);	
	
	//存在就retrun
	if(this.boundingBox) return;
	
	this.boundingBox = null;
	//初始化
	this.render(this.config.type);	
	return this; 
};

//渲染
TipBox.prototype.render = function(tipType,container){	
	this.renderUI(tipType); 
	
	//绑定事件
	this.bindUI(); 
	
	//初始化UI
	this.syncUI(); 
	$(container || this.config.windowDom.document.body).append(this.boundingBox);	
};

//渲染UI
TipBox.prototype.renderUI = function(tipType){ 
	this.boundingBox = $("<div id='animationTipBox'></div>");  		
	tipType == 'load'    && this.loadRenderUI();
	tipType == 'success' && this.successRenderUI();	
	tipType == 'error'   && this.errorRenderUI();
	tipType == 'tip'     && this.tipRenderUI();
	tipType == 'con'     && this.confirmRenderUI();
	tipType == 'prompt'  && this.promptRenderUI(); //提示信息
	tipType == 'pwd'	 && this.pwdRenderUI();//提现密码提示
	tipType == 'inputPwd'&& this.inputPwdRenderUI();//输入提现密码
	this.boundingBox.appendTo(this.config.windowDom.document.body);
	this.cssRenderUI();
	//是否显示遮罩
	if(this.config.hasMask){
		this.config.hasMaskWhite ? this._mask = $("<div class='mask_white'></div>") : this._mask = $("<div class='mask'></div>");
		this._mask.appendTo(this.config.windowDom.document.body);
	}	
	
	//定时消失
	_this = this;
	!this.config.setTime && typeof this.config.callBack === "function" && (this.config.setTime = 1);	
	this.config.setTime && setTimeout( function(){ _this.close(); }, _this.config.setTime );
};

TipBox.prototype.bindUI = function(){
	_this = this;			
	
	//点击空白立即取消
	this.config.clickDomCancel && this._mask && this._mask.click(function(){_this.close();});	

	//绑定事件
	this.boundingBox.delegate('.sure','click',function(){
		_this.destroy();
		_this.fire('sure');		
	});
	this.boundingBox.delegate('.cancel','click',function(){
		_this.destroy();
		_this.fire('close'); 		
	});
	if(this.config.sureHandler){
		_this.on('sure',this.config.sureHandler);
	}
	if(this.config.closeHandler){
		_this.on('close',this.config.closeHandler);
	}	
		
};
TipBox.prototype.syncUI = function(){ 			
	this.boundingBox.css({
		width       : this.config.width+'px',
		height      : this.config.height+'px',
		marginLeft  : "-"+(this.config.width/2)+'px',
		marginTop   : "-"+(this.config.height/2)+'px'
	});	
};

//提示效果UI
TipBox.prototype.tipRenderUI = function(){
	var tip = "<div class='tip'>";
		tip +="		<div class='icon'>!</div>";
		tip +="		<div class='dec_txt'>"+this.config.str+"</div>";
     	tip +=	"<div class='small_txt'>"+this.config.small_str+"</div>";
		tip += "</div>";
	this.boundingBox.append(tip);
};

//confirm UI
TipBox.prototype.confirmRenderUI = function(){

	var tip = "<div class='tip'>";
	tip +="		<div class='icon'>!</div>";
	tip +="		<div class='dec_txt'>"+this.config.str+"</div>";
	tip +=	"<div class='small_txt'>"+this.config.small_str+"</div>";
	if(this.config.btn=="short"){
		tip +="		<div class='btn_footer'>";
		tip +="			<input type='button' class='btn cancel col_red' value='取消' />";
		tip +="			<input type='button' class='btn sure col_gray' value='跳过' />";
		tip +="		</div>";
	}else{
		tip +="		<div class='btn_footer'>";
		tip +="			<input type='button' class='btn2 cancel col_yellow' value='重新获取验证码' />";
		tip +="			<input type='button' class='btn2 sure col_gray' value='跳过' />";
		tip +="		</div>";
	}
		tip += "</div>";
	this.boundingBox.append(tip);
};

//成功效果UI
TipBox.prototype.successRenderUI = function(){
	var suc = "<div class='success'>";
		suc +="	<div class='icon'>";
     	suc +="<div >";
		suc +=		"<div class='line_short'></div>";
		suc +=		"<div class='line_long'></div>	";		
		suc +=  "</div></div>";
	    suc +=	"<div class='dec_txt'>"+this.config.str+"</div>";
	    suc +=	"<div class='small_txt'>"+this.config.small_str+"</div>";
		suc += "</div>";
	this.boundingBox.append(suc);
};

//错误效果UI
TipBox.prototype.errorRenderUI = function(){
	var err  = "<div class='lose'>";
		err +=	"	<div class='icon'>";
		err +=	"		<div class='icon_box'>";
		err +=	"			<div class='line_left'></div>";
		err +=	"			<div class='line_right'></div>";
		err +=	"		</div>";
		err +=	"	</div>";
		err +=	"<div class='dec_txt'>"+this.config.str+"</div>";
    	err +=	"<div class='small_txt'>"+this.config.small_str+"</div>";
        if(this.config.btn=="have"){
			err+= "<div class='btn_footer'>" +
			      "<input type='button' class='btn3 col_yellow' value='刷新' />"+
			"</div>";
		}
		err +=	"</div>";
	this.boundingBox.append(err);
};

//加载动画load UI
TipBox.prototype.loadRenderUI = function(){
	var load = "<div class='load '>";
		load += "<div class='icon_box'>";
	for(var i = 1; i < 4; i++ ){
		load += "<div class='cirBox"+i+"'>";
		load += 	"<div class='cir1'></div>";
		load += 	"<div class='cir2'></div>";
		load += 	"<div class='cir3'></div>";
		load += 	"<div class='cir4'></div>";
		load += "</div>";
	}
	load += "</div>";
	load += "</div>";
	load += "<div class='dec_txt'>"+this.config.str+"</div>";
	load +=	"<div class='small_txt'>"+this.config.small_str+"</div>";
	this.boundingBox.append(load);
};

//提示信息框
TipBox.prototype.promptRenderUI = function(){
	var prompt  = "<div class='tipTitle'>提&nbsp;&nbsp;&nbsp;&nbsp;示</div>";
		prompt += "<p class='tipStrInfo'>"+this.config.str+"</p>";
		prompt += "<p class='tipSmall_strInfo'>"+this.config.small_str+"</p>";
		if(this.config.btn == "have"){
			prompt += "<div class='tipButton'><a class='sure btnOk'>确定</a></div>"
		}else if(this.config.btn == "short"){
			prompt += "<div class='tipButton'><a class='btnKnow' onclick='"+this.config.link_str+"'>好的，我知道了</a></div>"
		}else if(this.config.btn == 'double'){
			prompt += "<div class='tipButton'>"+
						   "<a class='cancel doubleBtn'>取消</a>"+
						   "<a class='sure doubleBtn' href='"+this.config.link_str+"'>"+this.config.btnMsg+"</a>"+
					   "</div>"
		}else if(this.config.btn == 'none'){}//弹出框没有按钮时
	this.boundingBox.append(prompt);
}

//提现密码提示框
TipBox.prototype.pwdRenderUI = function(){
	var pwd  =  "<div class='tipTitle'>请输入提现密码</div>";
		pwd += 	"<div class='lose'>";
		pwd +=	"	<div class='icon'>";
		pwd +=	"		<div class='icon_box'>";
		pwd +=	"			<div class='line_left'></div>";
		pwd +=	"			<div class='line_right'></div>";
		pwd +=	"		</div>";
		pwd +=	"	</div>";
		pwd +=  "</div>"
		pwd +=  "<p class='tipStrInfo' style='margin:8px'>"+this.config.str+"</p>";
		pwd +=  "<p class='tipSmall_strInfo'>"+this.config.small_str+"</p>";
		if(this.config.btn == "short"){
			pwd +=  "<div class='pwdBtn'><a class='cancel'>重试</a><a class='sure' href='"+this.config.link_str+"'>忘记提现密码？</a></div>"
		}else if(this.config.btn == "have"){
			pwd +=  "<div class='pwdBtn'><a class='cancel remove'>取消</a><a class='sure' href='"+this.config.link_str+"'>忘记提现密码？</a></div>"
		}
	this.boundingBox.append(pwd);
}

//输入提现密码
TipBox.prototype.inputPwdRenderUI = function(){
	var inputPwd  = "<div class='tipTitle'>请输入提现密码</div>";
		inputPwd += "<div class='pwd-box'><input type='tel' maxlength='6' class='pwd-input' id='pwd-input'><div class='fake-box'><input type='password' readonly=''><input type='password' readonly=''><input type='password' readonly=''><input type='password' readonly=''><input type='password' readonly=''><input type='password' readonly=''></div></div>";
		inputPwd += "<a class='forgetPwd' href='javascript:wjPwd();'><span id='toWjPsd'>忘记密码？</span></a>";
		inputPwd += "<div class='pwdBtn'><a class='cancel remove'>取消</a><a href = '"+this.config.link_str+"'>确定</a></div>"
	this.boundingBox.append(inputPwd);
}

//传颜色
TipBox.prototype.cssRenderUI = function(){
	this.boundingBox.find(".icon").css({
		"borderColor":this.config.color,
		"color":this.config.color
	}).find("div div").css("backgroundColor",this.config.color);
	//this.boundingBox.find(".load .icon_box div div").css("backgroundColor",this.config.color);
};

//关闭
TipBox.prototype.close = function(){	
	this.destroy();
	this.config.setTime && typeof this.config.callBack === "function" && this.config.callBack();				
};

//销毁
TipBox.prototype.destroy = function(){
	this._mask && this._mask.remove();
	this.boundingBox && this.boundingBox.remove(); 
	this.boundingBox = null;
};

//清除事件
TipBox.prototype.clearHandle = function(){
	TipBox.prototype.handlers = [];  
};

//绑定事件
TipBox.prototype.handlers = [];  
TipBox.prototype.on = function(type,handler){	
	if (typeof this.handlers[type] === "undefined") {		
		TipBox.prototype.handlers[type] = [];
	}
	if (typeof handler === "function") {
		this.handlers[type].push(handler);		
	}    
	return this; 
};

//触发事件
TipBox.prototype.fire = function(type){	
	var arrayEvent = this.handlers[type];
	if (arrayEvent instanceof Array) { 
		for (var i=0; i < arrayEvent.length; i++) {
			if (typeof arrayEvent[i] === "function"){
				arrayEvent[i]({type: type}); 
				
				//执行后删除事件
				arrayEvent.splice(i,1); 
			}
		}
	}    
	return this; 
};




//tab-tip
function TabTip(cfg){
	this.config = { 
		obj            : null,
		width          : 150,    
		height         : 30, 
		mendLeft       : 0, 
		mendTop        : 0, 
		widthHeightAuto: false,
		str            : '正在处理',     
		windowDom      : window, 
		removeTime     : 2000, 
		callBack       : null,
		type           : 'success',
		sureHandler    : null,
		closeHandler   : null
	}
	$.extend(this.config,cfg);
	//初始化
	this.render(this.config.type);	
	return this; 
}
//渲染
TabTip.prototype.render = function(){	
	this.renderUI(); 
	
	//绑定事件
	//this.bindUI(); 
	
	//初始化UI
	this.syncUI(); 
	$(this.config.windowDom.document.body).append(TabTip.prototype.boundingBox);	
};
//渲染UI
TabTip.prototype.renderUI = function(){ 
	TabTip.prototype.boundingBox = $("<div id='tab-tip-box'></div>");  		
	this.createUI();	
	TabTip.prototype.boundingBox.appendTo(this.config.windowDom.document.body);	
	
	//定时消失
	_this = this;	
	this.config.removeTime && setTimeout( function(){ _this.close(); }, _this.config.removeTime );
};
//加载动画load UI
TabTip.prototype.createUI = function(){
	var html = "<div id='tab-tip'>";
		html +=		"<div class='icon-arrow'></div>";	
		html += 	"<div class='tip-txt'>"+this.config.str+"</div>";
		html += "</div>";
	TabTip.prototype.boundingBox.append(html);
};
TabTip.prototype.syncUI = function(){ 
	if(this.config.widthHeightAuto){
		this.config.height = TabTip.prototype.boundingBox.height();
		this.config.width =  TabTip.prototype.boundingBox.width();
	}	
	
	TabTip.prototype.boundingBox.css({
		//width       : this.config.width+'px',
		//height      : this.config.height+'px',		
		left        : (this.config.obj.offset().left + this.config.mendLeft)+'px',		
		top         : (this.config.obj.offset().top + this.config.mendTop)+'px'		
	});	
};
//关闭
TabTip.prototype.close = function(){	
	TabTip.prototype.destroy();
	this.destroy();
};

//销毁
TabTip.prototype.destroy = function(){
	TabTip.prototype.boundingBox && TabTip.prototype.boundingBox.remove(); 
	TabTip.prototype.boundingBox = null; 
};


var botTip = {
	cfg:{
		str:"这是提示信息哟!",
		setTime:0,
	},	
	init:function(cfg){
		$.extend(this.cfg,cfg);
		this.renderUI();
		this.bindUI();		
	},
	renderUI:function(){
		var html  = '<div id="bot-tip-box">';
			html += 	'<div class="bot-tip-txt">'+this.cfg.str+'</div>';
			html += 	'<div id="bot-tip-close"><i class="icon iconfont font-20"></i></div>';
			html += '</div>';
		$("#viewport").append(html);
	},
	bindUI:function(){
		_this = this;
		_this.cfg.setTime && setTimeout(function(){			
			$("#bot-tip-box").hide();
		},_this.cfg.setTime);
		
		$("#bot-tip-close").live('click',function(){
			$("#bot-tip-box").hide();
		});
	}	
}