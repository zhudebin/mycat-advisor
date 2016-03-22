define(function(require, exports, module) {
	mui.init();
mui.plusReady(function() {
	setTimeout(function(){
		deleteSearchParam();
		checkUpdate();
	},350);
});
var cacheForever = new CacheForever();
var MARK_MENU = 'VERSION';
var versioninfo = cacheForever.get(MARK_MENU)==null?{}:cacheForever.get(MARK_MENU); //
//alert(versioninfo);
var w=null;
function main_auto_login() {
	mui.log('进入自动登陆---->');
	var userName=plus.storage.getItem("bingbeeuserName");
	var pwdAse=plus.storage.getItem("bingbeepwdAse");
//	console.log(userName+":   "+pwdAse);
	if (userName != null && userName != '') {
		mui.beeAjax('/manager/bossLogin/auto_login.html', {
			data: {
				userName: userName,
				pwdAse: pwdAse
			},
			timeout: 4000,
			success: function(data) {
				mui.log('进入自动登陆成功回掉---->'+JSON.stringify(data));
				if (data.state!=null && (data.state == true || data.state == 'true')) {
					main_openIndex();
				} else {
					openLogin();
				}
			},
			error: function(xhr, type, errorThrown) {
				//mui.toast('服务器连接失败！');
				openLogin();
			}
		});
	} else {
		openLogin();
	}
}

// 检测更新

function checkUpdate(){
	mui.log('进入检查更新---->');
	w = plus.nativeUI.showWaiting("正在检查是否有更新...", {
			back: 'none'
		});
	var bingbeeid=versioninfo.bingbeeid;
//	plus.storage.getItem("bingbeeid");
	if(bingbeeid==null || bingbeeid=="null" || bingbeeid=="")
	{
		bingbeeid="id0";
	}
	var versionid=versioninfo.bingbeeid_new;
//	plus.storage.getItem("bingbeeid_new");
	//mui.toast("bingbeeid-->"+bingbeeid+"----222-->"+versionid);
	var versionid=bingbeeid.replace("id","");
	mui.beeAjax('/manager/bossLogin/check_version.html', {
			data: {
				version: versionid
			},
			dataType: 'json',
			type: 'post',
			timeout: 4000,
			success: function(data) {
				mui.log('进入检查更新成功回掉---->');
				closeWaitingx(w);
				if (data.state == true || data.state == 'true') {
					showConfirm(data);
//					auto_login();
				} else{
					//mui.toast('最新版本！');
					main_auto_login();
				}
			},
			error: function(xhr, type, errorThrown) {
				closeWaitingx(w);
				mui.log('进入检查更新失败回掉---->')
				//mui.toast('服务器连接失败！');
				main_auto_login();
			}
		});
}

function downWgt(wgtUrl){
	w = plus.nativeUI.showWaiting("下载最新版本文件...", {
			back: 'none'
		});
	plus.downloader.createDownload( wgtUrl, {filename:"_doc/update/"}, function(d,status){
		closeWaitingx(w);
		if ( status == 200 ) { 
//			console.log("下载wgt成功："+d.filename);
			var versionid=versioninfo.bingbeeid_new;
//			plus.storage.getItem("bingbeeid_new");
			versioninfo.bingbeeid_old=versioninfo.bingbeeid;
			versioninfo.bingbeeid=versionid;
			//plus.storage.setItem("bingbeeid_old",plus.storage.getItem("bingbeeid"));
//			plus.storage.removeItem("bingbeeid");
//			plus.storage.setItem("bingbeeid",versionid);
			cacheForever.set(MARK_MENU, versioninfo);
			setTimeout(function(){
				installWgt(d.filename);	// 安装wgt包
			},1000);
		} else {
//			console.log("下载wgt失败！");
			plus.nativeUI.alert("下载wgt失败！");
			main_auto_login();
		}
	}).start();
}
// 更新应用资源
function installWgt(path){
	w=plus.nativeUI.showWaiting("安装最新版本文件...", {
			back: 'none'
		});
	plus.runtime.install(path,{force: true},function(){
		closeWaitingx(w);
//		console.log("安装wgt文件成功！");
		var versionid=versioninfo.bingbeeid_new;
//		plus.storage.getItem("bingbeeid_new");
		//mui.toast("------000>>>"+versionid+"----->33-->"+plus.storage.getItem("bingbeeid"));
		plus.nativeUI.alert("应用资源更新完成！",function(){
			plus.runtime.restart();
		});
	},function(e){
		closeWaitingx(w);
//		console.log("安装wgt文件失败["+e.code+"]："+e.message);
		plus.nativeUI.alert("安装wgt文件失败["+e.code+"]："+e.message);
		plus.storage.setItem("bingbeeid",plus.storage.getItem("bingbeeid_old"));
		main_auto_login();
	});
}



function openLogin() {
	mui.openWindowx({
		url: 'login.html',
		id: 'login.html',
		waiting:{
      		autoShow:false,//自动显示等待框，默认为true
    	}
	});
}

function main_openIndex() {
//	console.log('进入openindex');
	mui.openWindowx({
		url: 'index.html',
		id: 'index.html',
		waiting:{
      		autoShow:false,//自动显示等待框，默认为true
    	}
	});
}
/**
 * 清除缓存的查询数据
 */
function deleteSearchParam(){
	var cache = new CacheParam();
	key="userDataSearchParam";
	cache.getAndRemove(key);//删除原来的
}
function closeWaitingx(w){
	if(w){
		w.close();
	}
//	plus.nativeUI.closeWaiting();
}
function showConfirm(data){
	var bts=["确认","取消"];
	plus.nativeUI.confirm("是否立即更新？",function(e){
		var i=e.index;
		if(i==0){
			versioninfo.bingbeeid_new='id'+data.data.version;
//			plus.storage.setItem("bingbeeid_new",'id'+data.data.version);
			cacheForever.set(MARK_MENU, versioninfo);
			downWgt(data.data.url);	
		}else{
			main_auto_login();
		}
	},"检查到应用有更新",bts);
}
})