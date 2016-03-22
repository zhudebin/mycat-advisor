var prefixUrl = 'http://120.55.192.204:8081'; //http://120.55.192.204:8081
mui.beeAjax = function(url, option) {
		var prefix = option.profixUrl;
		if (prefix == 'cloudPrefixUrl') {
			prefix = cloudPrefixUrl;
		} else if (prefix == 'beePrefixUrl') {
			prefix = beePrefixUrl;
		} else {
			prefix = prefixUrl;
		}
		callurl(prefix + url, option);
}

function callurl(url, option) {
	var successBack = option.success;
	option.success = proxySuccess;
	mui.plusReady(function(){
		postData(url,option.data,option.success,option.error,option.timeout);
	});
	function proxySuccess(data) {
//		console.log("------------------->"+JSON.stringify(data));
		if (data && data.no_rights != null && (data.no_rights == 'true' || data.no_rights == true)) {
			mui.toast('权限不足，请与管理员联系！');
		} else if (data && data.no_login != null && (data.no_login == 'true' || data.no_login == true)) {
			auto_login(url, option);
		} else if(data && data.sessionid != null){
			localStorage.sessionid = data.sessionid;
			callurl(url, option);
		}
		else {
			successBack(data);
		}
	}
}

function postData(url, data, callback, errorback,timeout) {
	var urlPath =url;
	data = data||{};
	var xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = xhrStatechange;
	if(timeout){
		xhr.timeout=timeout;
	}else{
		xhr.timeout=10000;
	}
	var userName = plus.storage.getItem("bingbeeuserName");
	var pwdAse = plus.storage.getItem("bingbeepwdAse");
	if (userName != null && userName != '' && pwdAse!=null && pwdAse!='') {
		data.again_userName=userName;
		data.again_pwdAse=pwdAse;
	}
	if(localStorage.sessionid!=null)
	{
		data.sessionid=localStorage.sessionid;
	}
	urlPath=urlPath+"?f="+Math.random();
	for(var key in data)
	{
		urlPath=urlPath+"&"+key+"="+data[key];
	}
	xhr.open("POST", urlPath);
	xhr.send();
	function xhrStatechange() {
		mui.log(urlPath);
		mui.log(xhr.readyState+"--->"+xhr.status+"---->"+xhr.responseText);
		if (xhr.readyState == 4 ) {
			if(xhr.status == 200){
				var dataRes = JSON.parse(xhr.responseText);
				callback(dataRes);
			}else{
				errorback(xhr, xhr.readyState,xhr.status);
			}
		} else {
		}
	}
}


function auto_login(url, option) {
	var userName = plus.storage.getItem("bingbeeuserName");
	var pwdAse = plus.storage.getItem("bingbeepwdAse");
	if (userName != null && userName != '') {
		mui.beeAjax('/manager/bossLogin/auto_login.html', {
			data: {
				userName: userName,
				pwdAse: pwdAse
			},
			dataType: 'json',
			type: 'post',
			timeout: 5000,
			success: function(data) {
					if(data.state==true || data.state=="true")
					{
						if(option.callNum==null)
						{
							option.callNum=0;
						}
						option.callNum=option.callNum+1;
						if(option.callNum<3)
						{
							mui.log('自动登陆后跳转原请求');
							callurl(url, option);
						}
					}
				},
			error: function(xhr, type, errorThrown) {}
		});
	}
}

// 关闭自身窗口
function closeme() {
	mui.plusReady(function() {
		plus.webview.currentWebview().close();
	});
}

function backIndexPage() {
	mui.openWindow({
		url: '../index.html',
		id: 'index.html',
		waiting: {
			autoShow: false
		}
	});
}

function showme() {
	plus.webview.currentWebview().show();
}

function closeOtherlevel1Webview(id) {
	var allWebView = plus.webview.all();
	for (var i = 0; i < allWebView.length; i++) {
		if ((id.indexOf('_level1') > -1) && (allWebView[i].id.indexOf('_level1') > -1) && (allWebView[i].id != id)) {
			mui.closeAll(allWebView[i], 'none');
		}
	}
}
var executeFlag = true,
	pretime = null,
	timelimite = 1500;
var waitingstyle = {
				autoShow: true,
//				width:"80%",
//				height:"80%",
				options: {
//					loading:{icon:'/images/loading2.gif'}
				}
			};
mui.openWindowx = function(params) {
//	mui.log('进入openWindowx');
	var nowTime = new Date();
	if (!pretime || (((nowTime.getTime() - 0) - (pretime.getTime() - 0)) > timelimite)) {
		pretime = nowTime;
		var id = params.id;
		if(id == 'index.html' ||id == 'login.html' ){
			waitingstyle.autoShow=false;
		}
		var waiting = params.waiting;
		params.waiting = waitingstyle; 
		if (id) {
			var webview = plus.webview.getWebviewById(id);
//			mui.log("进入openwebviewx："+id);
			if (webview) {
//					mui.log("进入openwebviewx++++++++show："+id);
				if (id == 'index.html') {
					webview.show();
				}  else {
					//				mui.closeAll(webview,'none');
//					console.log("进入openwebviewx++++++++reload："+id);
//					plus.webview.close(webview,'none');
//					webview.close('none');
						webview.loadURL(params.url);
					setTimeout(function() {
//						console.log("延时进入openwebviewx++++++++reload："+id);
						webview.show();
					}, 350);
					/*setTimeout(function() {
						console.log("延时进入openwebviewx++++++++openWindow："+id);
						mui.openWindow(params);
					}, 300);*/
				}
				//			alert(1111);
//							webview.reload(true);
			} else {
				//			alert(22222);
//				mui.log("进入openwebviewx++++++++openWindow："+id)
				mui.openWindow(params);
			}
			setTimeout(function() {
				//mui.log("进入openwebviewx++++++++closeOtherlevel1Webview："+id)
				closeOtherlevel1Webview(id)
			}, 1000);
		}
	}
}
/**
 *公用log方法 
 * @param {Object} msg
 */
mui.log=function(msg){
//	console.log(msg);
}
