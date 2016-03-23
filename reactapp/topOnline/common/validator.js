/*
 * 以v_开头的表示验证方法
 */

function v_loginName(value) {
	var reg = /^.{1,20}$/;
	return reg.test(value);
}

function v_password(value) {
	var reg = /^[a-zA-Z0-9\.]{6,16}$/;
	return reg.test(value);
}

function v_withdrawPassword(value) {
	var reg = /^[0-9]{6}$/;
	return reg.test(value);
}

function v_phone(value) {
	var reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	return reg.test(value);
}

function v_phoneCode(value) {
	var reg = /^[0-9]{6}$/;
	return reg.test(value);
}
