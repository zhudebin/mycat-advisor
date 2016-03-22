/* **********页面效果********** */
// 改变获得焦点时输入框标签字的颜色
function e_chginputcolor() {
	$('input').on('focus', function() {
		$('input').each(function() {
			onblur($(this).prev());
		});
		onfocus($(this).prev());
	});
	
	$('input').on('blur', function() {
		onblur($(this).prev());
	});
	
	function onfocus(obj) {
		obj.addClass('active');
	}
	
	function onblur(obj) {
		obj.removeClass('active');
	}
}

function l_checkInput(f_nextStep) {
	$('#password').on('input', function() {
		btnNextOn(v_password($(this).val()));
		btnClear();
	});
	
	function btnClear() {
		$('span.mui-icon-clear').off('tap');
		$('span.mui-icon-clear').on('tap', function() {
			btnNextOn(false);
		});
	}
	
	function btnNextOn(flag) {
		var e = $('#btn-nextstep');
		e.off('tap');
		if (flag) {
			e.addClass('Forgot-btn-on');
			e.on('tap', f_nextStep);
		} else {
			e.removeClass('Forgot-btn-on');
		}
	}
}