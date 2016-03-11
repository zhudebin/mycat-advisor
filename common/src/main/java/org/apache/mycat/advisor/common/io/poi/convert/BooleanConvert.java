package org.apache.mycat.advisor.common.io.poi.convert;


/**
 * boolean类型转换器
 * 
 * @author Asgic
 *
 */
public class BooleanConvert implements IValueConvert<Boolean> {
	@Override
	public Boolean parse(String obj) {
		return Boolean.parseBoolean(obj);
	}
}
