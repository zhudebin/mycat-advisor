package org.apache.mycat.advisor.persistence.model.usercenter;

/**
 * package: springboot.simple.model <br/>
 * functional describe:
 *
 * @author DR.YangLong [410357434@163.com]
 * @version 1.0    2016/3/13 15:58
 */
public class UserInfo {
    private Integer id;
    private String userName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
