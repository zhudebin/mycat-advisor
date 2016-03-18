package org.apache.mycat.advisor.service.authorities;

import org.apache.mycat.advisor.persistence.model.SysAuthorities;
import org.apache.mycat.advisor.service.base.BaseService;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

/**
 * Created by cjl on 2016/3/20.
 */
public interface SysAuthoritiesService extends BaseService<SysAuthorities> {


    /**
     * 根据用户名获取到用户的权限并封装成GrantedAuthority集合
     *
     * @param username
     */
    public Collection<GrantedAuthority> loadUserAuthorities(String username);
}
