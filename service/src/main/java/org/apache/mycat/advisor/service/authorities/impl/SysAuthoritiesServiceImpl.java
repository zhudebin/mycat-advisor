package org.apache.mycat.advisor.service.authorities.impl;

import org.apache.mycat.advisor.persistence.dao.SysAuthoritiesMapper;
import org.apache.mycat.advisor.persistence.model.SysAuthorities;
import org.apache.mycat.advisor.persistence.util.MyMapper;
import org.apache.mycat.advisor.service.authorities.SysAuthoritiesService;
import org.apache.mycat.advisor.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by cjl on 2016/3/20.
 */
@Service
public class SysAuthoritiesServiceImpl extends BaseServiceImpl<SysAuthorities> implements SysAuthoritiesService {
    @Autowired
    private SysAuthoritiesMapper sysAuthoritiesMapper;

    @Override
    protected MyMapper<SysAuthorities> myMapper() {
        return sysAuthoritiesMapper;
    }

    @Override
    public Collection<GrantedAuthority> loadUserAuthorities(String username) {
        List<SysAuthorities> list = this.getSysAuthoritiesByUsername(username);

        List<GrantedAuthority> auths = new ArrayList<GrantedAuthority>();

        for (SysAuthorities authority : list) {
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(authority.getAuthorityMark());
            auths.add(grantedAuthority);
        }

        return auths;
    }


    private List<SysAuthorities> getSysAuthoritiesByUsername(String username){
        List<SysAuthorities> list = sysAuthoritiesMapper.findSysAuthoritiesByUsername(username);
        return list;
    }


}
