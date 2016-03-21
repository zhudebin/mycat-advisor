package org.apache.mycat.advisor.web.security;

import org.apache.mycat.advisor.persistence.model.TabUserInfo;
import org.apache.mycat.advisor.service.authorities.SysAuthoritiesService;
import org.apache.mycat.advisor.service.userinfo.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserCache;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by cjl on 2016/3/19.
 */
@Component
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired  //数据库服务类
    private UserInfoService userInfoService;//code7
    @Autowired
    private SysAuthoritiesService authoritiesService;
    @Autowired
    private UserCache userCache;



    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        //SUser对应数据库中的用户表，是最终存储用户和密码的表，可自定义
        //本例使用SUser中的email作为用户名:
        System.out.println("loadUSer:" + userName);
        SecurityUser security = (SecurityUser) userCache.getUserFromCache(userName); //code8
        Collection<GrantedAuthority> auth = new ArrayList<>();
        TabUserInfo user = null;
        if (security == null) {

            user = userInfoService.findUserByUsername(userName);
            if (user == null) {
                throw new UsernameNotFoundException("UserName " + userName + " not found");
            }
            auth = authoritiesService.loadUserAuthorities(userName);
            user.setGrantedAuthority(auth);

            security = new SecurityUser(user);

        }
        // SecurityUser实现UserDetails并将SUser的Email映射为username
        userCache.putUserInCache(security);

        return security; //code9
    }


}

