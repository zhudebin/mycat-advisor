package org.apache.mycat.advisor.persistence.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Id;
import java.sql.Timestamp;

/**
 * Created by cjl on 2016/3/20.
 */
public class Authmethod {
    private Long id;
    private Long userId;
    private String logintype;
    private String loginname;
    private String encrypttype;
    private Byte enable;
    private Timestamp lastupdatedate;

    @Id
    @Column(name = "id", nullable = false, insertable = true, updatable = true)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "user_id", nullable = true, insertable = true, updatable = true)
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "logintype", nullable = true, insertable = true, updatable = true, length = 2)
    public String getLogintype() {
        return logintype;
    }

    public void setLogintype(String logintype) {
        this.logintype = logintype;
    }

    @Basic
    @Column(name = "loginname", nullable = true, insertable = true, updatable = true, length = 64)
    public String getLoginname() {
        return loginname;
    }

    public void setLoginname(String loginname) {
        this.loginname = loginname;
    }

    @Basic
    @Column(name = "encrypttype", nullable = true, insertable = true, updatable = true, length = 2)
    public String getEncrypttype() {
        return encrypttype;
    }

    public void setEncrypttype(String encrypttype) {
        this.encrypttype = encrypttype;
    }

    @Basic
    @Column(name = "enable", nullable = true, insertable = true, updatable = true)
    public Byte getEnable() {
        return enable;
    }

    public void setEnable(Byte enable) {
        this.enable = enable;
    }

    @Basic
    @Column(name = "lastupdatedate", nullable = false, insertable = true, updatable = true)
    public Timestamp getLastupdatedate() {
        return lastupdatedate;
    }

    public void setLastupdatedate(Timestamp lastupdatedate) {
        this.lastupdatedate = lastupdatedate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Authmethod that = (Authmethod) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (userId != null ? !userId.equals(that.userId) : that.userId != null) return false;
        if (logintype != null ? !logintype.equals(that.logintype) : that.logintype != null) return false;
        if (loginname != null ? !loginname.equals(that.loginname) : that.loginname != null) return false;
        if (encrypttype != null ? !encrypttype.equals(that.encrypttype) : that.encrypttype != null) return false;
        if (enable != null ? !enable.equals(that.enable) : that.enable != null) return false;
        if (lastupdatedate != null ? !lastupdatedate.equals(that.lastupdatedate) : that.lastupdatedate != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (userId != null ? userId.hashCode() : 0);
        result = 31 * result + (logintype != null ? logintype.hashCode() : 0);
        result = 31 * result + (loginname != null ? loginname.hashCode() : 0);
        result = 31 * result + (encrypttype != null ? encrypttype.hashCode() : 0);
        result = 31 * result + (enable != null ? enable.hashCode() : 0);
        result = 31 * result + (lastupdatedate != null ? lastupdatedate.hashCode() : 0);
        return result;
    }
}
