package org.apache.mycat.advisor.service.om.info.impl;

import java.util.Map;

import org.apache.mycat.advisor.common.controller.Page;
import org.apache.mycat.advisor.persistence.dao.TabOrderMapper;
import org.apache.mycat.advisor.persistence.dto.TabOrderDto;
import org.apache.mycat.advisor.persistence.model.TabOrder;
import org.apache.mycat.advisor.persistence.util.MyMapper;
import org.apache.mycat.advisor.service.base.BaseServiceImpl;
import org.apache.mycat.advisor.service.om.info.OrderInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderInfoServiceImpl extends BaseServiceImpl<TabOrder> implements
		OrderInfoService {

	@Autowired
	private TabOrderMapper orderMapper;
	
	@Override
	protected MyMapper<TabOrder> myMapper() {
		return orderMapper;
	}


}
