package org.apache.mycat.advisor.common.io.poi.convert;


/**
 * double类型转换器
 * 
 * @author Asgic
 *
 */
public class DoubleConvert implements IValueConvert<Double> {
	@Override
	public Double parse(String obj) {
		return Double.parseDouble(obj);
	}
}