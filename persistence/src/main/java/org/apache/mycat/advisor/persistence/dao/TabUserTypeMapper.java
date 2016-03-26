package org.apache.mycat.advisor.persistence.dao;

import org.apache.mycat.advisor.persistence.model.TabUserType;
import org.apache.mycat.advisor.persistence.util.MyMapper;

import java.util.List;

public interface TabUserTypeMapper  extends MyMapper<TabUserType> {
    public List<TabUserType> listByNameOrCode(String name);
}