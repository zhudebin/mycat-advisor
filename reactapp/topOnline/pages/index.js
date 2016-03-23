mui.init();
var cacheForever = new CacheForever();
var cacheUser = new CacheUser();
var cacheSession = new CacheSession();
var userInfo = cacheUser.get();
var MARK_MENU = 'MARK_MENU';
var MARK_SETTING_NEWS = "MARK_SETTING_NEWS";
var MARK_SETTING_SMS = "MARK_SETTING_SMS";
var HAS_MERCHANT_INFO = 'HASMERCHANTINFO';//hasMerchantInfo
var INIT_MENU = 'INIT_MENU';
var mark_refresh = null;
var first = null;
var tag = true;
var firstTag = true;

mui.plusReady(function() {
	//关闭 splash 画面
	plus.navigator.closeSplashscreen();
});
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
setTimeout(function(){
//	setInterval(e_msgScroll, 5000);
	initTags();
	e_initLink();
	l_initData();
	clearInterval(mark_refresh);
	mark_refresh = setInterval(refreshData, 10000); 
	setInterval(e_msgScroll, 5000);
	mui('.mui-scroll-wrapper').scroll();
},350);
function initTags(){
	var menu = cacheForever.get(MARK_MENU);
	var init_menu = cacheForever.get(INIT_MENU);
//	console.log(JSON.stringify(menu));
	if (menu) {
			fill_menuData(menu);
	}else if(init_menu){
		fill_menuData(init_menu);
	}else{
		init_menu = [
					    {
					        "menuIcon": "icon-xitongshezhi",
					        "menuSeq": 26,
					        "menuUrl": "./systemSetModule/systemMyIndex.html",
					        "menuParent": 0,
					        "menuLevel": 1,
					        "menuName": "系统设置",
					        "sortNum": 9,
					        "check": false,
					        "childrenMenu": [
					            {
					                "menuSeq": 55,
					                "menuParent": 26,
					                "menuLevel": 3,
					                "menuName": "消息通知设置",
					                "sortNum": 1,
					                "check": false,
					                "menu": {
					                    "menuIcon": "icon-xitongshezhi",
					                    "menuSeq": 26,
					                    "menuUrl": "./systemSetModule/systemMyIndex.html",
					                    "menuParent": 0,
					                    "menuLevel": 1,
					                    "menuName": "系统设置",
					                    "sortNum": 9,
					                    "check": false
					                }
					            },
					            {
					                "menuSeq": 57,
					                "menuParent": 26,
					                "menuLevel": 3,
					                "menuName": "意见反馈",
					                "sortNum": 1,
					                "check": false,
					                "menu": {
					                    "menuIcon": "icon-xitongshezhi",
					                    "menuSeq": 26,
					                    "menuUrl": "./systemSetModule/systemMyIndex.html",
					                    "menuParent": 0,
					                    "menuLevel": 1,
					                    "menuName": "系统设置",
					                    "sortNum": 9,
					                    "check": false
					                }
					            },
					            {
					                "menuSeq": 59,
					                "menuParent": 26,
					                "menuLevel": 3,
					                "menuName": "退出当前账号",
					                "sortNum": 1,
					                "check": false,
					                "menu": {
					                    "menuIcon": "icon-xitongshezhi",
					                    "menuSeq": 26,
					                    "menuUrl": "./systemSetModule/systemMyIndex.html",
					                    "menuParent": 0,
					                    "menuLevel": 1,
					                    "menuName": "系统设置",
					                    "sortNum": 9,
					                    "check": false
					                }
					            },
					            {
					                "menuSeq": 58,
					                "menuParent": 26,
					                "menuLevel": 3,
					                "menuName": "清除缓存",
					                "sortNum": 1,
					                "check": false,
					                "menu": {
					                    "menuIcon": "icon-xitongshezhi",
					                    "menuSeq": 26,
					                    "menuUrl": "./systemSetModule/systemMyIndex.html",
					                    "menuParent": 0,
					                    "menuLevel": 1,
					                    "menuName": "系统设置",
					                    "sortNum": 9,
					                    "check": false
					                }
					            },
					            {
					                "menuSeq": 56,
					                "menuParent": 26,
					                "menuLevel": 3,
					                "menuName": "关于群峰",
					                "sortNum": 1,
					                "check": false,
					                "menu": {
					                    "menuIcon": "icon-xitongshezhi",
					                    "menuSeq": 26,
					                    "menuUrl": "./systemSetModule/systemMyIndex.html",
					                    "menuParent": 0,
					                    "menuLevel": 1,
					                    "menuName": "系统设置",
					                    "sortNum": 9,
					                    "check": false
					                }
					            }
					        ]
					    }
					];
		fill_menuData(init_menu);
	}
//	fill_menuData(menu);
}
function e_initLink() {
	$("#link-userinfo").on('tap', function() {
		mui.openWindowx({
			url: 'userInfoModule/managerInfoList.html',
			id: 'managerInfoList.html_level1',
			show: {
				autoShow: true
			},
			waiting: {
				autoShow: false,
				title: '正在加载...', //等待对话框上显示的提示内容
				options: {
					color: '#fff',
					background: '#38C5D4'
				}
			}
		});
	});
	$("#header").on('tap', '#link-order', function() {
		mui.openWindowx({
			url: 'orderModule/orderIndex.html',
			id: 'orderIndex.html_level1',
			show: {
				aniShow: false
			},
			waiting: {
				autoShow: false,
				title: '正在加载...', //等待对话框上显示的提示内容
				options: {
					color: '#fff',
					background: '#38C5D4'
				}
			}
		});
	});

}
function set_init_menu(s_menu){
	var init_menu=[];
	if(s_menu){
		for(var i=0,j=s_menu.length;i<j;i++){
			if(s_menu[i].menuName.indexOf("系统设置")>-1){
				init_menu.push(s_menu[i]);
			}
		}
	}
	if(init_menu.length>0){
		cacheForever.set(INIT_MENU, init_menu);
	}
}
function l_initData() {
	mui.beeAjax('/manager/merchantInfo/index.html', {
			data: {
				meneParent: 0,
				menuLevel: 1
			},
			dataType: 'json',
			type: 'post',
			timeout: 4000,
			success: function(data) {
//								console.log(JSON.stringify(data));
				if(data){
//					console.log("1212121" + JSON.stringify(data));
					var s_menu = data.rightMenu;
					set_init_menu(s_menu); 
					fill_menuData(s_menu);
					cacheForever.set(MARK_MENU, s_menu);
					/*if (s_menu) {
						var menu = cacheForever.get(MARK_MENU); 
						if (menu) {
							fill_menuData(menu);
						} else {
							fill_menuData(s_menu);
							cacheForever.set(MARK_MENU, s_menu);
						}
					}*/
					refresh_xiaoxizhongxin(data);
					fill_tradeData(data);
					fill_messageQueue(data.messageQueue);
	
					settingInfo(data);
				}else{
					l_initData();
				}
			},
			error: function(xhr, type, errorThrown) {
				//			mui.toast('服务器连接失败！');
				l_initData();
			},
			complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
				　　　　
				if (status == 'timeout') { //超时,status还有success,error等值的情况
					l_initData();

					　　　　
				}
			}});

		// 初始化菜单列表
		/*var menu = cacheForever.get(MARK_MENU); 
		if (menu) {
			fill_menuData(menu);
		} */

	

		// 初始化用户基础信息
		$("#name-merchant").html(userInfo.merchantName);
//		//	$("#logo-merchant").html(userInfo.logo);
//		$("#link-userinfo").html('').append("<span class='logo_img'></span>");
//		
////		$(".logo_img").css("backgroundImage","url('')");
//		$(".logo_img").css("backgroundImage","url("+userInfo.logo+")");
//		$("#link-userinfo").click();
////		alert("#fff url("+userInfo.logo+") center center no-repeat");
		document.getElementById('logo-merchant').src = userInfo.logo;
	}

	function fill_menuData(menu) {
		if(menu){
			tp.bind({
				template: 'tp-menu',
				element: 'list-menu',
				model: menu
			});
	
			// 绑定调转的页面
			$("#list-menu a").each(function() {
				var url = $(this).attr('data-url');
	
				var id = '';
				var x = url.lastIndexOf('/');
				if (x > 0) {
					id = url.substring(x + 1);
				} else {
					id = url;
				}
				id=id+'_level1';
				var menuId = $(this).attr('data-menuid'); //传递菜单ID，方便生成子菜单
				$(this).on('tap', function() {
					mui.openWindowx({
						url: url,
						id: id,
						createNew: false,
						extras: {
							menuId: menuId
						},
						show: {
							aniShow: 'none',
							autoShow: true, //页面loaded事件发生后自动显示，默认为true
						},
						waiting: {
							autoShow: false,
							title: '正在加载...', //等待对话框上显示的提示内容
							options: {
								//				    	width: '50px',//等待框背景区域宽度，默认根据内容自动计算合适宽度
								//				        height: '50px',//等待框背景区域高度，默认根据内容自动计算合适高度
								color: '#fff',
								background: '#38C5D4'
									//						background: '../images/login-back.png'
							}
						}
					});
	
				});
			});
		}
	}

	function refresh_xiaoxizhongxin(data) {
		var t = $('#icon-qunfengxiaoxizhongxin');
		if (t.length > 0 && data.readNum == 0) {
			t.html("");
		} else if (t.length > 0) {
			t.html("");
			t.append("<span class='mui-badge' ></span>");
		}
	}

	function fill_tradeData(data) {
		if (data.tradeProfitTotal) {
			data.tradeProfitTotal = Number(data.tradeProfitTotal).toFixed(2);
			$("#price-today").html(data.tradeProfitTotal);
		}
		if (data.tradeTotal) {
			data.tradeTotal = Number(data.tradeTotal).toFixed(2);
			$("#price-total").html(data.tradeTotal);
		}
		if (data.tradeCountTotal) {
			data.tradeCountTotal = Number(data.tradeCountTotal).toFixed(0);
			$("#count-totaltrade").html(data.tradeCountTotal);
		}
	}

	function fill_messageQueue(queue) {
		//	console.log('queue: '+queue);
		if (!queue || queue.length == 0) {
			
		}else{
			var len = queue.length;
			if (len > 0) {
				var str = '';
				for (var i = 0; i < len; i++) {
					var msg = queue[i];
					str += '<div class="d_box">' + msg.message + '</div>';
				}
				var obj = $('#list-message');
				obj.append(str);
			}
		}
//		e_msgScroll();
	}

	function e_msgScroll() {
		var obj = $('#list-message');
		var className = 'display_none';
		var t = $('#list-message').find('div');
		if (t.length > 0) {
			if (obj.parent().hasClass(className)) {
				obj.parent().removeClass(className);
//				var data = new Date();
//				console.log(data.getTime());
			}
			var height = $("#list-message div:eq(0)").height();
			//if(firstTag){
			firstTag=false;	
//			data = new Date();
//			console.log(data.getTime());
			setTimeout(function(){
				$("#list-message div:eq(0)").animate({
					"marginTop": "-=" + height + "px"
				},500, function() {
//				data = new Date();
//				console.log(data.getTime());
					$(this).remove();
					var t = $('#list-message').find('div');
					if (t.length == 0) {
						$('#list-message').parent().addClass("display_none");
						firstTag=true;
					}
				});				
			}, 2500);
		}
	}

	//缓存boss系统设置参数
	function settingInfo(data) {
		cacheSession.set(HAS_MERCHANT_INFO, data.hasMerchantInfo);
		if(data.bossUserSetting && data.bossUserSetting.newsSetting){
			cacheSession.set(MARK_SETTING_NEWS, data.bossUserSetting.newsSetting);
		}
		if(data.bossUserSetting && data.bossUserSetting.smsSetting){
			cacheSession.set(MARK_SETTING_SMS, data.bossUserSetting.smsSetting);
		}
	}


	//更新数据
	function refreshData() {
		mui.beeAjax('/manager/merchantInfo/refreshData.html', {
			data: {},
			dataType: 'json',
			type: 'post',
			timeout: 4000,
			success: function(data) {
				if(data){
//					console.log(JSON.stringify(data));
					fill_tradeData(data);
					refresh_xiaoxizhongxin(data);
					fill_messageQueue(data.messageQueue);
				}
			},
			error: function(xhr, type, errorThrown) {
				//mui.toast('服务器连接失败！');
			}
		});
	};

	//define(function(require, exports, module) {
	//
	//	var utils = require('../libs/utils');
	//	var tp = require('../libs/tp');
	//	var pageHepler = require('../common/page-helper');
	//	var storageHepler = require('../common/boss_storage_helper');
	//	var self = exports;
	//	
	//	var cacheSession = new CacheSession();
	//
	//
	//	mui.init();
	//
	//	  
	//	//订单实时显示
	//	var user_lucky_liH = $("#list-message div:eq(0)").height();
	//	setInterval(function() {
	//		//  	 var kk =$("#list-message div:eq(0) p").attr("kk");
	//		//  	 console.log("000-->"+kk);
	//		//  	 $("#list-message div:eq(0) p").attr("kk","5");
	//		//  	 console.log("-->"+kk);
	//		/*var t = $('#list-message').find('div');
	//		console.log(t.find("p").html());
	//		console.log(t.find("p").attr("kk", "123"))*/
	//		$("#list-message div:eq(0)").animate({
	//			"marginTop": "-=" + user_lucky_liH + "px"
	//		}, function() {
	//			//$(this).find('p').attr('num', '44');
	//			$(this).remove();
	//			var t = $('#list-message').find('div');
	//			if(t.length==0)
	//			{
	//				$('#divparent').addClass("display_none");
	//			}
	//			// $(this).insertAfter("#list-message div:last-child");
	//			// $(this).css("marginTop",0);
	//
	//
	//			//var hh = "<div class=\"d_box\"><p class=\"d_flex\" num='1' kk='1'>手机尾号 <span>" + Math.random() + "</span>客户，已付款 <sapn>500</sapn> 元    </p> <b>14:25:15</b></div>";
	//			//$('#list-message').append(hh);
	//
	//		});
	//	}, 3000);
	//	
	//	var aniShow = "pop-in";
	//	if (mui.os.android) {
	//		var list = document.querySelectorAll('.ios-only');
	//		if (list) {
	//			for (var i = 0; i < list.length; i++) {
	//				list[i].style.display = 'none';
	//			}
	//		}
	//		//Android平台暂时使用slide-in-right动画
	//		if (parseFloat(mui.os.version) < 4.4) {
	//			aniShow = "slide-in-right";
	//		}
	//	}
	//
	//	
	//	mui('.mui-scroll-wrapper').scroll();
	//	mui('body').on('shown', '.mui-popover', function(e) {
	//		//console.log('shown', e.detail.id);//detail为当前popover元素
	//	});
	//	mui('body').on('hidden', '.mui-popover', function(e) {
	//		//console.log('hidden', e.detail.id);//detail为当前popover元素
	//	});
	//	self.tradeCountTotal=0;//买单量
	//	self.tradeTotal=0;//交易额
	//	self.tradeProfitTotal=0;//收益额
	//	var cache = new CacheUser();
	//	var userInfo = cache.get();
	//	self.merchantName=userInfo.merchantName;//商家名字
	//	self.merchantLogo=userInfo.logo//商家logo
	//	
	//	
	//	var putData = function(data) {
	//		
	//		//绑定模版
	//		if(data.rightMenu!=null)
	//		{
	//			tp.bind({
	//				template: 'list-template',
	//				element: 'menu-list',
	//				model: data.rightMenu
	//			});
	//		}
	//		if(data.tradeCountTotal!=null)
	//		{
	//			self.tradeCountTotal=data.tradeCountTotal;
	//		}
	//		if(data.tradeTotal!=null)
	//		{
	//			self.tradeTotal=data.tradeTotal;
	//		}
	//		if(data.tradeProfitTotal!=null)
	//		{
	//			self.tradeProfitTotal=data.tradeProfitTotal;
	//		}
	//		if(data.messageQueue!=null && data.messageQueue!='[]')
	//		{
	//			var objArray=JSON.parse(data.messageQueue);
	//			var  len=objArray.length;
	//			for(var i=0;i<len;i++)
	//			{
	//				var mes=objArray[i];
	//				var hh = "<div class=\"d_box\">" + mes.message + "</div>";
	//				//console.log(hh);
	//				$('#list-message').append(hh);
	//			}
	//			var t = $('#list-message').find('div');
	//			if(t.length>0)
	//			{
	//				$('#divparent').removeClass("display_none");
	//			}
	//		}
	//		var t = $('#icon-qunfengxiaoxizhongxin');
	//		if(data.readNum==0)
	//		{
	//			t.html("");
	//		}else{
	//			t.html("");
	//			t.append("<span class='mui-badge' ></span>");
	//		}
	//	}
	//
	//	//初始数据
	//	var findIndexData = function() {
	//		mui.beeAjax('/manager/merchantInfo/index.html', {
	//			data: {
	//				meneParent: 0,
	//				menuLevel: 1
	//			},
	//			dataType: 'json',
	//			type: 'post',
	//			timeout: 3000,
	//			success: function(serverdata) {
	//				cacheSession.set(MARK_MENU, serverdata);
	//				putData(serverdata);
	//				settingInfo(serverdata);
	//				setInterval(refrshData,6000);
	//			},
	//			error: function(xhr, type, errorThrown) {
	//				mui.toast('服务器连接失败！');
	//			}
	//		});
	//		var menuInfo = cacheSession.get(MARK_MENU);
	//		if (menuInfo) {
	//			putData(menuInfo);
	//		}
	//	};
	//	
	//	
	//	
	//	
	//	
	//	mui.plusReady(function() {
	//		mui.oldBack = mui.back;
	//		var backButtonPress = 0;
	//		mui.back = function() {
	//			backButtonPress++;
	//			if (backButtonPress > 1) {
	//				plus.runtime.quit();
	//			} else {
	//				plus.nativeUI.toast('再按一次退出应用', {
	//					duration: 'short'
	//				});
	//			}
	//			setTimeout(function() {
	//				backButtonPress = 0;
	//			}, 1000);
	//			return false;
	//		};

	//		//获得菜单权限
	//		findIndexData();
	////		//初始化模板
	////		initTemplates();
	////		//头部绑定tap事件
	////		bandTap('header');
	////		//菜单绑定tap事件
	////		bandTap('menu-list');
	//	});
	//	//初始化页面辅助模块
	//	pageHepler.init({
	//		handler: self,
	//		mvvm: true
	//	});
	//
	//})