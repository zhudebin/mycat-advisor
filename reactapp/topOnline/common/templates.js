var aniShow = "pop-in";
var templates = {};
var getTemplate = function(name, header, content) {
	var template = templates[name];
	if (!template) {
		//预加载共用父模板；
		var headerWebview = mui.preload({
			url: header,
			id: name + "-main",
			styles: {
				popGesture: "hide",
			},
			extras: {
				mType: 'main'
			}
		});
		//预加载共用子webview
		var subWebview = mui.preload({
			url: !content ? "" : content,
			id: name + "-sub",
			styles: {
				top: '45px',
				bottom: '0px',
			},
			extras: {
				mType: 'sub'
			}
		});
		subWebview.addEventListener('loaded', function() {
			setTimeout(function() {
				subWebview.show();
			}, 50);
		});
		subWebview.hide();
		headerWebview.append(subWebview);
		//iOS平台支持侧滑关闭，父窗体侧滑隐藏后，同时需要隐藏子窗体；
		if (mui.os.ios) { //5+父窗体隐藏，子窗体还可以看到？不符合逻辑吧？
			headerWebview.addEventListener('hide', function() {
				subWebview.hide("none");
			});
		}
		templates[name] = template = {
			name: name,
			header: headerWebview,
			content: subWebview,
		};
	}
	return template;
};
function initTemplates() {
	getTemplate('default', 'templates/page_template.html');
};

//主列表点击事件
function bandTap(name){
	mui('#'+name).on('tap', 'a', function() {
		var id = this.getAttribute('href');
		var href = this.href;
		var type = this.getAttribute("open-type");
		//不使用父子模板方案的页面
		if (type == "common") {
			var webview_style = {
				popGesture: "close"
			};
			mui.openWindow({
				id: id,
				url: this.href,
				styles: webview_style,
				show: {
					aniShow: aniShow
				},
				waiting: {
					autoShow: false
				}
			});
		} else if (id && ~id.indexOf('.html')) {
			//获得共用模板组
			var template = getTemplate('default');
			//获得共用父模板
			var headerWebview = template.header;
			//获得共用子webview
			var contentWebview = template.content;
			var title = this.innerText.trim();
			//通知模板修改标题，并显示隐藏右上角图标；
			mui.fire(headerWebview, 'updateHeader', {
				title: title,
				target:href,
				aniShow: aniShow
			});
			
			if(mui.os.ios||(mui.os.android&&parseFloat(mui.os.version)<4.4)){
				var reload = true;
				if (!template.loaded) {
					if (contentWebview.getURL() != this.href) {
						contentWebview.loadURL(this.href);
					} else {
						reload = false;
					}
				} else {
					reload = false;
				}
				(!reload) && contentWebview.show();
				
				headerWebview.show(aniShow, 150);
			}
		}
	})
}
