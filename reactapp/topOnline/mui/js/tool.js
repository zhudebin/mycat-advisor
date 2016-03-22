/**
 * 功能：
 * 1. 启动
 * 2. 停止
 * 3. 重置
 * 4. 获得计时器状态（启动/停止）
 * 
 * 
 * @param selector 选择器，据此操作dom设置计时效果
 * @param content 计时中dom元素展示的文字说明，使用{{second}}标识当前倒计时位置
 * @param second 设置倒计时开始秒数，
 */
function Timer(config) {
	var selector = config.selector;
	var content = config.content;
	var callback = config.callback || function(){};
	var second = config.second || 60;
	
	var timerInfo = {
		defaultSecond: 60,
		status: false,		// 启动为true，停止为false
		domBaseInfo: $(selector).html() || $(selector).val(),
		domBaseClass: $(selector).attr("class"),
		decrementor: null
	}
	
	var timer = clone();
	timer.second = second || timer.defaultSecond;

	function clone() {
		return Object.create(timerInfo);
	}
	
	// 设置dom元素当前展示内容
	function setContent() {
		var info = content;
		info = info.replace("{{second}}",timer.second);
		$(selector).html(info);
		$(selector).val(info);
		setUseable(false);
	}
	
	function setUseable(flag) {
		if (flag) {
			$(selector).removeAttr("disabled");
		} else {
			$(selector).attr("disabled","disabled");
		}
	}
	function _run() {
		setContent();
		timer.status = true;
		timer.decrementor = setInterval(function() {
			timer.second -= 1;
			setContent();
			if (timer.second <= 0) {
				_stop();
				callback();
			}
		}, 1000);
	}
	
	function _stop() {
		clearInterval(timer.decrementor);
		backInfo();
		timer.status = false;
		setUseable(true);
	}
	
	function backInfo() {
		$(selector).attr("class", timer.domBaseClass);
		$(selector).html(timer.domBaseInfo);
		$(selector).val(timer.domBaseInfo);
	}
	
	// 对外接口
	this.run = function() {
		_run();
	}
	
	this.stop = function() {
		_stop();
	}
	
	this.reset = function() {
		_stop();
		timer = clone();
	}
	
	this.getStatus = function() {
		return timer.status;
	}
}

function validator(target, pattern) {
	var reg = new RegExp(pattern,"g");
	return reg.test(target);
}

function setUseable(selector,className1,className2,flag) {
	var e = $(selector);
	if (flag) {
		e.addClass(className2);
		e.removeClass(className1);
		e.removeAttr("disabled");
	} else {
		e.addClass(className1);
		e.removeClass(className2);
		e.attr("disabled","disabled");
	}
}

/**
 * 取值范围：	selector包含的元素。
 * 作用：获取含有属性为data-key的元素的值（value值或者html值）
 * 返回：数据对象，key即data-key的值，value即元素的值
 * 
 * 注意：
 * 	1. 在同一个选择器查下面不能有同名的data-key标记，原因是后者会覆盖前者的值
 * 	2. 如果获取的html值，那么此值最好是纯文本（无标签）
 * 	3. 如果选择器下属的元素一个也没有data-key标记，那么返回一个空值对象（即{}）
 * 
 * 依赖：函数依赖于jQuery，逾此，方法功能全盘失效
 * 
 * 作者：cy
 * 日期：2015年10月23日
 * 版本: 1.0.0
 * @param selector	
 */
function valuesDataKey(selector) {
	return valuesAttrName(selector,"data-key");
}

function valuesAttrName(selector, attrName) {
	var o = {};
	function callBack() {
		var key = $(this).attr(attrName);
		var value = $(this).val() || $(this).html();
		o[key] = value;
	}
	objectsAttrName(selector, attrName, callBack);
	return o;
}

function objectsAttrName(selector, attrName, callBack) {
	selector += " *["+attrName+"]";
	$(selector).each(callBack);
}

function serialize2object(serialize) {
	var obj = {};
	var x = serialize.split('&');
	for (var i = 0, len = x.length; i < len; i++) {
		var y = x[i].split('=');
		var key = y[0];
		var value = y[1];
		obj[key] = value;
	}
	return obj;
}


/**
 * 获得字符的大小
 * 返回字节数
 * @param {Object} str
 */
function getCharSize(str){
	var char = str.replace(/[^\x00-\xff]/g, '**');
	return char.length;
}
