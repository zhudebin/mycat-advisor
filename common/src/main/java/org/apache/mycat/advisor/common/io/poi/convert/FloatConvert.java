package org.apache.mycat.advisor.common.io.poi.convert;


/**
 * float类型转换器
 * 
 * @author Asgic
 *
 */
public class FloatConvert implements IValueConvert<Float> {
	@Override
	public Float parse(String obj) {
		return Float.parseFloat(obj);
	}
}
