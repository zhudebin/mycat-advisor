package org.apache.mycat.advisor.service.um.userlogininfo.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import org.apache.commons.lang3.StringUtils;
import org.apache.mycat.advisor.common.controller.Page;
import org.apache.mycat.advisor.persistence.dao.TabUserLoginInfoMapper;
import org.apache.mycat.advisor.persistence.model.TabUserLoginInfo;
import org.apache.mycat.advisor.persistence.util.MyMapper;
import org.apache.mycat.advisor.service.base.BaseServiceImpl;
import org.apache.mycat.advisor.service.um.userlogininfo.UserLoginInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * Created by qyp on 2016/3/30.
 */
@Service
public class UserLoginInfoImpl extends BaseServiceImpl<TabUserLoginInfo> implements UserLoginInfoService {
    @Autowired
    TabUserLoginInfoMapper mapper;

    @Override
    protected MyMapper<TabUserLoginInfo> myMapper() {
        return this.mapper;
    }

    @Override
    public Page<TabUserLoginInfo> page(Map<String, Object> param) {
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
        TabUserLoginInfo loginInfo=new TabUserLoginInfo();
        loginInfo.setUsername(name);
        PageHelper.startPage(pageIndex + 1, pageCount);
        PageInfo<TabUserLoginInfo> pageInfo = new PageInfo<TabUserLoginInfo>(mapper.listByUserName(loginInfo));
        return twoPage(pageInfo);
    }
}
