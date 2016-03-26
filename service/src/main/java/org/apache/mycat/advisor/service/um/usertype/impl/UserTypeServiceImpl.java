package org.apache.mycat.advisor.service.um.usertype.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.commons.lang3.StringUtils;
import org.apache.mycat.advisor.common.controller.Page;
import org.apache.mycat.advisor.persistence.dao.TabUserTypeMapper;
import org.apache.mycat.advisor.persistence.model.TabUserType;
import org.apache.mycat.advisor.persistence.util.MyMapper;
import org.apache.mycat.advisor.service.base.BaseServiceImpl;
import org.apache.mycat.advisor.service.um.usertype.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * Created by cjl on 2016/3/25.
 */
@Service
public class UserTypeServiceImpl extends BaseServiceImpl<TabUserType> implements UserTypeService {
    @Autowired
    TabUserTypeMapper mapper;

    @Override
    protected MyMapper<TabUserType> myMapper() {
        return this.mapper;
    }

    @Override
    public Page<TabUserType> page(Map<String, Object> param) {
        int pageIndex = 0;
        int pageCount = 8;
        Object tmpIndex = param.get("pageIndex");
        Object tmpCount = param.get("pageCount");
        if (tmpIndex != null && StringUtils.isNotEmpty(tmpIndex.toString())) {
            pageIndex = Integer.parseInt(tmpIndex.toString());
        }
        if (tmpCount != null && StringUtils.isNotEmpty(tmpCount.toString())) {
            pageCount = Integer.parseInt(tmpCount.toString());
        }
        Object tmpstr = param.get("name");
        String name = "";
        if (tmpstr != null && StringUtils.isNotEmpty(tmpstr.toString())) {
            name =tmpstr.toString();
        }
        PageHelper.startPage(pageIndex + 1, pageCount);
        PageInfo<TabUserType> pageInfo = new PageInfo<TabUserType>(mapper.listByNameOrCode("%"+name+"%"));
        return twoPage(pageInfo);
    }
}
