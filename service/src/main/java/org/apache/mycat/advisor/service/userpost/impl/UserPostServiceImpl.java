package org.apache.mycat.advisor.service.userpost.impl;

import org.apache.mycat.advisor.persistence.dao.TabPostInfoMapper;
import org.apache.mycat.advisor.persistence.model.TabPostInfo;
import org.apache.mycat.advisor.persistence.util.MyMapper;
import org.apache.mycat.advisor.service.base.BaseServiceImpl;
import org.apache.mycat.advisor.service.userpost.UserPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by cjl on 2016/3/18.
 */
@Service
public class UserPostServiceImpl extends BaseServiceImpl<TabPostInfo> implements UserPostService {
    @Autowired
    private TabPostInfoMapper postInfoMapper;


    @Override
    protected MyMapper myMapper() {
        return postInfoMapper;
    }


}
