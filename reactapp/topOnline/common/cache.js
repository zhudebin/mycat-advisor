function setUserloginData(name, pwdAse) {
	/*var userObj=getStorageUser();
	userObj.userName=name;
	userObj.pwdAse=pwdAse;
	saveStorageUser(userObj);
//	console.log("-----------"+userObj.userName+"-->"+pwdAse);*/
	plus.storage.setItem("bingbeeuserName",name);
	plus.storage.setItem("bingbeepwdAse",pwdAse);
}

function Cache() {
	/*
	 * 刚进入app时调用
	 */
	this.init = function() {
		this.clearUserData();
	}
	
	/*
	 * 平台清除所有缓存的地方
	 */
	this.clearUserData = function() {
		var cache = new CacheParam();
		cache.clear();
		
		cache = new CacheSession();
		cache.clear();
	}
	
	/*
	 * 平台清除所有缓存的地方
	 */
	this.clearAll = function() {
		var cache = new CacheUser();
		cache.clear();
		
		this.init();
		
		cache = new CacheForever();
		cache.clear();
	}
	
	this.getCacheSize = function() {
		var count = 0;
		var cache = new CacheParam();
		count += cache.size();
		cache = new CacheSession();
		count += cache.size();
		
		if (count < 1024) {
			return count+'B';
		} else if (count < 1024*1024) {
			count = count / 1024;
			var countF = count.toFixed(2);
			return countF+'KB';
		} else if (count < 1024*1024*1024) {
			count = count / 1024 / 1024;
			var countF = count.toFixed(2);
			return countF+'M';
		}
	}
	
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

function CacheUser() {
	var mark = 'userCache';
	
	function save(cache) {
		cache = JSON.stringify(cache);
	    localStorage[mark] = cache;
	}
	
	this.size = function() {
		var cache = localStorage[mark];
		cache = JSON.stringify(cache);
		if (cache) {
			cache += mark;
			return getCharSize(cache);
		} else  {
			return 0;			
		}
	}
	
	this.clear = function() {
		localStorage.removeItem(mark);
	}
	
 	this.set = function(user) {
		var cache = localStorage[mark];
		if (!JSON.stringify(cache)) {
			cache = {};
		} else {
			cache = JSON.parse(cache);
		}
		if (typeof user == 'string') {
			user = JSON.parse(user);
		}
		for (p in user) {
			cache[p] = user[p];
		}
		save(cache);
	}
	
	this.get = function() {
		var cache = localStorage[mark];
		if (!JSON.stringify(cache)) {
			cache = {};
			save(cache);
			return cache;
		}
		cache = JSON.parse(cache);
		return cache;
	}
}

function CacheForever() {
	var mark = 'foreverCache';
	
	function save(cache) {
		cache = JSON.stringify(cache);
	    localStorage[mark] = cache;
	}
	
	this.size = function() {
		var cache = localStorage[mark];
		cache = JSON.stringify(cache);
		if (cache) {
			cache += mark;
			return getCharSize(cache);
		} else  {
			return 0;			
		}
	}
	
	this.clear = function() {
		localStorage.removeItem(mark);
	}
	
 	this.set = function(key, value) {
		var cache = localStorage[mark];
		if (!JSON.stringify(cache)) {
			cache = {};
		} else {
			cache = JSON.parse(cache);
		}
		cache[key] = value;
		save(cache);
	}
	
	this.get = function(key) {
		var cache = localStorage[mark];
		if (!JSON.stringify(cache)) {
			cache = {};
			save(cache);
			return null;
		}
		cache = JSON.parse(cache);
		
		if (!cache.hasOwnProperty(key)) {
			return null;
		}
		var value = cache[key];
		return value;
	}
}

function CacheSession() {
	var mark = 'sessionCache';
	
	function save(cache) {
		cache = JSON.stringify(cache);
	    localStorage[mark] = cache;
	}
	
	this.size = function() {
		var cache = localStorage[mark];
		cache = JSON.stringify(cache);
		if (cache) {
			cache += mark;
			return getCharSize(cache);
		} else  {
			return 0;			
		}
	}
	
	this.clear = function() {
		localStorage.removeItem(mark);
	}
	
 	this.set = function(key, value) {
		var cache = localStorage[mark];
		if (!JSON.stringify(cache)) {
			cache = {};
		} else {
			cache = JSON.parse(cache);
		}
		cache[key] = value;
		save(cache);
	}
	
	this.get = function(key) {
		var cache = localStorage[mark];
		if (!JSON.stringify(cache)) {
			cache = {};
			save(cache);
			return null;
		}
		cache = JSON.parse(cache);
		
		if (!cache.hasOwnProperty(key)) {
			return null;
		}
		var value = cache[key];
		return value;
	}
}

function CacheParam() {
	var mark = 'paramCache';
	
	function save(cache) {
		cache = JSON.stringify(cache);
	    localStorage[mark] = cache;
	}
	
	this.clear = function() {
		localStorage.removeItem(mark);
	}
	
	this.size = function() {
		var cache = localStorage[mark];
		cache = JSON.stringify(cache);
		if (cache) {
			cache += mark;
			return getCharSize(cache);
		} else  {
			return 0;			
		}
	}
	
 	this.set = function(key, value) {
		var cache = localStorage[mark];
		if (!JSON.stringify(cache)) {
			cache = {};
		} else {
			cache = JSON.parse(cache);
		}
		if (cache.hasOwnProperty(key)) {
			throw new Error("警告：key="+key+", 已经在缓存中，禁止覆盖。");
		}
		cache[key] = value;
		save(cache);
	}
	
	this.getAndRemove = function(key) {
		var cache = localStorage[mark];
		if (!JSON.stringify(cache)) {
			cache = {};
			save(cache);
			return null;
		}
		cache = JSON.parse(cache);
	    if (!cache.hasOwnProperty(key)) {
			return null;
		}
		var value = cache[key];
		delete cache[key];
		save(cache);
		return value;
	}
	
	this.get = function(key) {
		var cache = localStorage[mark];
		if (!JSON.stringify(cache)) {
			cache = {};
			save(cache);
			return null;
		}
		cache = JSON.parse(cache);
		
		if (!cache.hasOwnProperty(key)) {
			return null;
		}
		var value = cache[key];
		return value;
	}
}
