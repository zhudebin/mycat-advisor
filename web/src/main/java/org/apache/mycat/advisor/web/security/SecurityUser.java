package org.apache.mycat.advisor.web.security;

import org.apache.mycat.advisor.persistence.model.TabUserInfo;
import org.springframework.security.core.userdetails.User;

/**
 * Created by cjl on 2016/3/19.
 */
public class SecurityUser extends User
{
    TabUserInfo userInfo;
    private static final long serialVersionUID = 1L;

    public SecurityUser(TabUserInfo userInfo) {
        super(userInfo.getUsername(), userInfo.getPassword(), userInfo.getGrantedAuthority());
        this.userInfo = userInfo;
    }


    /**
     *
     @Override
    public boolean isAccountNonExpired() {
    return super.getAccountNonExpired()==1;
    }

     @Override
     public boolean isAccountNonLocked() {
     return super.getAccountNonLocked()==1;
     }

     @Override
     public boolean isCredentialsNonExpired() {
     return super.getCredentialsNonExpired()==1;
     }

     @Override
     public boolean isEnabled() {
     return super.getEnabled()==1;
     }
     */

}
