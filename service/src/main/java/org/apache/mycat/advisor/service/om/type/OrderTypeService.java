package org.apache.mycat.advisor.service.om.type;

import org.apache.mycat.advisor.persistence.model.DicOrderType;
import org.apache.mycat.advisor.service.base.BaseService;



/**
 * 
 * @author yangll
 *
 */
public interface OrderTypeService extends BaseService<DicOrderType>{
	public boolean save(DicOrderType type);
}
