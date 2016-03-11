package org.apache.mycat.advisor.common.io.poi.convert;


/**
 * short类型转换器
 * 
 * @author Asgic
 *
 */
public class ShortConvert implements IValueConvert<Short> {
	@Override
	public Short parse(String obj) {
		if (obj.contains(".")) {
			obj = obj.substring(0, obj.indexOf("."));
		}
		return Short.parseShort(obj);
	}
}