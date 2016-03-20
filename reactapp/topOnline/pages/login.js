mui.plusReady(function() {
	mui.init();
	plus.navigator.closeSplashscreen();
	closeOtherWebview();//关闭其他的窗口
});

(function(){
	setTimeout(function(){
		l_login();
		// 效果
		e_chgbgcolorInputbox();
		e_toforgetPwdPage();
		e_loadLogo(); 
		
//	document.getElementById('phone').focus();
		//initLoginName();
	},350);
	// 逻辑
})();

/* **********判断逻辑********** */
function l_validateUsername() {
	var value = document.getElementById('phone').value;
	return v_loginName($.trim(value));
}

function l_validateUsernameBlank() {
	var value = document.getElementById('phone').value;
	return value == '';
}

function l_validatePassword() {
	var value = document.getElementById('password').value;
	return v_password(value);
}

function l_validatePasswordBlank() {
	var value = document.getElementById('password').value;
	return value == '';
}

function l_validateUserNameLength() {
	var value = document.getElementById('phone').value;
	return value.length == 11;
}
function l_login() {
	document.getElementById('btn-login').onclick = function() {
//		if (!l_validateUserNameLength()) {
//			mui.toast('请输入11位的手机号码！');
// 			return;
//		}
   		if (l_validateUsernameBlank()) {
   			mui.toast('请输入账号');
   			return;
   		}
   		if (!l_validateUsername()) {
   			mui.toast('账号长度为1到20位');
   			return;
   		}
   		
   		var value = document.getElementById('phone').value;
   		if (/^[0-9]+$/.test(value)) {
   			var length = value.length;
   			if (length < 11) {
   				mui.toast('请输入11位的手机号码！');
   				return;
   			}
   		}
   		
   		
   		if (l_validatePasswordBlank()) {
   			mui.toast('请输入密码');
   			return;
   		}
   		if (!l_validatePassword()) {
// 			mui.toast('密码是6到16位的大小写字母数字');
			mui.toast('用户名或密码错误');
   			return;
   		}
 		
 		s_login();
	}
	
	function s_login() {
		var phone = document.getElementById('phone').value;
		var password = document.getElementById('password').value;
		mui.log('进入login');
		mui.beeAjax('/manager/bossLogin/login.html', {
  			data:{
				phone: phone,
				password: password
			},
			dataType:'json',
			type:'post',
			success:function(serverdata){
//				console.log(JSON.stringify(serverdata));
				if (serverdata.state) {
					if (serverdata.data.bingphone) {
						e_login();
						setUserloginData(serverdata.data.userName,serverdata.data.pwdAse);
						setTimeout(function(){
							openIndex();
						},2000);
//						setTimeout(openIndex(),10000);
					} else {
						e_tobindPHonePage();
					}
				
					// 存储用户基本资料
					var userInfo = serverdata.data.userInfo;
					var cache = new CacheUser();
					cache.set(userInfo);
					
					// 初始化操作缓存
					cache = new Cache();
					cache.init();
				} else {
					mui.toast(serverdata.message);
				}
			},
			error:function(xhr,type,errorThrown){
				mui.toast('服务器连接失败！');
			}
  		});
	}
}
function openIndex() {
	var indexWebView = plus.webview.getWebviewById('index.html');
	if(indexWebView){
		indexWebView.reload(true);
	}else{
		mui.openWindowx({
			url: 'index.html',
			id: 'index.html',
			createNew:false,
			show: {
				aniShow: 'pop-in',
				autoShow:true,//页面loaded事件发生后自动显示，默认为true
				duration:200//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			},
			waiting: {
				autoShow: false
			}
		});
	}
	
}
/* **********页面效果********** */
// 输入框获取焦点和失去焦点颜色的转变
function e_chgbgcolorInputbox() {
	var nodes = document.getElementsByTagName('input');
	for (var i = 0, len = nodes.length; i < len; i++) {
		var node = nodes[i];
		node.onfocus = function() {
			onfocus(this);
		}
		node.onblur = function() {
			onblur(this);
		}
	}
	
//	document.getElementById('phone').oninput = function() {
//		if (!l_validateUserNameLength()) {
//			document.getElementById('password').value = '';
//		}
//	}
	
	function onfocus(obj) {
		obj.style.backgroundColor = '#ffffff';
	}
	
	function onblur(obj) {
		obj.style.backgroundColor = '#d1fbff';
	}
}
// 登录操作成功后执行
function e_login() {
	$("#userpassword").val("**********************");//重置消除用户密码
	$("#loginCont").fadeOut(400);
	setTimeout(function(){
		$(".login-logo").addClass("form-success");
		$(".login-Msg").addClass("msgUp").css("opacity","1");
	},400);
}

// 调转到忘记密码页面
function e_toforgetPwdPage() {
	document.getElementById('btn-forgotpwd').onclick = function() {
		mui.openWindowx({
			url: 'forgotPwdModule/forgotpwd_1.html', 
			id: 'forgotpwd_1.html',
			show: {
				autoShow: true
			},
			waiting: {
				autoShow: false
			}
		});
	}
}

function e_tobindPHonePage() {
	
	mui.openWindowx({
		url: 'safeCenterModule/bindingPhone_1.html', 
		id: 'bindingPhone_1.html',
		show: {
			autoShow: true
		},
		waiting: {
			autoShow: false
		}
	});
	
}

function e_loadLogo() {
	var cache = new CacheUser();
	var userInfo = cache.get();
	if (userInfo.logo) {
		document.getElementById('logo').src = userInfo.logo;
//	console.log(userInfo.logo);
//		$(".login-Imag").css("background","#fff url("+userInfo.logo+") center center no-repeat");
//		$("#phone").click();
	}
}

function closeOtherWebview(){
	var allWebView = plus.webview.all();
	var lunchwebview = plus.webview.getLaunchWebview();
	var loginwebview = plus.webview.currentWebview();
	//alert(lunchwebview.id);
	for (var i=0;i<allWebView.length;i++) {
		if(allWebView[i].id!=lunchwebview.id && allWebView[i].id!=loginwebview.id ){
			allWebView[i].close();
		}
	}
}
function initLoginName(){
	var cache = new CacheUser();
	var userInfo = cache.get();
	alert(JSON.stringify(userInfo));
	if(userInfo.length>0){
		var userName = userInfo.loginName;
		if(userName){
			jQuery('phone').val(userName);
		}
	}
}
var first = null;
mui.back = function() {
	//首次按键，提示‘再按一次退出应用’
	if (!first) {
		first = new Date().getTime();
		mui.toast('再按一次退出应用');
		setTimeout(function() {
			first = null;
		}, 1000);
	} else {
		if (new Date().getTime() - first < 1000) {
			plus.runtime.quit();
		}
	}
};
