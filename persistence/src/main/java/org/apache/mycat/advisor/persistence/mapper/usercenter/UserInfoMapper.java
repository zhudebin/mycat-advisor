
package org.apache.mycat.advisor.persistence.mapper.usercenter;

import org.apache.mycat.advisor.persistence.model.usercenter.UserInfo;

public interface UserInfoMapper{
    UserInfo selectById(Integer id);
}
