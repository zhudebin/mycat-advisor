package org.apache.mycat.advisor.persistence.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Id;
import java.sql.Timestamp;

/**
 * Created by cjl on 2016/3/20.
 */
public class AuthOne {
    private Long id;
    private Byte loginstatus;
    private String password;
    private Byte failcount;
    private String onlinestatus;
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
    @Column(name = "loginstatus", nullable = true, insertable = true, updatable = true)
    public Byte getLoginstatus() {
        return loginstatus;
    }

    public void setLoginstatus(Byte loginstatus) {
        this.loginstatus = loginstatus;
    }

    @Basic
    @Column(name = "password", nullable = true, insertable = true, updatable = true, length = 128)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "failcount", nullable = true, insertable = true, updatable = true)
    public Byte getFailcount() {
        return failcount;
    }

    public void setFailcount(Byte failcount) {
        this.failcount = failcount;
    }

    @Basic
    @Column(name = "onlinestatus", nullable = true, insertable = true, updatable = true, length = 1)
    public String getOnlinestatus() {
        return onlinestatus;
    }

    public void setOnlinestatus(String onlinestatus) {
        this.onlinestatus = onlinestatus;
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

        AuthOne authone = (AuthOne) o;

        if (id != null ? !id.equals(authone.id) : authone.id != null) return false;
        if (loginstatus != null ? !loginstatus.equals(authone.loginstatus) : authone.loginstatus != null) return false;
        if (password != null ? !password.equals(authone.password) : authone.password != null) return false;
        if (failcount != null ? !failcount.equals(authone.failcount) : authone.failcount != null) return false;
        if (onlinestatus != null ? !onlinestatus.equals(authone.onlinestatus) : authone.onlinestatus != null)
            return false;
        if (lastupdatedate != null ? !lastupdatedate.equals(authone.lastupdatedate) : authone.lastupdatedate != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (loginstatus != null ? loginstatus.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (failcount != null ? failcount.hashCode() : 0);
        result = 31 * result + (onlinestatus != null ? onlinestatus.hashCode() : 0);
        result = 31 * result + (lastupdatedate != null ? lastupdatedate.hashCode() : 0);
        return result;
    }
}
