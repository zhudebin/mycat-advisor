package org.apache.mycat.advisor.service.om.type.impl;

import java.util.Map;

import org.apache.mycat.advisor.common.controller.Page;
import org.apache.mycat.advisor.persistence.dao.DicOrderTypeMapper;
import org.apache.mycat.advisor.persistence.model.DicOrderType;
import org.apache.mycat.advisor.persistence.util.MyMapper;
import org.apache.mycat.advisor.service.base.BaseServiceImpl;
import org.apache.mycat.advisor.service.om.type.OrderTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderTypeServiceImpl extends BaseServiceImpl<DicOrderType> implements
		OrderTypeService {
	
	@Autowired
	private DicOrderTypeMapper mapper;
	
	@Override
	protected MyMapper<DicOrderType> myMapper() {
		return mapper;
	}

	@Override
	public boolean save(DicOrderType type) {
		type.setStatus(1);
		type.setDelFlag(0);
		return super.saveOrUpdate(type);
	}



}
